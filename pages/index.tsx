import CategoryPreview from "../components/CategoryPreview";

export default function Home() {
  const categories = [
    {
      name: "Electronic",
      id: "/1",
      imageSrc: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    },
    {
      name: "Jewelery",
      id: "2",
      imageSrc:
        "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      name: "Mens-clothing",
      id: "3",
      imageSrc: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      name: "Women-clothing",
      id: "4",
      imageSrc: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    },
  ];

  return (
    <>
      <CategoryPreview categories={categories}></CategoryPreview>
    </>
  );
}
