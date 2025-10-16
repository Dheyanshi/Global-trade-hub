import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Package, Shield, Award, Truck, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContactForm from '@/components/ContactForm';

// Import product images
import slurryPumpsImage from '@/assets/slurry-pumps-category.jpg';
import hdpeFittingsImage from '@/assets/hdpe-fittings-category.jpg';
import toolsImage from '@/assets/tools-category.jpg';
import hdpeValvesImage from '@/assets/hdpe-valves.jpg';
import horizontalSlurryPumpImage from '@/assets/horizontal-slurry-pump.jpg';
import verticalSlurryPumpImage from '@/assets/vertical-slurry-pump.jpg';
import electrofusionFittingsImage from '@/assets/electrofusion-fittings.jpg';
import buttFusionFittingsImage from '@/assets/butt-fusion-fittings.jpg';
import hdpeBallValveImage from '@/assets/hdpe-ball-valve.jpg';
import centrifugalSlurryPumpImage from '@/assets/centrifugal-slurry-pump.jpg';
import gravelDredgingPumpImage from '@/assets/gravel-dredging-pump.jpg';
import zjZgbSlurryPumpImage from '@/assets/zj-zgb-slurry-pump.jpg';
import highPressurePumpImage from '@/assets/high-pressure-pump.jpg';
import frothPumpImage from '@/assets/froth-pump.jpg';
import pumpPartsImage from '@/assets/pump-parts.jpg';
import customizedToolkitsImage from '@/assets/customized-toolkits.png';
import insulatedToolsImage from '@/assets/insulated-tools.png';
import nonSparkingToolsImage from '@/assets/non-sparking-tools.png';
import shMetalLinedPumpImage from '@/assets/sh-metal-lined-pump.jpeg';
import shrRubberLinedPumpImage from '@/assets/shr-rubber-lined-pump.jpg';
import slSmSlurryPumpImage from '@/assets/sl-sm-slurry-pump.jpg';
import shhSlurryPumpImage from '@/assets/shh-slurry-pump.jpg';
import wnPumpImage from '@/assets/wn-pump.jpg';
import svSvrVerticalPumpImage from '@/assets/sv-svr-vertical-slurry-pump.jpg_560xaf.jpeg';
import zjlVerticalPumpImage from '@/assets/zjl-slurry-pump.jpg_560xaf.jpeg';
import gravelPumpImage from '@/assets/gravel-pump.jpg_560xaf.jpg';
import zjslurryPumpImage from '@/assets/zj-slurry-pump.jpg_560xaf.jpg';
import zgbslurryPumpImage from '@/assets/zgb-slurry-pump.jpg_560xaf.jpeg';
import sfPump from '@/assets/sf-pump.jpg_560xaf.jpeg';
import shfPump from '@/assets/shf-pump.jpg_560xaf.jpeg';
import puParts from '@/assets/pu-parts.jpg_560xaf.jpeg';
import rubberParts from '@/assets/rubber-parts.jpg_560xaf.jpeg';
import metalParts from '@/assets/metal-parts.jpg_560xaf.jpeg';
import efEqualCouplerImage from '@/assets/hdpe-pipe-fittings/ef-equal-coupler.jpg';
import efEndCapImage from '@/assets/hdpe-pipe-fittings/ef-end-cap.jpg';
import ef45ElbowImage from '@/assets/hdpe-pipe-fittings/ef-45-elbow.jpg';
import ef90ElbowImage from '@/assets/hdpe-pipe-fittings/ef-90-elbow.jpg';
import efEqualTeeImage from '@/assets/hdpe-pipe-fittings/ef-equal-tee.jpg';
import efreducingTeeImage from '@/assets/hdpe-pipe-fittings/ef-rreducing-tee.jpg';
import efReducerImage from '@/assets/hdpe-pipe-fittings/ef-reducer.jpg';
import efStubEndImage from '@/assets/hdpe-pipe-fittings/ef-stub-end.jpg';
// import efFemaleThreadImage from '@/assets/ef-female-thread.jpg';
// import efMaleThreadImage from '@/assets/ef-male-thread.jpg';
// import efCrossTeeImage from '@/assets/hdpe-pipe-fittings/ef-cross-tee.jpg';

