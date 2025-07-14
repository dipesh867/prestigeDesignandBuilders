import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiService, CustomerMessages } from "@/services/api";
import {
  Upload,
  Image,
  MessageSquare,
  Palette,
  Save,
  Trash2,
  Edit3,
  Plus,
  X,
  Home,
  FileText,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface InteriorStyle {
  id: string;
  name: string;
  description: string;
  image: string;
  budget: string;
  timeline: string;
  features: string[];
}

interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  location: string;
  description: string;
  images: string[];
  date: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"gallery" | "styles" | "messages" | "quotes">(
    "gallery"
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Gallery state
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [editingGallery, setEditingGallery] = useState<GalleryItem | null>(
    null
  );
  const [newGalleryItem, setNewGalleryItem] = useState({
    title: "",
    description: "",
    image: "",
    category: "Residential",
  });
  const [galleryImageFile, setGalleryImageFile] = useState<File | null>(null);

  // Interior styles state
  const [interiorStyles, setInteriorStyles] = useState<InteriorStyle[]>([]);
  const [editingStyle, setEditingStyle] = useState<InteriorStyle | null>(null);
  const [newInteriorStyle, setNewInteriorStyle] = useState({
    name: "",
    description: "",
    image: "",
    budget: "",
    timeline: "",
    features: [""],
  });
  const [styleImageFile, setStyleImageFile] = useState<File | null>(null);

  // Messages state
  const [customerMessages, setCustomerMessages] = useState<CustomerMessages[]>(
    []
  );

  // Quote requests state
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([]);

  // Fixed keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for Shift + Alt + A combination
      if (event.shiftKey && event.altKey && event.code === "KeyA") {
        event.preventDefault();
        console.log("Admin shortcut triggered!"); // Debug log
        if (!isAuthenticated) {
          // If not on admin page, navigate to it
          if (window.location.pathname !== "/admin") {
            navigate("/admin");
          }
        }
      }
    };

    // Add event listener to document
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate, isAuthenticated]);

  // Load mock data
  useEffect(() => {
    if (isAuthenticated) {
      // Mock gallery data
      setGalleryItems([
        {
          id: "1",
          title: "Modern Villa",
          description: "Luxurious modern villa with steel construction",
          image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
          category: "Residential",
        },
        {
          id: "2",
          title: "Commercial Complex",
          description: "State-of-the-art commercial building",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
          category: "Commercial",
        },
      ]);

      // Mock interior styles data
      setInteriorStyles([
        {
          id: "1",
          name: "Modern Minimalist",
          description: "Clean lines and open spaces",
          image:
            "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800",
          budget: "Rs.75,000 - Rs.150,000",
          timeline: "8-12 weeks",
          features: ["Open floor plans", "Neutral colors", "Natural materials"],
        },
      ]);
      // Mock quote requests
      setQuoteRequests([
        {
          id: "1",
          name: "Alice Johnson",
          email: "alice@example.com",
          phone: "+1-555-0456",
          projectType: "Residential Construction",
          budget: "Rs.15,00,000 - Rs.25,00,000",
          timeline: "3-6 months",
          location: "Mumbai, Maharashtra",
          description: "Looking to build a modern 3BHK house with steel frame construction. Need earthquake-resistant design.",
          images: [
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
          ],
          date: "2024-01-16",
        },
        {
          id: "2",
          name: "Robert Kumar",
          email: "robert@example.com",
          phone: "+1-555-0789",
          projectType: "Commercial Construction",
          budget: "Rs.50,00,000 - Rs.1,00,00,000",
          timeline: "6-12 months",
          location: "Delhi, India",
          description: "Commercial warehouse construction with steel structure. Need fire-resistant materials and proper ventilation system.",
          images: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400"
          ],
          date: "2024-01-15",
        },
      ]);
    }
  }, [isAuthenticated]);

  
  useEffect(() => {
    async function fetchMessages() {
      const response = await apiService.getCustomerMessages();
      if (response.error) {
        console.error("Error fetching messages:", response.error);
      } else if (response.data) {
        setCustomerMessages(response.data);
      }
    }
    fetchMessages();
  }, []);

