type categoriesProps = {
  categories: string;
};

export default function Categories({ categories }: categoriesProps) {
  return <div>Categories</div>;
}

export async function getStaticProps() {
  const req = await fetch("https://fakestoreapi.com/products/categories");
  const data = await req.json();

  return {
    props: { categories: data },
  };
}
