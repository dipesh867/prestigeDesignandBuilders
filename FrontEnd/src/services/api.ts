
// API service layer - ready for backend integration
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface QuoteFormData {
  id: number;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budget?: string;
  timeline?: string;
  message: string;
  date: string;
  images: { id: number; image: string }[];
}

export interface CustomerMessages {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  date: string;
  type: "contact";
}

export interface GalleryItem {
  id: number;
  title: string;
  type: string;
  image: string;
  description: string;
}

export interface Interior {
  id: number;
  name: string;
  description: string;
  budget: string;
  timeline: string;
  images?: { id: number; image: string }[];
}

export interface InteriorImage {
  id: number;
  image: string; // full image URL
}

export interface InteriorStyle {
  id: number;
  interior_name: string;
  description?: string;
  budget?: string;
  timeline?: string;
  features?: string[];  // prefer string[] over any for features list
  images: InteriorImage[]; // array of images with id and URL
}

// Future: Replace with actual API endpoints
const API_BASE_URL ='https://prestigedesignandbuilders.com/api';

function getCsrfToken(): string | null {
  const match = document.cookie.match(/csrftoken=([^;]+)/);
  return match ? match[1] : null;
}

export const apiService = {
  // Contact form submission
  submitContactForm: async (data: ContactFormData): Promise<ApiResponse<any>> => {
    try {
      // Future: Replace with actual API call
      console.log('Contact form submitted:', data);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return {
        data: { id: Date.now() },
        message: 'Contact form submitted successfully'
      };
    } catch (error) {
      return {
        error: 'Failed to submit contact form'
      };
    }
  },

  // Quote form submission
  submitQuoteForm: async (data: QuoteFormData | FormData): Promise<ApiResponse<any>> => {
    try {
      let body: BodyInit;
      let headers: Record<string, string> = {};
      if (data instanceof FormData) {
        body = data as FormData;
      } else {
        // Convert QuoteFormData to FormData
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          if (key === 'images' && Array.isArray(value)) {
            value.forEach((img: any) => {
              if (img instanceof File) {
                formData.append('images', img);
              }
            });
          } else if (value !== undefined && value !== null) {
            formData.append(key, value as string);
          }
        });
        body = formData;
      }
      const response = await fetch(`${API_BASE_URL}/quotes/`, {
        method: 'POST',
        body,
        headers,
      });
      if (!response.ok) {
        throw new Error(`Failed to submit quote: ${response.status}`);
      }
      const respData = await response.json();
      return {
        data: respData,
        message: 'Quote request submitted successfully',
      };
    } catch (error: any) {
      return {
        error: error.message || 'Failed to submit quote request',
      };
    }
  },

  // Newsletter subscription
  subscribeNewsletter: async (email: string): Promise<ApiResponse<any>> => {
    try {
      console.log('Newsletter subscription:', email);
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      return {
        data: { email },
        message: 'Successfully subscribed to newsletter'
      };
    } catch (error) {
      return {
        error: 'Failed to subscribe to newsletter'
      };
    }
  },

  getCustomerMessages: async (): Promise<ApiResponse<CustomerMessages[]>> => {
    try {
      // Replace with actual API call
      const response = await fetch(`${API_BASE_URL}/contact/list/`);
      const data = await response.json();
      return { data };
    } catch (error) {
      return {
        error: 'Failed to fetch messages'
      };
    }
  },

  deleteCustomerMessage: async (id: string): Promise<ApiResponse<void>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact/${id}/`, {  // Note trailing slash
        method: 'DELETE',
        credentials: 'omit',  // explicitly do not send cookies
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Delete failed with status ${response.status}`);
      }
      return { message: 'Message deleted successfully' };
    } catch (error: any) {
      return { error: error.message || 'Failed to delete message' };
    }
  },

