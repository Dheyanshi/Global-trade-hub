import React, { useState } from 'react';
import { Moon, Sun, Globe, Shield, Users, Award, Phone, Mail, MapPin, Menu, X, ChevronDown, Factory, Zap, Truck, Building, Star, Quote, Wrench, Cog, Settings, ArrowRight, ExternalLink, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductNavigation from '@/components/ProductNavigation';
import industrialPump from "@/assets/industrial-pump.jpg";
import hdpeFittings from "@/assets/hdpe-fittings.jpg";
import insulatedTools from "@/assets/insulated-tools.png";
import nonSparkingTools from "@/assets/non-sparking-tools.png";
import customizedToolkits from "@/assets/customized-toolkits.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HierarchicalProducts from "@/components/HierarchicalProducts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const stats = [
    { label: "Countries Served", value: "25+", icon: Globe },
    { label: "Transactions (2025)", value: "116", icon: Award },
    { label: "Volume (Units)", value: "5,072.8", icon: Truck },
    { label: "Years of Trust", value: "1+", icon: Shield }
  ];

  const services = [
    {
      title: "Mechanical Equipment",
      description: "High-quality industrial Pumps and mechanical components for global markets",
      icon: Factory,
      categories: ["Industrial Pumps", "Tools & Equipment", "Manufacturing Components"],
      gradient: "from-blue-500 to-cyan-500",
      details: [
        "Hydraulic & Pneumatic Equipment Parts",
        "PVF : Pipes, Valves & Fittings",
        "Precision Tools & Instruments",
        "Fasteners & Flanges",
        "Industrial Automation Systems",
        "Manufacturing Components"
      ]
    },
    {
      title: "Electrical Equipment", 
      description: "Advanced electrical systems and components for diverse industrial applications",
      icon: Zap,
      categories: ["Control Systems", "Power Equipment", "Electronic Components"],
      gradient: "from-yellow-500 to-orange-500",
      details: [
        "Power Generation Equipment",
        "Control & Automation Systems",
        "Electronic Components & Circuits",
        "Electrical Motors & Drives",
        "Switchgear & Protection Devices",
        "Instrumentation & Measurement Tools"
      ]
    },
    {
      title: "Export Services",
      description: "Comprehensive export solutions to China, Africa, Europe, USA and beyond",
      icon: Truck,
      categories: ["Global Shipping", "Documentation", "Quality Assurance"],
      gradient: "from-green-500 to-emerald-500",
      details: [
        "International Logistics Management",
        "Export Documentation & Compliance",
        "Quality Control & Inspection",
        "Customs Clearance Support",
        "Insurance & Risk Management",
        "Multi-Modal Transportation"
      ]
    },
    {
      title: "Import Solutions",
      description: "Strategic import services for specialized equipment and materials",
      icon: Building,
      categories: ["Sourcing", "Quality Control", "Logistics Management"],
      gradient: "from-purple-500 to-pink-500",
      details: [
        "Global Sourcing & Procurement",
        "Vendor Assessment & Selection",
        "Import Documentation",
        "Port Handling & Clearance",
        "Warehousing & Distribution",
        "Technical Support & Training"
      ]
    }
  ];

  const clients = [
    {
      name: "Shanta Gold",
      logo: "/lovable-uploads/b44a4382-aa6f-4537-95f5-3437e7f1e862.png",
      industry: "Mining & Gold Processing",
      description: "Leading gold mining and processing company with operations across Africa",
      established: "1999"
    },
    {
      name: "Max Steel",
      logo: "/lovable-uploads/d120f919-7dd7-4d6b-aaca-c9dca47e8caa.png", 
      industry: "Steel Manufacturing",
      description: "Premier steel manufacturing and distribution company",
      established: "1985"
    },
    {
      name: "Barrick",
      logo: "/lovable-uploads/68b9ad6b-151a-46a4-a324-6320d7443172.png",
      industry: "Mining Operations",
      description: "World's leading gold mining company with global operations",
      established: "1983"
    },
    {
      name: "Ishaan Engineering Solutions",
      logo: "/lovable-uploads/9f90c827-3850-4e88-89d1-3340547564e2.png",
      industry: "Engineering Services",
      description: "Comprehensive engineering solutions and consulting services",
      established: "2010"
    },
    {
      name: "Mine Trade Ltd",
      logo: "/lovable-uploads/3231b7d4-3769-4f59-8849-b60e5441656d.png",
      industry: "Mining Equipment Trade",
      description: "Specialized mining equipment trading and supply chain solutions",
      established: "2005"
    },
    // Adding more placeholder clients to demonstrate slider functionality
    {
      name: "Global Mining Corp",
      logo: "/lovable-uploads/b44a4382-aa6f-4537-95f5-3437e7f1e862.png",
      industry: "Mining & Extraction",
      description: "International mining corporation with diverse mineral portfolios",
      established: "1995"
    },
    {
      name: "Industrial Solutions Ltd",
      logo: "/lovable-uploads/d120f919-7dd7-4d6b-aaca-c9dca47e8caa.png",
      industry: "Industrial Equipment",
      description: "Leading provider of industrial machinery and equipment solutions",
      established: "1992"
    },
    {
      name: "Tech Engineering Co",
      logo: "/lovable-uploads/9f90c827-3850-4e88-89d1-3340547564e2.png",
      industry: "Technology & Engineering",
      description: "Advanced technology solutions for industrial applications",
      established: "2008"
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      company: "Beijing Industrial Corp",
      location: "Beijing, China",
      text: "DHEYANSHI INTERNATIONAL has been our trusted partner for mechanical equipment imports. Their professionalism and quality assurance is exceptional. We've completed over 15 successful transactions with them.",
      rating: 5,
      image: "MC",
      role: "Procurement Director"
    },
    {
      name: "Sarah Johnson", 
      company: "European Manufacturing Ltd",
      location: "Munich, Germany",
      text: "Outstanding service in electrical equipment supply. They understand international compliance and deliver on time, every time. Their attention to detail is remarkable.",
      rating: 5,
      image: "SJ",
      role: "Supply Chain Manager"
    },
    {
      name: "Ahmed Hassan",
      company: "African Trade Solutions",
      location: "Lagos, Nigeria",
      text: "Their global reach and expertise in export-import operations have made them our preferred partner for industrial equipment. Highly recommended for African markets.",
      rating: 5,
      image: "AH",
      role: "Trade Operations Head"
    }
  ];

  const globalMarkets = [
    { region: "China", percentage: 35, color: "bg-gradient-to-r from-red-500 to-red-600" },
    { region: "Africa", percentage: 25, color: "bg-gradient-to-r from-green-500 to-green-600" },
    { region: "Europe", percentage: 20, color: "bg-gradient-to-r from-purple-500 to-purple-600" },
    { region: "USA", percentage: 15, color: "bg-gradient-to-r from-blue-500 to-blue-600" },
    { region: "Others", percentage: 5, color: "bg-gradient-to-r from-yellow-500 to-yellow-600" }
  ];

const products = [
  {
    name: "Industrial Slurry Pumps",
    partner: "Shijiazhuang Longteng Machinery Co., Ltd.",
    image: industrialPump,
    badge: { text: "Partner Product", color: "bg-blue-600" },
    description: "High-performance centrifugal slurry pumps designed for mining, dredging, and industrial applications. Features wear-resistant construction with rubber lining for extended service life.",
    priceRange: "$152 - $30,000",
    minOrder: "1 Set",
    features: [
      "Heavy-duty mining and dredging applications",
      "Rubber-lined for corrosion resistance",
      "Centrifugal and gravel pump variants",
      "Custom solutions available",
    ],
    link: "https://sjzlongteng.en.made-in-china.com/",
  },
  {
    name: "HDPE Pipe Fittings",
    partner: "Zhuji Gaohui Plastic Industry Co., Ltd.",
    image: hdpeFittings,
    badge: { text: "Partner Product", color: "bg-green-600" },
    description: "Professional manufacturer of high-density polyethylene pipe fittings from DN20mm to DN1200mm. Specialized in electro-fusion and butt-fusion fittings for water supply systems.",
    experience: "20+ Years",
    range: "DN20-1200mm",
    features: [
      "Electro-fusion fittings & adapters",
      "Butt-fusion elbows & tees",
      "Flange plates & backing rings",
      "End caps & reducers",
    ],
    link: "https://www.gh-pe.com/",
  },
  {
    name: "Industrial Safety Tools",
    partner: "Bombay Tools",
    images: [insulatedTools, nonSparkingTools, customizedToolkits],
    badge: { text: "Partner Product", color: "bg-orange-600" },
    description: "Professional-grade industrial tools designed for safety in hazardous environments. Trusted by leading industries including IOCL, BPCL, HPCL, GAIL, and Reliance for their reliability and precision.",
    industryFocus: "Safety First",
    applications: "Hazardous Zones",
    features: [
      "Customized Tool Kits",
      "Insulated Tools for electrical safety",
      "Non Sparking Tools for ATEX zones",
      "Industrial safety equipment",
    ],
    link: "https://thebombaytools.com/",
  }
];
  return (
    <div className="min-h-screen">
      <div className="bg-background text-foreground">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/c26d0e98-2c0c-423f-b91d-c123b91cf337.png" 
                    alt="DHEYANSHI INTERNATIONAL Logo" 
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <span className="text-lg lg:text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  DHEYANSHI INTERNATIONAL
                </span>
              </div>
              
               {/* Desktop Navigation */}
               <div className="hidden lg:flex items-center space-x-8">
                 <a href="#home" className="hover:text-primary transition-colors font-medium">Home</a>
                 <a href="#about" className="hover:text-primary transition-colors font-medium">About</a>
                 <ProductNavigation />
                 <a href="#services" className="hover:text-primary transition-colors font-medium">Services</a>
                 <a href="#clients" className="hover:text-primary transition-colors font-medium">Clients</a>
                 <a href="#markets" className="hover:text-primary transition-colors font-medium">Markets</a>
                 <a href="#testimonials" className="hover:text-primary transition-colors font-medium">Testimonials</a>
                 <a href="#contact" className="hover:text-primary transition-colors font-medium">Contact</a>
               </div>

               {/* Mobile Menu Button */}
               <div className="lg:hidden">
                 <Button variant="outline" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                   {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                 </Button>
               </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed right-0 top-0 h-full w-80 max-w-[90vw] bg-background border-l border-border shadow-xl">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div className="flex items-center space-x-2">
                    <img 
                      src="/lovable-uploads/c26d0e98-2c0c-423f-b91d-c123b91cf337.png" 
                      alt="DHEYANSHI INTERNATIONAL Logo" 
                      className="h-8 w-8 object-contain"
                    />
                    <span className="text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      DHEYANSHI INTERNATIONAL
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex flex-col p-6 space-y-6 overflow-y-auto">
                  <a 
                    href="#home" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a 
                    href="#about" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </a>
                  
                  <div className="space-y-3">
                    <div className="text-lg font-medium text-foreground">Products</div>
                    <div className="pl-4 space-y-3">
                      <a 
                        href="#products" 
                        className="block text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        View on Page
                      </a>
                      <Link 
                        to="/products" 
                        className="block text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Full Catalog
                      </Link>
                    </div>
                  </div>
                  
                  <a 
                    href="#services" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a 
                    href="#clients" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Clients
                  </a>
                  <a 
                    href="#markets" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Markets
                  </a>
                  <a 
                    href="#testimonials" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Testimonials
                  </a>
                  <a 
                    href="#contact" 
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section id="home" className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="text-sm border-blue-200 text-blue-700 bg-blue-50">Since February 2024</Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Global Trade
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">Excellence</span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    DHEYANSHI INTERNATIONAL LLP - Your trusted partner in mechanical and electrical equipment trading across China, Africa, Europe, USA, and beyond.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Explore Our Services
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 border-blue-200 hover:bg-blue-50">
                    View Global Reach
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center space-y-2">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto">
                          <stat.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{stat.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold">About DHEYANSHI INTERNATIONAL</h2>
                  <p className="text-lg text-muted-foreground">
                    Incorporated on February 27, 2024, DHEYANSHI INTERNATIONAL LLP has quickly established itself as a reliable player in the global trade of mechanical and electrical equipment.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Our Leadership</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Atul Prataprai Buvariya</div>
                        <div className="text-sm text-muted-foreground">Director</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Suchak Pankaj Jayantilal</div>
                        <div className="text-sm text-muted-foreground">Director</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Company Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold">Business Type</div>
                        <div className="text-muted-foreground">95% Export / 5% Import</div>
                      </div>
                      <div>
                        <div className="font-semibold">Incorporation</div>
                        <div className="text-muted-foreground">February 27, 2024</div>
                      </div>
                      <div>
                        <div className="font-semibold">Last Trade</div>
                        <div className="text-muted-foreground">April 2025</div>
                      </div>
                      <div>
                        <div className="font-semibold">Weight Handled</div>
                        <div className="text-muted-foreground">3,042.8 units</div>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="font-semibold mb-2">Head Office</div>
                      <div className="text-sm text-muted-foreground">
                        1107 Fortun Business Hub, Nr. Satymev ELYSIM,<br />
                        Ahmedabad, Gujarat, India – 380060
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950/20 dark:via-blue-950/20 dark:to-indigo-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-sm border-blue-200 text-blue-700 bg-blue-50 mb-4">Our Products</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Products & Partners
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our premium product lines from trusted manufacturing partners, delivering quality industrial solutions worldwide.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
                stopOnMouseEnter: false,
                stopOnFocusIn: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm overflow-hidden">
                    <div className="relative">
                      <div className="aspect-video overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 flex items-center justify-center">
                        {product.images ? (
                          <div className="grid grid-cols-3 gap-8 w-full max-w-sm">
                            {product.images.map((img, imgIndex) => (
                              <img
                                key={imgIndex}
                                src={img}
                                alt={`${product.name} ${imgIndex + 1}`}
                                className="w-full h-16 object-contain group-hover:scale-110 transition-transform duration-500 delay-75"
                              />
                            ))}
                          </div>
                        ) : (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        )}
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className={`${product.badge.color} text-white`}>{product.badge.text}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100 dark:border-gray-700">
                          <div>
                            <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                              {product.priceRange ? "Price Range" : product.experience ? "Experience" : "Industry Focus"}
                            </div>
                            <div className="text-lg font-bold text-blue-600">
                              {product.priceRange || product.experience || product.industryFocus}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                              {product.minOrder ? "Min. Order" : product.range ? "Range" : "Applications"}
                            </div>
                            <div className="text-lg font-bold text-green-600">
                              {product.minOrder || product.range || product.applications}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            {product.features.length > 4 ? "Key Features" : "Product Range"}
                          </div>
                          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            {product.features.map((feature, i) => (
                              <li key={i}>• {feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex gap-3 pt-4">
                          <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            Request Quote
                          </Button>
                          <Button
                            variant="outline"
                            className="border-blue-200 hover:bg-blue-50"
                            onClick={() => window.open(product.link, "_blank")}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 dark:bg-gray-800/90 border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow-lg" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/90 dark:bg-gray-800/90 border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow-lg" />
          </Carousel>
        </div>

            {/* More Products Coming Soon */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  More Products Coming Soon
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're continuously expanding our product portfolio with new manufacturing partners and innovative solutions. 
                  Stay tuned for exciting additions to our catalog.
                </p>
                <Button variant="outline" className="mt-4 border-blue-200 hover:bg-blue-50">
                  <span>Notify Me of New Products</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

        {/* Hierarchical Products Catalog */}
        <HierarchicalProducts />

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/10 dark:via-purple-950/10 dark:to-pink-950/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Why Choose Us</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Experience excellence in global trade with our comprehensive solutions and unwavering commitment to quality.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Global Presence</h3>
                  <p className="text-gray-600 dark:text-gray-300">Serving 25+ countries across China, Africa, Europe, USA and more</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Reliable Trade Execution</h3>
                  <p className="text-gray-600 dark:text-gray-300">116 successful transactions in 2025 with zero compliance issues</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Quality Equipment</h3>
                  <p className="text-gray-600 dark:text-gray-300">Premium mechanical and electrical equipment from trusted manufacturers</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Transparent Compliance</h3>
                  <p className="text-gray-600 dark:text-gray-300">Full regulatory compliance with clear documentation and processes</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-r from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-gray-600 bg-clip-text text-transparent dark:from-slate-200 dark:to-gray-300">Our Products & Services</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive trading solutions in mechanical and electrical equipment for global markets.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm overflow-hidden group">
                  <CardHeader className="relative">
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-gray-800 dark:text-gray-100">{service.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base text-gray-600 dark:text-gray-300">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {service.categories.map((category, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300">{category}</Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                        <Wrench className="h-4 w-4 mr-2" />
                        Our Expertise:
                      </h4>
                      <ul className="grid grid-cols-1 gap-1 text-sm text-gray-600 dark:text-gray-300">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Clients Section with Auto-rotating Slider */}
        <section id="clients" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Trusted Partners</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Proud to serve leading companies across mining, steel, and engineering industries worldwide. Building lasting partnerships that drive global trade excellence.
              </p>
              <div className="mt-6 flex justify-center">
                <Badge variant="outline" className="text-sm border-blue-200 text-blue-700 bg-blue-50 dark:bg-blue-950/20 dark:text-blue-300 dark:border-blue-800">
                  25+ Global Partners
                </Badge>
              </div>
            </div>

            {/* Client Carousel with Auto-rotation */}
            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                    stopOnInteraction: true,
                    stopOnMouseEnter: true,
                    stopOnFocusIn: true,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {clients.map((client, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                      <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm relative overflow-hidden h-full">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <CardContent className="p-6 text-center relative z-10 flex flex-col h-full">
                          {/* Logo Container with Enhanced Styling */}
                          <div className="mb-6 flex justify-center">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-500 border border-blue-100 dark:border-blue-800">
                                <img 
                                  src={client.logo} 
                                  alt={client.name}
                                  className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                              </div>
                            </div>
                          </div>
                          
                          {/* Client Information */}
                          <div className="flex-grow">
                            <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {client.name}
                            </h3>
                            <Badge variant="secondary" className="mb-3 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                              {client.industry}
                            </Badge>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                              {client.description}
                            </p>
                          </div>
                          
                          {/* Established Year */}
                          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Est. {client.established}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Navigation Buttons */}
                <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 dark:bg-gray-800/90 border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow-lg" />
                <CarouselNext className="hidden md:flex -right-12 bg-white/90 dark:bg-gray-800/90 border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow-lg" />
              </Carousel>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 text-center">
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">25+</div>
                  <div className="text-gray-600 dark:text-gray-300">Global Partners</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">116</div>
                  <div className="text-gray-600 dark:text-gray-300">Successful Projects (2025)</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                  <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
                </div>
              </div>
              
              <div className="mt-12">
                <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-4">
                  Ready to join our network of trusted partners?
                </p>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8">
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Global Markets */}
        <section id="markets" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/10 dark:via-teal-950/10 dark:to-cyan-950/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Global Reach</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trading across continents with strong presence in key global markets.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Market Distribution</h3>
                <div className="space-y-4">
                  {globalMarkets.map((market, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{market.region}</span>
                        <span className="text-sm text-muted-foreground">{market.percentage}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className={`${market.color} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${market.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Trade Highlights</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Export Focus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">5%</div>
                    <div className="text-sm text-muted-foreground">Import Operations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">25+</div>
                    <div className="text-sm text-muted-foreground">Countries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">116</div>
                    <div className="text-sm text-muted-foreground">2025 Transactions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section with Auto-rotation */}
        <section id="testimonials" className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-violet-950/10 dark:via-purple-950/10 dark:to-fuchsia-950/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">What Our Partners Say</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Trusted by businesses worldwide for reliable trading partnerships and exceptional service.
              </p>
            </div>

            {/* Testimonials Carousel with Auto-rotation */}
            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                    stopOnInteraction: true,
                    stopOnMouseEnter: true,
                    stopOnFocusIn: true,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm relative overflow-hidden group h-full">
                        {/* Quote Icon */}
                        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                          <Quote className="h-12 w-12 text-violet-500" />
                        </div>
                        
                        <CardContent className="pt-8 relative z-10 flex flex-col h-full">
                          {/* Rating Stars */}
                          <div className="flex mb-6 justify-center">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          
                          {/* Testimonial Text */}
                          <blockquote className="text-gray-700 dark:text-gray-300 mb-6 text-center italic leading-relaxed flex-grow">
                            "{testimonial.text}"
                          </blockquote>
                          
                          {/* Client Info */}
                          <div className="flex items-center space-x-4 mt-auto">
                            {/* Avatar */}
                            <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {testimonial.image}
                            </div>
                            
                            {/* Client Details */}
                            <div className="flex-1">
                              <div className="font-bold text-gray-800 dark:text-gray-100">{testimonial.name}</div>
                              <div className="text-sm text-violet-600 dark:text-violet-400 font-medium">{testimonial.role}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</div>
                              <div className="text-xs text-gray-400 dark:text-gray-500">{testimonial.location}</div>
                            </div>
                          </div>
                        </CardContent>
                        
                        {/* Hover Effect Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Navigation Buttons */}
                <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 dark:bg-gray-800/90 border-violet-200 hover:bg-violet-50 dark:hover:bg-violet-900/20 shadow-lg" />
                <CarouselNext className="hidden md:flex -right-12 bg-white/90 dark:bg-gray-800/90 border-violet-200 hover:bg-violet-50 dark:hover:bg-violet-900/20 shadow-lg" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to expand your global trade? Contact us to discuss your requirements.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <div className="font-semibold">Head Office</div>
                        <div className="text-muted-foreground">
                          1107 Fortun Business Hub, Nr. Satymev ELYSIM,<br />
                          Ahmedabad, Gujarat, India – 380060
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="h-6 w-6 text-primary" />
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-muted-foreground">+91 XXX XXX XXXX</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6 text-primary" />
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-muted-foreground">info@dheyanshinternational.com</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div>Monday - Friday: 9:00 AM - 6:00 PM IST</div>
                    <div>Saturday: 9:00 AM - 2:00 PM IST</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="First Name" 
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      />
                      <input 
                        type="text" 
                        placeholder="Last Name" 
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      />
                    </div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    />
                    <input 
                      type="text" 
                      placeholder="Company Name" 
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    />
                    <textarea 
                      placeholder="Message" 
                      rows={4} 
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    ></textarea>
                    <Button className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-slate-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/c26d0e98-2c0c-423f-b91d-c123b91cf337.png" 
                      alt="DHEYANSHI INTERNATIONAL Logo" 
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    DHEYANSHI
                  </span>
                </div>
                <p className="text-white/80">
                  Your trusted partner in global trade of mechanical and electrical equipment.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2 text-white/80">
                  <div><a href="#home" className="hover:text-white-foreground transition-colors">Home</a></div>
                  <div><a href="#about" className="hover:text-white-foreground transition-colors">About Us</a></div>
                  <div><a href="#services" className="hover:text-white-foreground transition-colors">Services</a></div>
                  <div><a href="#contact" className="hover:text-white-foreground transition-colors">Contact</a></div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <div className="space-y-2 text-white/80">
                  <div>Mechanical Equipment</div>
                  <div>Electrical Equipment</div>
                  <div>Export Services</div>
                  <div>Import Solutions</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal Information</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>LLP Identification: [LLPIN]</div>
                  <div>GST Registration: [GST Number]</div>
                  <div>ROC: Gujarat</div>
                  <div>Incorporated: Feb 27, 2024</div>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
              <p>&copy; 2024 DHEYANSHI INTERNATIONAL LLP. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