import bfEndCapImage from '@/assets/hdpe-pipe-fittings/bf-end-cap.jpg';
// import bf225ElbowImage from '@/assets/hdpe-pipe-fittings/';
import bf45ElbowImage from '@/assets/hdpe-pipe-fittings/bf-45-elbow.jpg';
import bf90ElbowImage from '@/assets/hdpe-pipe-fittings/bf-90-elbow.jpg';
import bfFlangeImage from '@/assets/hdpe-pipe-fittings/bf-flange.jpg';
import bfEqualTeeImage from '@/assets/hdpe-pipe-fittings/bf-equal-tee.jpg';
import bfReducingTeeImage from '@/assets/hdpe-pipe-fittings/bf-reducing-tee.jpg';
import bfReducingCouplingImage from '@/assets/hdpe-pipe-fittings/bf-reducing-coupling.jpg';
import bfReducingCrossImage from '@/assets/hdpe-pipe-fittings/bf-reducing-cross.jpg';
interface SubcategoryDetails {
  name: string;
  description: string;
  image: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
}

interface ProductDetails {
  description: string;
  features: string[];
  specifications?: {
    discharge_size?: string;
    capacity?: string;
    head?: string;
    pressure?: string;
    category?: string;
    keywords?: string;
  };
}

// Add this const before the ProductDetail component
const productDetailsMap: { [key: string]: ProductDetails } = {
  'sh-metal-lined-slurry-pump': {
    description: [
      "Metal lined centrifugal horizontal slurry pumps are classified as heavy duty slurry pumps.",
      "Specifically designed for pumping highly abrasive and high-density slurry materials.",
      "Can be installed in multistage series under allowable pressure conditions.",
      "Optimized for lowest total cost of ownership while maintaining highest quality standards.",
      "Provides comprehensive solution including equipment, spare parts, and engineering support.",
      "Engineered for heavy-duty industrial applications and harsh slurry environments.",
      "Features wear-resistant cast alloys for pump liners and impellers.",
      "Ideal for applications with coarse or sharp-edged particles.",
      "Suitable for high impeller peripheral velocities and high operating temperatures.",
      "Backed by specialized slurry pump expertise and technical support."
    ],
    features: [
      "Modular design, easy to maintain with replaceable spare parts;",
      "Wide options of impellers of standard 5 vanes , 4 vanes high efficiency and 2 vanes non-clogging;",
      "27% Chrome alloy hard metal, thick rubber and polyurethane pump lining are available and can be replaced with each other;",
      "Standard ductile iron pump body, can withstand higher working pressure;",
      "Famous brand bearing components can improve reliability, prolong bearing life and reduce lubrication cost;",
      "Reliable shaft seal, packing seal, expeller seal, or mechanical seal are available;"
    ],
    specifications: {
      discharge_size: "1\" to 18\"",
      capacity: "5,000 m³/h",
      head: "73 m",
      pressure: "2100 kPa"
    }
  },
  'shr-rubber-lined-slurry-pump': {
    description: "The SHR Rubber Lined Slurry Pump is specifically engineered for corrosive and mildly abrasive slurry applications. The natural rubber lining provides excellent resistance to corrosion and moderate abrasion.",
    features: [
      "Natural rubber lining",
      "Corrosion resistant design",
      "Heavy-duty shaft assembly",
      "Extended service life",
      "Low maintenance requirements",
      "Excellent chemical resistance"
    ]
  },
  'slsm-slurry-pump': {
    description: "The SLSM Slurry Pump series offers a versatile solution for medium-duty slurry applications. Combines efficiency with durability for optimal performance in various industrial processes.",
    features: [
      "Medium-duty design",
      "Balanced impeller design",
      "Multiple material options",
      "Standardized parts",
      "Easy maintenance access",
      "Efficient operation"
    ]
  }
  // Add more products as needed
};

