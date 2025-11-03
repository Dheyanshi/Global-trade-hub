import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, Package, Wrench, Droplets, Settings } from 'lucide-react';

const ProductNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const productData = [
    {
      id: "slurry-pumps",
      name: "Slurry Pumps",
      icon: Droplets,
      subcategories: [
        {
          name: "Horizontal Slurry Pumps",
          items: ["SH Metal Lined Slurry Pump", "SHR Rubber Lined Slurry Pump", "SL/SM Slurry Pump", "SHH Slurry Pump"]
        },
        {
          name: "Vertical Sump Pumps",
          items: ["SV SVR Vertical Slurry Pump", "ZJL Vertical Sump Pump"]
        },
        {
          name: "Centrifugal Slurry Pumps",
          items: []
        },
        {
          name: "Gravel Dredging Pumps",
          items: ["Gravel Pump", "WN Pump"]
        },
        {
          name: "ZJ/ZGB Slurry Pumps",
          items: ["ZJ Slurry Pump", "ZGB Slurry Pump"]
        },
        {
          name: "High Pressure Pumps",
          items: ["SHP/SHPP High Pressure Pumps"]  // Update this line
        },
        {
          name: "Froth Pump",
          items: ["SF Pump", "SHF Pump"]
        },
        {
          name: "Pump Parts",
          items: ["Metal Parts", "Rubber Parts", "PU Parts"]
        }
      ]
    },
    {
      id: "hdpe-fittings",
      name: "HDPE Pipe Fittings",
      icon: Package,
      subcategories: [
        {
          name: "Electrofusion Fitting",
          items: [
            "EF Equal Coupler", "EF End Cup", "EF 45°Elbow", "EF 90°Elbow", 
            "EF Equal Tee", "EF Reducing Tee", "EF Reducer", "EF Stub End", 
            "EF Female Thread Coupler", "EF Male Thread Coupler", "EF Cross Tee"
          ]
        },
        {
          name: "Short Type Butt Fusion Fitting",
          items: [
            "Butt Fusion End Cap", "Butt Fusion 22.5°Elbow", "Butt Fusion 45°Elbow", 
            "Butt Fusion 90°Elbow", "Butt Fusion Flange", "Butt Fusion Equal Tee", 
            "Butt Fusion Reducing Tee", "Butt Fusion Reducing Coupling", "Butt Fusion Reducing Cross"
          ]
        },
        {
          name: "Long Type Butt Fusion Fitting",
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
      subcategories: [
        {
          name: "Stop Valve",
          items: []
        },
        {
          name: "Ball Valve",
          items: []
        }
      ]
    },
    {
      id: "tools",
      name: "Industrial Tools",
      icon: Wrench,
      subcategories: [
        {
          name: "Customised Tool Kits",
          items: []
        },
        {
          name: "Insulated Tools",
          items: []
        },
        {
          name: "Non Sparking Tools",
          items: []
        }
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const createProductSlug = (categoryName: string, subcategoryName: string, itemName: string) => {
    return `${categoryName.toLowerCase().replace(/\s+/g, '-')}/${subcategoryName.toLowerCase().replace(/\s+/g, '-')}/${itemName.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-')}`;
  };

  return (
    <div className="relative group">
      <button 
        className="hover:text-primary transition-colors font-medium flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-accent/50"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>Products</span>
        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
      </button>
      
      <div 
        className={`absolute top-full left-0 mt-2 w-72 sm:w-80 lg:w-96 bg-card border border-border rounded-lg shadow-lg transition-all duration-300 z-50 max-h-[75vh] overflow-hidden ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="overflow-y-auto max-h-[75vh] scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          {/* Header */}
          <div className="sticky top-0 bg-card border-b border-border px-4 py-3 z-10">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Package className="h-4 w-4 text-primary" />
              Product Categories
            </h3>
          </div>

          {/* Product Categories */}
          <div className="p-2">
            {productData.map((category) => {
              const isCategoryExpanded = expandedCategories.has(category.id);
              const CategoryIcon = category.icon;

              return (
                <div key={category.id} className="mb-1">
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-md hover:bg-accent/50 transition-colors group/cat border-l-2 border-transparent hover:border-primary/30"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded bg-primary/10">
                        <CategoryIcon className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{category.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                        {category.subcategories.reduce((acc, sub) => acc + sub.items.length, 0)}
                      </span>
                      {isCategoryExpanded ? (
                        <ChevronDown className="h-3.5 w-3.5 text-primary" />
                      ) : (
                        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground group-hover/cat:text-primary transition-colors" />
                      )}
                    </div>
                  </button>

                  {isCategoryExpanded && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-border/30 pl-3">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <div key={`${category.id}-${subIndex}`} className="py-1">
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/30 rounded-md">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                            <span className="text-xs font-medium text-foreground uppercase tracking-wide">
                              {subcategory.name}
                            </span>
                            {subcategory.items.length > 0 && (
                              <span className="text-xs text-muted-foreground bg-background px-1.5 py-0.5 rounded">
                                {subcategory.items.length}
                              </span>
                            )}
                          </div>
                          
                          {subcategory.items.length > 0 && (
                            <div className="mt-1 space-y-0.5">
                              {subcategory.items.map((item, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  to={`/product/${createProductSlug(category.name, subcategory.name, item)}`}
                                  className="flex items-center gap-2 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded transition-all duration-200 border-l-2 border-transparent hover:border-primary/50 ml-2"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <div className="w-1 h-1 rounded-full bg-muted-foreground/40"></div>
                                  <span className="flex-1">{item}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Footer */}
          <div className="sticky bottom-0 bg-card border-t border-border px-4 py-2">
            <p className="text-xs text-muted-foreground text-center">
              Total Products: {productData.reduce((acc, cat) => 
                acc + cat.subcategories.reduce((subAcc, sub) => subAcc + sub.items.length, 0), 0
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNavigation;