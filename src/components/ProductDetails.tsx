interface ProductDetailsProps {
  product: {
    name: string;
    category: string;
    specs: {
      dischargeSize: string;
      capacity: string;
      head: string;
      pressure: string;
      handlingSolids: string;
      temperature: string;
    };
    features: string[];
    description: string;
    materials: Array<{
      part: string;
      material: string;
    }>;
    applications: string[];
    technicalData: Array<{
      type: string;
      power: string;
      material: {
        liner: string;
        impeller: string;
      };
      performance: {
        flow: string;
        head: string;
        speed: string;
        maxEff: string;
        npsh: string;
        vanes: string;
        impellerDiameter: string;
      };
    }>;
  }
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="space-y-8">
      {/* Product Description */}
      <section>
        <h2 className="text-xl font-bold mb-4">Product Description</h2>
        <div className="prose text-muted-foreground">
          <p>{product.description}</p>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-xl font-bold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Materials Table */}
      <section>
        <h2 className="text-xl font-bold mb-4">Material Specifications</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2 text-left">NO</th>
                <th className="px-4 py-2 text-left">Part</th>
                <th className="px-4 py-2 text-left">Material Specification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {product.materials.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{item.part}</td>
                  <td className="px-4 py-2">{item.material}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section>
        <h2 className="text-xl font-bold mb-4">Applications</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {product.applications.map((app, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm text-muted-foreground">{app}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Data */}
      <section>
        <h2 className="text-xl font-bold mb-4">Technical Data</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Power (KW)</th>
                <th className="px-4 py-2">Material</th>
                <th className="px-4 py-2">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {product.technicalData.map((data, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{data.type}</td>
                  <td className="px-4 py-2">{data.power}</td>
                  <td className="px-4 py-2">
                    Liner: {data.material.liner}<br/>
                    Impeller: {data.material.impeller}
                  </td>
                  <td className="px-4 py-2">
                    Flow: {data.performance.flow}<br/>
                    Head: {data.performance.head}<br/>
                    Speed: {data.performance.speed}<br/>
                    Max Eff: {data.performance.maxEff}<br/>
                    NPSH: {data.performance.npsh}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;