import React from 'react';
import { Package, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HierarchicalProducts from '@/components/HierarchicalProducts';

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 md:space-x-4 flex-1 min-w-0">
              <Link to="/">
                <Button variant="ghost" size="sm" className="hover:bg-primary/10 flex-shrink-0">
                  <ArrowLeft className="h-4 w-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Back to Home</span>
                  <span className="sm:hidden">Home</span>
                </Button>
              </Link>
              <div className="h-6 w-px bg-border hidden sm:block" />
              <div className="flex items-center space-x-2 min-w-0">
                <Package className="h-5 w-5 text-primary flex-shrink-0" />
                <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent truncate">
                  Product Catalog
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

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-background via-secondary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Complete Product Range
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore our comprehensive catalog of mechanical and electrical equipment, tools, and industrial solutions
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6 md:mt-8">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                Slurry Pumps
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                HDPE Fittings
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                Industrial Tools
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                Valves & Components
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <HierarchicalProducts />

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Need assistance with product selection? 
            <Link to="/#contact" className="text-primary hover:text-primary/80 font-medium ml-1">
              Contact our experts
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Products;