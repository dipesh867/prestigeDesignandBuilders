
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
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budget?: string;
  timeline?: string;
  message: string;
  files?: File[];
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

// Future: Replace with actual API endpoints
const API_BASE_URL ='http://localhost:8000/api';

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
  submitQuoteForm: async (data: QuoteFormData): Promise<ApiResponse<any>> => {
    try {
      // Future: Replace with actual API call with file upload
      console.log('Quote form submitted:', data);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      return {
        data: { 
          id: Date.now(),
          quoteNumber: `PDB-${Date.now()}`
        },
        message: 'Quote request submitted successfully'
      };
    } catch (error) {
      return {
        error: 'Failed to submit quote request'
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
  }
};

