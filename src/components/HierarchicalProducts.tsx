import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Package, Wrench, Droplets, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
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
import shMetalLinedPumpImage from '@/assets/sh-metal-lined-pump.jpeg';
import shrRubberLinedPumpImage from '@/assets/shr-rubber-lined-pump.jpg';
import slSmSlurryPumpImage from '@/assets/sl-sm-slurry-pump.jpg';
import shhSlurryPumpImage from '@/assets/shh-slurry-pump.jpg';
import wnPumpImage from '@/assets/wn-pump.jpg';
import customizedToolkitsImage from '@/assets/customized-toolkits.png';
import insulatedToolsImage from '@/assets/insulated-tools.png';
import nonSparkingToolsImage from '@/assets/non-sparking-tools.png';

interface SubProduct {
  name: string;
  items?: string[];
  image?: string;
}

interface ProductCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  subcategories: SubProduct[];
}

const productData: ProductCategory[] = [
  {
    id: "slurry-pumps",
    name: "Slurry Pumps",
    icon: Droplets,
    image: slurryPumpsImage,
    subcategories: [
      {
        name: "Horizontal Slurry Pumps",
        image: shhSlurryPumpImage,
        items: ["SH Metal Lined Slurry Pump", "SHR Rubber Lined Slurry Pump", "SL/SM Slurry Pump", "SHH Slurry Pump"]
      },
      {
        name: "Vertical Sump Pumps",
        image: verticalSlurryPumpImage,
        items: ["SV SVR Vertical Slurry Pump", "ZJL Vertical Sump Pump"]
      },
      {
        name: "Centrifugal Slurry Pumps",
        image: shMetalLinedPumpImage
      },
      {
        name: "Gravel Dredging Pumps",
        image: gravelDredgingPumpImage,
        items: ["Gravel Pump", "WN Pump"]
      },
      {
        name: "ZJ/ZGB Slurry Pumps",
        image: zjZgbSlurryPumpImage,
        items: ["ZJ Slurry Pump", "ZGB Slurry Pump"]
      },
      {
        name: "High Pressure Pumps",
        image: highPressurePumpImage,
        items: ["SHP/SHPP High Pressure Pumps"]
      },
      {
        name: "Froth Pump",
        image: frothPumpImage,
        items: ["SF Pump", "SHF Pump"]
      },
      {
        name: "Pump Parts",
        image: pumpPartsImage,
        items: ["Metal Parts", "Rubber Parts", "PU Parts"]
      }
    ]
  },
  {
    id: "hdpe-fittings",
    name: "HDPE Pipe Fittings",
    icon: Package,
    image: hdpeFittingsImage,
    subcategories: [
      {
        name: "Electrofusion Fitting",
        image: electrofusionFittingsImage,
        items: [
          "EF Equal Coupler", "EF End Cup", "EF 45°Elbow", "EF 90°Elbow", 
          "EF Equal Tee", "EF Reducing Tee", "EF Reducer", "EF Stub End", 
          "EF Female Thread Coupler", "EF Male Thread Coupler", "EF Cross Tee"
        ]
      },
      {
        name: "Short Type Butt Fusion Fitting",
        image: buttFusionFittingsImage,
        items: [
          "Butt Fusion End Cap", "Butt Fusion 22.5°Elbow", "Butt Fusion 45°Elbow", 
          "Butt Fusion 90°Elbow", "Butt Fusion Flange", "Butt Fusion Equal Tee", 
          "Butt Fusion Reducing Tee", "Butt Fusion Reducing Coupling", "Butt Fusion Reducing Cross"
        ]
      },
      {
        name: "Long Type Butt Fusion Fitting",
        image: buttFusionFittingsImage,
        items: [
          "Butt Fusion End Cap", "Butt Fusion Elbow 45°", "Butt Fusion Elbow 90°", 
          "Butt Fusion Flange Adaptor (Long Neck)", "Butt Fusion Flange Adaptor",
          "Butt Fusion Equal Tee", "Butt Fusion Reducing Tee", "Butt Fusion Reducer"
        ]
      }
    ]
  },
  {
    id: "hdpe-valves",
    name: "HDPE Valves",
    icon: Settings,
    image: hdpeValvesImage,
    subcategories: [
      {
        name: "Stop Valve",
        image: hdpeBallValveImage
      },
      {
        name: "Ball Valve",
        image: hdpeBallValveImage
      }
    ]
  },
  {
    id: "tools",
    name: "Industrial Tools",
    icon: Wrench,
    image: toolsImage,
    subcategories: [
      {
        name: "Customised Tool Kits",
        image: customizedToolkitsImage
      },
      {
        name: "Insulated Tools",
        image: insulatedToolsImage
      },
      {
        name: "Non Sparking Tools",
        image: nonSparkingToolsImage
      }
    ]
  }
];