getCustomerQuotes: async (): Promise<ApiResponse<QuoteFormData[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/quotes/list/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Assuming your API returns a JSON array of quotes directly:
    const data: QuoteFormData[] = await response.json();
    return { data };
  } catch (error: any) {
    return {
      error: error.message || 'Failed to fetch quotes',
    };
  }
},

  deleteCustomerQuote: async (id: string | number): Promise<ApiResponse<void>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/quotes/${id}/`, {
        method: 'DELETE',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`Delete failed with status ${response.status}`);
      }
      return { message: 'Quote deleted successfully' };
    } catch (error: any) {
      return { error: error.message || 'Failed to delete quote' };
    }
  },

  // GALLERY
  getGallery: async (): Promise<ApiResponse<GalleryItem[]>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/gallery/list/`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data: GalleryItem[] = await response.json();
      return { data };
    } catch (error: any) {
      return { error: error.message || 'Failed to fetch gallery' };
    }
  },
  createGalleryItem: async (item: Partial<GalleryItem> | FormData): Promise<ApiResponse<GalleryItem>> => {
    try {
      let body: BodyInit;
      let headers: Record<string, string> = {};
      if (item instanceof FormData) {
        body = item;
      } else {
        const formData = new FormData();
        Object.entries(item).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            formData.append(key, value as string);
          }
        });
        body = formData;
      }
      const response = await fetch(`${API_BASE_URL}/gallery/`, {
        method: 'POST',
        body,
        headers,
      });
      if (!response.ok) throw new Error(`Failed to create gallery item: ${response.status}`);
      const data: GalleryItem = await response.json();
      return { data };
    } catch (error: any) {
      return { error: error.message || 'Failed to create gallery item' };
    }
  },
  deleteGalleryItem: async (id: string | number): Promise<ApiResponse<void>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/gallery/${id}/`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error(`Delete failed with status ${response.status}`);
      return { message: 'Gallery item deleted successfully' };
    } catch (error: any) {
      return { error: error.message || 'Failed to delete gallery item' };
    }
  },

  // INTERIOR
  getInteriors: async (): Promise<ApiResponse<Interior[]>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/interior/list/`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data: Interior[] = await response.json();
      return { data };
    } catch (error: any) {
      return { error: error.message || 'Failed to fetch interiors' };
    }
  },
  createInterior: async (item: Partial<Interior> | FormData): Promise<ApiResponse<Interior>> => {
    try {
      let body: BodyInit;
      let headers: Record<string, string> = {};
      if (item instanceof FormData) {
        body = item;
      } else {
        const formData = new FormData();
        Object.entries(item).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            formData.append(key, value as string);
          }
        });
        body = formData;
      }
      const response = await fetch(`${API_BASE_URL}/interior/`, {
        method: 'POST',
        body,
        headers,
      });
      if (!response.ok) throw new Error(`Failed to create interior: ${response.status}`);
      const data: Interior = await response.json();
      return { data };
    } catch (error: any) {
      return { error: error.message || 'Failed to create interior' };
    }
  },
  deleteInterior: async (id: string | number): Promise<ApiResponse<void>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/interior/${id}/`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error(`Delete failed with status ${response.status}`);
      return { message: 'Interior deleted successfully' };
    } catch (error: any) {
      return { error: error.message || 'Failed to delete interior' };
    }
  },

  // INTERIOR STYLE
  getInteriorStyles: async (): Promise<ApiResponse<InteriorStyle[]>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/interior-style/list/`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data: InteriorStyle[] = await response.json();
      return { data };
    } catch (error: any) {
      return { error: error.message || 'Failed to fetch interior styles' };
    }
  },
createInteriorStyle: async (formData: FormData): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/interior-style/`, {
      method: 'POST',
      body: formData, // no headers!
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data?.detail || "Failed to create style");
    return { data };
  } catch (error: any) {
    return { error: error.message };
  }
},
  deleteInteriorStyle: async (id: string | number): Promise<ApiResponse<void>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/interior-style/${id}/`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error(`Delete failed with status ${response.status}`);
      return { message: 'Interior style deleted successfully' };
    } catch (error: any) {
      return { error: error.message || 'Failed to delete interior style' };
    }
  },

};


export const loginSuperuser = async (username: string, password: string) => {
  await fetch(`${API_BASE_URL}/csrf/`, {
    credentials: "include",
  });

  const csrfToken = getCsrfToken();

  return fetch(`${API_BASE_URL}/admin/login/`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrfToken || "",
    },
    body: JSON.stringify({ username, password }),
  });
};


export const logoutSuperuser = async () => {
  return fetch(`${API_BASE_URL}/admin/logout/`, {
    method: "POST",
    credentials: "include",
  });
};




export const fetchUserProfile = async () => {
  await fetch(`${API_BASE_URL}/csrf/`, {
    credentials: "include",
  });

  const csrfToken = getCsrfToken();

  return fetch(`${API_BASE_URL}/user/profile/`, {
    credentials: "include",
    headers: {
      "X-CSRFToken": csrfToken || "",
    },
  });
};



