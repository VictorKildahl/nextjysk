import CategoryPreview from "../components/CategoryPreview";
import Header from "../components/Header";
import Promo from "../components/Promo";

export default function Home() {
  const categories = [
    {
      name: "Electronic",
      id: "/Products/electronics",
      imageSrc: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    },
    {
      name: "Jewelery",
      id: "/Products/jewelery",
      imageSrc:
        "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      name: "Mens-clothing",
      id: "/Products/men's clothing",
      imageSrc: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      name: "Womens-clothing",
      id: "/Products/women's clothing",
      imageSrc: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    },
  ];

  return (
    <>
      <Promo></Promo>
      <CategoryPreview categories={categories}></CategoryPreview>
    </>
  );
}