const ProductDetail = () => {
  const location = useLocation();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
  // Parse the pathname to get product information
  const pathParts = location.pathname.replace('/product/', '').split('/');
  const [categorySlug, subcategorySlug, productSlug] = pathParts;
debugger
  // Product data mapping
  const getProductImage = (categorySlug: string, subcategorySlug: string, productSlug: string) => {
    // First check for specific product images
    const productImageMap: { [key: string]: string } = {
      // Horizontal Slurry Pumps
      'sh-metal-lined-slurry-pump': shMetalLinedPumpImage,
      'shr-rubber-lined-slurry-pump': shrRubberLinedPumpImage,
      'slsm-slurry-pump': slSmSlurryPumpImage,
      'shh-slurry-pump': shhSlurryPumpImage,
      
      // Vertical Sump Pumps
      'sv-svr-vertical-slurry-pump': svSvrVerticalPumpImage,
      'zjl-vertical-sump-pump': zjlVerticalPumpImage,
      
      // Gravel Dredging Pumps
      'gravel-pump': gravelPumpImage,
      'wn-pump': wnPumpImage,
      'zj-slurry-pump': zjslurryPumpImage,
      'zgb-slurry-pump': zgbslurryPumpImage,
      'sf-pump': sfPump,
      'shf-pump': shfPump,
      'metal-parts':metalParts,
      'rubber-parts':rubberParts,
      'pu-parts': puParts,
      'ef-equal-coupler': efEqualCouplerImage,
      'ef-end-cup': efEndCapImage,
      'ef-45elbow': ef45ElbowImage,
      'ef-90elbow': ef90ElbowImage,
      'ef-equal-tee': efEqualTeeImage,
      'ef-reducing-tee': efreducingTeeImage,
      'ef-reducer': efReducerImage,
      'ef-stub-end': efStubEndImage,
      // 'ef-female-thread': efFemaleThreadImage,
      // 'ef-male-thread': efMaleThreadImage,
      // 'ef-cross-tee': efCrossTeeImage,

      'butt-fusion-end-cap': bfEndCapImage,
      // 'bf-22-5-elbow': bf225ElbowImage,
      'butt-fusion-45elbow': bf45ElbowImage,
      'butt-fusion-90elbow': bf90ElbowImage,
      'butt-fusion-flange': bfFlangeImage,
      'butt-fusion-equal-tee': bfEqualTeeImage,
      'butt-fusion-reducing-tee': bfReducingTeeImage,
      'butt-fusion-reducing-coupling': bfReducingCouplingImage,
      'butt-fusion-reducing-cross': bfReducingCrossImage,
    };

    // If there's a specific product image, return it
    if (productSlug && productImageMap[productSlug]) {
      return productImageMap[productSlug];
    }

    // Otherwise, fall back to subcategory/category images
    const categoryImageMap: { [key: string]: string } = {
      'slurry-pumps-horizontal-slurry-pumps': horizontalSlurryPumpImage,
      'slurry-pumps-vertical-sump-pumps': verticalSlurryPumpImage,
      'slurry-pumps-sv-svr-vertical-slurry-pump': svSvrVerticalPumpImage,
      'slurry-pumps-zjl-vertical-sump-pump': zjlVerticalPumpImage,
      'slurry-pumps-zj': zjlVerticalPumpImage,
      'slurry-pumps-gravel-pump': gravelPumpImage,
      'slurry-pumps-wn-pump': wnPumpImage,
      'slurry-pumps-centrifugal-slurry-pumps': shMetalLinedPumpImage,
      'slurry-pumps-gravel-dredging-pumps': gravelDredgingPumpImage,
      'slurry-pumps-zjzgb-slurry-pumps': zjZgbSlurryPumpImage,
      'slurry-pumps-shpshpp-high-pressure-pumps': highPressurePumpImage,
      'slurry-pumps-froth-pump': frothPumpImage,
      'slurry-pumps-pump-parts': pumpPartsImage,
      'hdpe-pipe-fittings-electrofusion-fitting': electrofusionFittingsImage,
      'hdpe-pipe-fittings-short-type-butt-fusion-fitting': buttFusionFittingsImage,
      'hdpe-pipe-fittings-long-type-butt-fusion-fitting': buttFusionFittingsImage,
      'hdpe-valves-stop-valve': hdpeBallValveImage,
      'hdpe-valves-ball-valve': hdpeBallValveImage,
      'industrial-tools-customised-tool-kits': customizedToolkitsImage,
      'industrial-tools-insulated-tools': insulatedToolsImage,
      'industrial-tools-non-sparking-tools': nonSparkingToolsImage
    };
    
    return categoryImageMap[`${categorySlug}-${subcategorySlug}`] || slurryPumpsImage;
  };
debugger
  // Convert slug back to readable text
  const slugToText = (slug: string) => {
    return slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const categoryName = slugToText(categorySlug);
  const subcategoryName = slugToText(subcategorySlug);
  const productName = slugToText(productSlug);
  const productImage = getProductImage(categorySlug, subcategorySlug, productSlug);

  // Generate product specifications based on category
  const getProductSpecs = (categorySlug: string, productName: string) => {
    const specs: { [key: string]: any } = {
      'slurry-pumps': {
        'Capacity': 'Up to 5,000 m³/h',
        'Head to': 'Up to 73 meters',
        'Discharge Size': '1" to 18"',
        'Pressure to': 'Up to 2100 kPa'
      },
      'hdpe-pipe-fittings': {
        'Material': 'PE100 / PE80',
        'Pressure Rating': 'SDR 11, SDR 17, SDR 21',
        'Size Range': '20mm - 1200mm',
        'Standard': 'ISO 4427, EN 12201',
        'Temperature Range': '-40°C to +60°C',
        'Connection Type': productName.includes('Electrofusion') ? 'Electrofusion' : 'Butt Fusion',
        'Color': 'Black with Blue Stripes'
      },
      'hdpe-valves': {
        'Material': 'PE100',
        'Pressure Rating': 'PN 16',
        'Size Range': '63mm - 315mm',
        'Standard': 'ISO 4427',
        'Operation': 'Manual / Actuated',
        'Seal Material': 'EPDM',
        'Body Type': 'Full Bore'
      },
      'industrial-tools': {
        'Material': productName.includes('Non Sparking') ? 'Copper Beryllium' : 'Chrome Vanadium Steel',
        'Certification': 'ISO 9001, CE Marked',
        'Insulation': productName.includes('Insulated') ? '1000V AC / 1500V DC' : 'N/A',
        'Safety Standard': 'IEC 60900 (if insulated)',
        'Finish': 'Polished Chrome',
        'Warranty': '2 Years',
        'Kit Size': '10-50 pieces'
      }
    };

    return specs[categorySlug] || {};
  };

  const specifications = getProductSpecs(categorySlug, productName);

  const features = [
    'High Quality Materials',
    'International Standards Compliance',
    'Rigorous Quality Testing',
    'Global Shipping Available',
    'Technical Support Included',
    'Competitive Pricing'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 md:space-x-4 flex-1 min-w-0 overflow-x-auto">
              <Link to="/">
                <Button variant="ghost" size="sm" className="hover:bg-primary/10 flex-shrink-0">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  <span className="hidden xs:inline">Back to Home</span>
                  <span className="xs:hidden">Home</span>
                </Button>
              </Link>
              <div className="h-6 w-px bg-border hidden sm:block" />
              <Link to="/products" className="flex-shrink-0">
                <Button variant="outline" size="sm" className="hover:bg-primary/10">
                  <Package className="h-4 w-4 mr-1" />
                  <span className="hidden xs:inline">View All Products</span>
                  <span className="xs:hidden">Products</span>
                </Button>
              </Link>
              <div className="h-6 w-px bg-border hidden md:block" />
              <div className="flex items-center space-x-2 min-w-0 hidden md:flex">
                <Package className="h-5 w-5 text-primary flex-shrink-0" />
                <h1 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent truncate">
                  Product Details
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c26d0e98-2c0c-423f-b91d-c123b91cf337.png" 
                  alt="DHEYANSHI INTERNATIONAL Logo" 
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="text-sm md:text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hidden sm:block">
                DHEYANSHI INTERNATIONAL
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground overflow-x-auto">
            <Link to="/" className="hover:text-primary whitespace-nowrap">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary whitespace-nowrap">Products</Link>
            <span>/</span>
            <span className="text-primary whitespace-nowrap">{categoryName}</span>
            <span>/</span>
            <span className="text-primary whitespace-nowrap">{subcategoryName}</span>
            <span>/</span>
            <span className="text-foreground font-medium whitespace-nowrap">{productName}</span>
          </div>
        </div>
      </div>
      {/* Product Details */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Product Image */}
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted/20 transition-all duration-300 group-hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={productImage} 
                  alt={productName}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 right-4 space-y-2">
                <Badge variant="secondary" className="bg-primary/90 text-white border-none shadow-lg">
                  In Stock
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Badge variant="secondary" className="bg-background/95 backdrop-blur-sm text-foreground w-full justify-center py-2">
                  Click to zoom
                </Badge>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-2">
                  {categoryName}
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {productName}
                </h1>
                <p className="text-lg">
                  {subcategoryName}
                </p>
              </div>

              {/* <div className="prose text-muted-foreground"> */}
                <div className="mt-12 md:mt-16">
            <Card className="bg-gradient-to-br from-background via-muted/50 to-background border-primary/10">
  <CardHeader className="space-y-1">
    <div className="flex items-center space-x-2">
      <Package className="h-5 w-5 text-primary" />
      <CardTitle>Technical Specifications</CardTitle>
    </div>
    <CardDescription>
      Detailed specifications for {productName}
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {productDetailsMap[productSlug]?.specifications
        ? Object.entries(productDetailsMap[productSlug].specifications).map(([key, value]) => (
          <div key={key} className="p-3 rounded-lg bg-muted/30 border border-border/50 space-y-1 hover:bg-muted/40 transition-colors">
            <div className="text-sm font-medium text-primary">
              {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </div>
            <div className="text-base font-medium">{value}</div>
          </div>
        ))
        : Object.entries(specifications).map(([key, value]) => (
          <div key={key} className="p-3 rounded-lg bg-muted/30 border border-border/50 space-y-1 hover:bg-muted/40 transition-colors">
            <div className="text-sm font-medium text-primary">{key}</div>
            <div className="text-base font-medium">{value}</div>
          </div>
        ))
      }
    </div>
  </CardContent>
</Card>
          </div>
                {/* <p className="text-sm md:text-base">
                  {productDetailsMap[productSlug] ? (
                    productDetailsMap[productSlug].description
                  ) : (
                    `High-quality industrial equipment manufactured to international standards. 
                    This product is part of our ${categoryName.toLowerCase()} range, specifically 
                    designed for demanding industrial applications with superior performance and reliability.`
                  )}
                </p>
              </div> */}

              

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <Button size="lg" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Request Quote
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Sales
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/30">
                <div className="text-center">
                  <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-xs md:text-sm font-medium">Quality Assured</div>
                </div>
                <div className="text-center">
                  <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-xs md:text-sm font-medium">ISO Certified</div>
                </div>
                <div className="text-center">
                  <Truck className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-xs md:text-sm font-medium">Global Shipping</div>
                </div>
              </div>
            </div>
          </div>
          <div className="prose text-muted-foreground">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Product Description</h3>
                  <div className="space-y-2">
                    {Array.isArray(productDetailsMap[productSlug]?.description) ? (
                      productDetailsMap[productSlug].description.map((point, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                          <p className="text-sm md:text-base text-muted-foreground">{point}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm md:text-base">
                        High-quality industrial equipment manufactured to international standards. 
                        This product is part of our {categoryName.toLowerCase()} range, specifically 
                        designed for demanding industrial applications with superior performance and reliability.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            {/* Key Features */}
              <div className="mt-8 space-y-6">
  <div className="flex items-center space-x-2">
    <Package className="h-5 w-5 text-primary" />
    <h3 className="text-xl font-semibold">Key Features</h3>
  </div>
  
  <div className="grid sm:grid-cols-2 gap-4">
    {(productDetailsMap[productSlug]?.features || features).map((feature, index) => (
      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/40 transition-colors">
        <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
        <span className="text-sm text-muted-foreground">{feature}</span>
      </div>
    ))}
  </div>
</div>

          {/* Specifications */}
          

          {/* Contact Section */}
          <div className="mt-12 md:mt-16">
            <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20">
              <CardContent className="p-6 md:p-8 text-center">
                <h3 className="text-lg md:text-xl font-semibold mb-4">Need More Information?</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-6">
                  Our technical experts are ready to help you find the perfect solution for your needs.
                </p>
                <div className="flex justify-center">
                  <Button size="lg" onClick={() => setIsContactFormOpen(true)} className="w-full sm:w-auto">
                    <Mail className="h-4 w-4 mr-2" />
                    Connect Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        productName={productName}
      />
    </div>
  );
}
export default ProductDetail;