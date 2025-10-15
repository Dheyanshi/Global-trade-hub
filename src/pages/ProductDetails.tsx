interface ProductDetailsProps {
  data: {
    name: string;
    specs: {
      dischargeSize?: string;
      capacity?: string;
      head?: string;
      pressure?: string;
      handlingSolids?: string;
      temperature?: string;
    };
    features: string[];
    materials: Array<{
      part: string;
      material: string;
    }>;
    applications: string[];
    description: string;
  }
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  return (
    <div className="product-details space-y-8">
      {/* Product Description */}
      <section className="description">
        <h2 className="text-xl font-bold mb-4">Product Description</h2>
        <div className="prose text-muted-foreground">
          <p>{data.description}</p>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="specifications">
        <h2 className="text-xl font-bold mb-4">Technical Specifications</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(data.specs).map(([key, value]) => (
            <div key={key} className="space-y-1">
              <div className="text-sm font-medium text-muted-foreground">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div className="text-sm md:text-base text-foreground">{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Materials */}
      <section className="materials">
        <h2 className="text-xl font-bold mb-4">Material Specifications</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left">Part</th>
                <th className="px-4 py-2 text-left">Material</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data.materials.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{item.part}</td>
                  <td className="px-4 py-2">{item.material}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <h2 className="text-xl font-bold mb-4">Applications</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.applications.map((app, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm text-muted-foreground">{app}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2 className="text-xl font-bold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {data.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;