const handleDeleteMessage = async (id: string) => {
  const response = await apiService.deleteCustomerMessage(id);

  if (response.error) {
    toast({
      title: "Error",
      description: response.error,
      variant: "destructive",
      duration: 3000,
    });
  } else {
    // Remove message from state to update UI immediately
    setCustomerMessages((prevMessages) =>
      prevMessages.filter((msg) => msg.id !== id)
    );

    toast({
      title: "Deleted",
      description: "Message deleted successfully",
      duration: 2000,
    });
  }
};
  

  const handleLogin = () => {
    if (password === "admin123") {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel!",
        variant: "default",
        duration: 3000,
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid password. Please try again.",
        variant: "destructive",
      });
    }
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    navigate("/");
    toast({
      title: "Logged Out",
      description: "You have been logged out",
      duration: 3000,
    });
  };

  const handleGalleryImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setGalleryImageFile(file);
      // Create a temporary URL for preview
      const imageUrl = URL.createObjectURL(file);
      setNewGalleryItem({
        ...newGalleryItem,
        image: imageUrl,
      });
    }
  };

  const handleStyleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setStyleImageFile(file);
      // Create a temporary URL for preview
      const imageUrl = URL.createObjectURL(file);
      setNewInteriorStyle({
        ...newInteriorStyle,
        image: imageUrl,
      });
    }
  };

  const handleAddGalleryItem = () => {
    if (!newGalleryItem.title || !newGalleryItem.image) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and upload an image.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    const newItem: GalleryItem = {
      id: Date.now().toString(),
      ...newGalleryItem,
    };

    setGalleryItems([...galleryItems, newItem]);
    setNewGalleryItem({
      title: "",
      description: "",
      image: "",
      category: "Residential",
    });
    setGalleryImageFile(null);

    toast({
      title: "Gallery Item Added",
      description: "New gallery item has been added successfully.",
      duration: 2000,
    });
  };

  const handleAddInteriorStyle = () => {
    if (!newInteriorStyle.name || !newInteriorStyle.image) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and upload an image.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    const newStyle: InteriorStyle = {
      id: Date.now().toString(),
      ...newInteriorStyle,
      features: newInteriorStyle.features.filter((f) => f.trim() !== ""),
    };

    setInteriorStyles([...interiorStyles, newStyle]);
    setNewInteriorStyle({
      name: "",
      description: "",
      image: "",
      budget: "",
      timeline: "",
      features: [""],
    });
    setStyleImageFile(null);

    toast({
      title: "Interior Style Added",
      description: "New interior style has been added successfully.",
    });
  };

  const handleDeleteGalleryItem = (id: string) => {
    setGalleryItems(galleryItems.filter((item) => item.id !== id));
    toast({
      title: "Item Deleted",
      description: "Gallery item has been deleted.",
      duration: 3000,
    });
  };

  const handleDeleteInteriorStyle = (id: string) => {
    setInteriorStyles(interiorStyles.filter((style) => style.id !== id));
    toast({
      title: "Style Deleted",
      description: "Interior style has been deleted.",
      duration: 3000,
    });
  };

  // const handleDeleteMessage = (id: string) => {
  //   setCustomerMessages(customerMessages.filter((msg) => msg.id !== id));
  //   toast({
  //     title: "Message Deleted",
  //     description: "Customer message has been deleted.",
  //     duration: 3000,
  //   });
  // };

  const handleDeleteQuoteRequest = (id: string) => {
    setQuoteRequests(quoteRequests.filter((quote) => quote.id !== id));
    toast({
      title: "Quote Request Deleted",
      description: "Quote request has been deleted.",
      duration: 3000,
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-charcoal-900 flex items-center justify-center px-4">
        <Card className="w-full max-w-md bg-charcoal-800 border-charcoal-700">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white">
              Admin Login
            </CardTitle>
            <CardDescription className="text-gray-400">
              Enter password to access admin panel
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-charcoal-700 border-charcoal-600 text-white"
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
            <Button
              onClick={handleLogin}
              className="w-full bg-gold-gradient text-charcoal-900 hover:bg-gold-gradient-hover"
            >
              Login
            </Button>
            <Link to="/">
              <Button
                variant="outline"
                className="w-full border-charcoal-600 text-white hover:bg-charcoal-700 hover:text-white"
              >
                <Home className="mr-2" size={16} />
                Go to Home Page
              </Button>
            </Link>
            <p className="text-sm text-gray-400 text-center">
              Shortcut: Shift + Alt + A
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal-900">
      {/* Header */}
      <header className="bg-charcoal-800 border-b border-charcoal-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Prestige Builders Admin</span>
            <Button
              variant="outline"
              onClick={() => {
                setIsAuthenticated(false);
                setPassword("");
              }}
              className="border-charcoal-600 text-white hover:bg-charcoal-700"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-charcoal-800 border-b border-charcoal-700 px-6">
        <div className="flex space-x-8">
          {[
            { key: "gallery", label: "Gallery Management", icon: Image },
            { key: "styles", label: "Interior Styles", icon: Palette },
            {
              key: "messages",
              label: "Customer Messages",
              icon: MessageSquare,
            },
            {
              key: "quotes",
              label: "Quote Requests",
              icon: FileText,
            },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                activeTab === key
                  ? "border-gold-400 text-gold-400"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "gallery" && (
          <div className="space-y-6 animate-fade-in">
            {/* Add New Gallery Item */}
            <Card className="bg-charcoal-800 border-charcoal-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Plus className="mr-2" size={20} />
                  Add New Gallery Item
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Title"
                    value={newGalleryItem.title}
                    onChange={(e) =>
                      setNewGalleryItem({
                        ...newGalleryItem,
                        title: e.target.value,
                      })
                    }
                    className="bg-charcoal-700 border-charcoal-600 text-white"
                  />
                  <select
                    value={newGalleryItem.category}
                    onChange={(e) =>
                      setNewGalleryItem({
                        ...newGalleryItem,
                        category: e.target.value,
                      })
                    }
                    className="bg-charcoal-700 border border-charcoal-600 text-white rounded-md px-3 py-2"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                </div>
                
                {/* Image Upload */}
                <div className="space-y-2">
                  <label className="text-white block text-sm font-medium">Upload Image</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleGalleryImageUpload}
                      className="hidden"
                      id="gallery-image-upload"
                    />
                    <label
                      htmlFor="gallery-image-upload"
                      className="flex items-center space-x-2 bg-charcoal-700 border border-charcoal-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-charcoal-600 transition-colors"
                    >
                      <Upload size={16} />
                      <span>Choose Image</span>
                    </label>
                    {galleryImageFile && (
                      <span className="text-gold-400 text-sm">{galleryImageFile.name}</span>
                    )}
                  </div>
                  {newGalleryItem.image && (
                    <div className="mt-2">
                      <img
                        src={newGalleryItem.image}
                        alt="Preview"
                        className="w-32 h-24 object-cover rounded-md border border-charcoal-600"
                      />
                    </div>
                  )}
                </div>

                <Textarea
                  placeholder="Description"
                  value={newGalleryItem.description}
                  onChange={(e) =>
                    setNewGalleryItem({
                      ...newGalleryItem,
                      description: e.target.value,
                    })
                  }
                  className="bg-charcoal-700 border-charcoal-600 text-white"
                />
                <Button
                  onClick={handleAddGalleryItem}
                  className="bg-gold-gradient text-charcoal-900"
                >
                  <Save className="mr-2" size={16} />
                  Add Gallery Item
                </Button>
              </CardContent>
            </Card>

            {/* Gallery Items List */}
            <Card className="bg-charcoal-800 border-charcoal-700">
              <CardHeader>
                <CardTitle className="text-white">Gallery Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {galleryItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-charcoal-700 rounded-lg overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-white font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                          {item.description}
                        </p>
                        <span className="inline-block bg-gold-400 text-charcoal-900 px-2 py-1 rounded text-xs mb-3">
                          {item.category}
                        </span>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-charcoal-600 text-white"
                          >
                            <Edit3 size={14} />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDeleteGalleryItem(item.id)}
                          >
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "styles" && (
          <div className="space-y-6 animate-fade-in">
            {/* Add New Interior Style */}
            <Card className="bg-charcoal-800 border-charcoal-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Plus className="mr-2" size={20} />
                  Add New Interior Style
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Style Name"
                    value={newInteriorStyle.name}
                    onChange={(e) =>
                      setNewInteriorStyle({
                        ...newInteriorStyle,
                        name: e.target.value,
                      })
                    }
                    className="bg-charcoal-700 border-charcoal-600 text-white"
                  />
                  <Input
                    placeholder="Budget Range (e.g., Rs.50,000 - Rs.100,000)"
                    value={newInteriorStyle.budget}
                    onChange={(e) =>
                      setNewInteriorStyle({
                        ...newInteriorStyle,
                        budget: e.target.value,
                      })
                    }
                    className="bg-charcoal-700 border-charcoal-600 text-white"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Timeline (e.g., 8-12 weeks)"
                    value={newInteriorStyle.timeline}
                    onChange={(e) =>
                      setNewInteriorStyle({
                        ...newInteriorStyle,
                        timeline: e.target.value,
                      })
                    }
                    className="bg-charcoal-700 border-charcoal-600 text-white"
                  />
                </div>

                {/* Image Upload for Interior Styles */}
                <div className="space-y-2">
                  <label className="text-white block text-sm font-medium">Upload Image</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleStyleImageUpload}
                      className="hidden"
                      id="style-image-upload"
                    />
                    <label
                      htmlFor="style-image-upload"
                      className="flex items-center space-x-2 bg-charcoal-700 border border-charcoal-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-charcoal-600 transition-colors"
                    >
                      <Upload size={16} />
                      <span>Choose Image</span>
                    </label>
                    {styleImageFile && (
                      <span className="text-gold-400 text-sm">{styleImageFile.name}</span>
                    )}
                  </div>
                  {newInteriorStyle.image && (
                    <div className="mt-2">
                      <img
                        src={newInteriorStyle.image}
                        alt="Preview"
                        className="w-32 h-24 object-cover rounded-md border border-charcoal-600"
                      />
                    </div>
                  )}
                </div>

                <Textarea
                  placeholder="Description"
                  value={newInteriorStyle.description}
                  onChange={(e) =>
                    setNewInteriorStyle({
                      ...newInteriorStyle,
                      description: e.target.value,
                    })
                  }
                  className="bg-charcoal-700 border-charcoal-600 text-white"
                />
                <div>
                  <label className="text-white block mb-2">Features:</label>
                  {newInteriorStyle.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <Input
                        placeholder={`Feature ${index + 1}`}
                        value={feature}
                        onChange={(e) => {
                          const updatedFeatures = [
                            ...newInteriorStyle.features,
                          ];
                          updatedFeatures[index] = e.target.value;
                          setNewInteriorStyle({
                            ...newInteriorStyle,
                            features: updatedFeatures,
                          });
                        }}
                        className="bg-charcoal-700 border-charcoal-600 text-white"
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setNewInteriorStyle({
                            ...newInteriorStyle,
                            features: [...newInteriorStyle.features, ""],
                          });
                        }}
                        className="border-charcoal-600 text-white"
                      >
                        <Plus size={14} />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={handleAddInteriorStyle}
                  className="bg-gold-gradient text-charcoal-900"
                >
                  <Save className="mr-2" size={16} />
                  Add Interior Style
                </Button>
              </CardContent>
            </Card>

            {/* Interior Styles List */}
            <Card className="bg-charcoal-800 border-charcoal-700">
              <CardHeader>
                <CardTitle className="text-white">Interior Styles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {interiorStyles.map((style) => (
                    <div
                      key={style.id}
                      className="bg-charcoal-700 rounded-lg overflow-hidden"
                    >
                      <img
                        src={style.image}
                        alt={style.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-white font-semibold mb-2">
                          {style.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                          {style.description}
                        </p>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-gold-400 font-semibold">
                            {style.budget}
                          </span>
                          <span className="text-gray-300 text-sm">
                            {style.timeline}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-charcoal-600 text-white"
                          >
                            <Edit3 size={14} />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDeleteInteriorStyle(style.id)}
                          >
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "messages" && (
          <div className="space-y-6 animate-fade-in">
            <Card className="bg-charcoal-800 border-charcoal-700">
              <CardHeader>
                <CardTitle className="text-white">Customer Messages</CardTitle>
                <CardDescription className="text-gray-400">
                  Messages and inquiries from customers via Contact page
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customerMessages.map((message) => (
                    <div
                      key={message.id}
                      className="bg-charcoal-700 p-4 rounded-lg relative"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-white font-semibold">
                          {message.name}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400 text-sm">
                            {message.date.split("T")[0]}
                          </span>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDeleteMessage(message.id)}
                          >
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            message.type === "contact"
                              ? "bg-gold-400 text-charcoal-900"
                              : "bg-blue-400 text-white"
                          }`}
                        >
                          {message.type}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-2">
                        <strong>Email:</strong> {message.email}
                      </p>
                      {message.phone && (
                        <p className="text-gray-300 mb-2">
                          <strong>Phone:</strong> {message.phone}
                        </p>
                      )}
                      <p className="text-gray-300">
                        <strong>Message:</strong> {message.message}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "quotes" && (
          <div className="space-y-6 animate-fade-in">
            <Card className="bg-charcoal-800 border-charcoal-700">
              <CardHeader>
                <CardTitle className="text-white">Quote Requests</CardTitle>
                <CardDescription className="text-gray-400">
                  Detailed quote requests from customers via Get Quote page
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {quoteRequests.map((quote) => (
                    <div
                      key={quote.id}
                      className="bg-charcoal-700 p-6 rounded-lg relative"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-white font-semibold text-lg">
                          {quote.name}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400 text-sm">
                            {quote.date}
                          </span>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDeleteQuoteRequest(quote.id)}
                          >
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-gray-300 mb-2">
                            <strong>Email:</strong> {quote.email}
                          </p>
                          <p className="text-gray-300 mb-2">
                            <strong>Phone:</strong> {quote.phone}
                          </p>
                          <p className="text-gray-300 mb-2">
                            <strong>Location:</strong> {quote.location}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-300 mb-2">
                            <strong>Project Type:</strong> {quote.projectType}
                          </p>
                          <p className="text-gray-300 mb-2">
                            <strong>Budget:</strong> <span className="text-gold-400 font-medium">{quote.budget}</span>
                          </p>
                          <p className="text-gray-300 mb-2">
                            <strong>Timeline:</strong> {quote.timeline}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-300">
                          <strong>Project Description:</strong>
                        </p>
                        <p className="text-gray-400 mt-1 bg-charcoal-800 p-3 rounded">
                          {quote.description}
                        </p>
                      </div>

                      {quote.images && quote.images.length > 0 && (
                        <div>
                          <p className="text-gray-300 mb-3">
                            <strong>Uploaded Images:</strong>
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {quote.images.map((image, index) => (
                              <div key={index} className="relative">
                                <img
                                  src={image}
                                  alt={`Project image ${index + 1}`}
                                  className="w-full h-24 object-cover rounded-md border border-charcoal-600 hover:scale-105 transition-transform cursor-pointer"
                                  onClick={() => window.open(image, '_blank')}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
