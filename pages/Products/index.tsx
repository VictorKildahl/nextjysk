import Product from "../../components/Product";

type ProductsProps = {
  products: [
    {
      id: number;
      title: string;
      price: string;
      category: string;
      description: string;
      image: string;
      rating: {
        rate: number;
        count: number;
      };
    }
  ];
};

export default function Products({ products }: ProductsProps) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const req = await fetch("https://fakestoreapi.com/products");
  const data = await req.json();

  return {
    props: { products: data },
  };
}
