import Image from "next/image";

type ProductResp = {
  products: [
    {
      id: number;
      title: string;
      price: string;
      category: string;
      description: string;
      image: string;
    }
  ];
};

export default function Products({ products }: ProductResp) {
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <h1>{product.price}</h1>
          <Image
            src={product.image}
            alt="Vercel Logo"
            width={500}
            height={500}
          />
        </div>
      ))}
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
