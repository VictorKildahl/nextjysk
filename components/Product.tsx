import Link from "next/link";
import ArticleImage from "./ArticleImage";
import Review from "./Review";

type ProductProps = {
  product: {
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
  };
};

export default function ProductTest({ product }: ProductProps) {
  return (
    <div key={product.id} className="group relative p-4 sm:p-6">
      <ArticleImage image={product.image} />
      <div className="pt-10 pb-4 text-center">
        <h3 className="text-sm font-medium text-gray-900">
          <Link href={`/Products/${product.id}`}>
            <a>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
            </a>
          </Link>
        </h3>
        <Review rate={product.rating.rate} count={product.rating.count} />
        <p className="mt-4 text-base font-medium text-gray-900">
          {product.price}
        </p>
      </div>
    </div>
  );
}