const HierarchicalProducts: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [expandedSubcategories, setExpandedSubcategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const toggleSubcategory = (subcategoryKey: string) => {
    const newExpanded = new Set(expandedSubcategories);
    if (newExpanded.has(subcategoryKey)) {
      newExpanded.delete(subcategoryKey);
    } else {
      newExpanded.add(subcategoryKey);
    }
    setExpandedSubcategories(newExpanded);
  };

  const createProductSlug = (categoryName: string, subcategoryName: string, itemName: string) => {
    const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    return `/product/${slugify(categoryName)}/${slugify(subcategoryName)}/${slugify(itemName)}`;
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4 max-w-7xl">

        <div className="space-y-6">
          {productData.map((category) => {
            const isCategoryExpanded = expandedCategories.has(category.id);
            const CategoryIcon = category.icon;

            return (
              <div 
                key={category.id} 
                className="border border-border/50 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Category Header */}
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/30 transition-colors group"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative overflow-hidden rounded-xl w-16 h-16 md:w-20 md:h-20">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300" />
                      <CategoryIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-foreground/70 font-medium">
                        {category.subcategories.length} subcategories
                      </p>
                    </div>
                  </div>
                  <div className="p-2 rounded-full bg-muted/50 group-hover:bg-primary/10 transition-colors">
                    {isCategoryExpanded ? (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </div>
                </div>

                {/* Category Content */}
                {isCategoryExpanded && (
                  <div className="border-t border-border/30 bg-muted/10">
                    <div className="p-6 space-y-4">
                      {category.subcategories.map((subcategory, subIndex) => {
                        const subcategoryKey = `${category.id}-${subIndex}`;
                        const isSubcategoryExpanded = expandedSubcategories.has(subcategoryKey);
                        const hasItems = subcategory.items && subcategory.items.length > 0;

                        return (
                          <div key={subcategoryKey} className="border border-border/30 rounded-xl overflow-hidden bg-background/50">
                            <div 
                              className={`flex items-center justify-between p-4 ${hasItems ? 'cursor-pointer hover:bg-muted/20' : ''} transition-colors group/sub`}
                              onClick={hasItems ? () => toggleSubcategory(subcategoryKey) : undefined}
                            >
                              <div className="flex items-center space-x-3">
                                {subcategory.image && (
                                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted/20">
                                    <img 
                                      src={subcategory.image} 
                                      alt={subcategory.name}
                                      className="w-full h-full object-cover group-hover/sub:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-primary/20 group-hover/sub:bg-primary/30 transition-colors duration-300" />
                                  </div>
                                )}
                                {!subcategory.image && <div className="w-2 h-2 bg-primary rounded-full" />}
                                <div>
                                  <h4 className="text-lg font-medium text-foreground group-hover/sub:text-primary transition-colors">
                                    {subcategory.name}
                                  </h4>
                                   {hasItems && (
                                     <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-1 rounded-full mt-1 inline-block border border-primary/20">
                                       {subcategory.items.length} items
                                     </span>
                                   )}
                                </div>
                              </div>
                              {hasItems && (
                                <div className="p-1 rounded-full bg-muted/30 group-hover/sub:bg-primary/10 transition-colors">
                                  {isSubcategoryExpanded ? (
                                    <ChevronDown className="w-4 h-4 text-primary" />
                                  ) : (
                                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover/sub:text-primary transition-colors" />
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Subcategory Items */}
                            {hasItems && isSubcategoryExpanded && (
                              <div className="border-t border-border/20 bg-muted/5 p-3 md:p-4">
                                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                                   {subcategory.items!.map((item, itemIndex) => (
                                     <Link 
      key={itemIndex}
                                       to={createProductSlug(category.name, subcategory.name, item)}
      className="flex items-center space-x-2 p-2 md:p-3 rounded-lg bg-background/80 hover:bg-primary/5 border border-border/20 hover:border-primary/30 transition-all duration-200 group/item cursor-pointer"
    >
      <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover/item:bg-primary transition-colors flex-shrink-0" />
        <span className="text-xs md:text-sm text-foreground group-hover/item:text-primary transition-colors break-words">
                                         {item}
            </span>
    </Link>
                                   ))}
                                 </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center justify-center p-4 md:p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/20 mx-4">
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                More Products Coming Soon
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                We're continuously expanding our product range to serve you better
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HierarchicalProducts;