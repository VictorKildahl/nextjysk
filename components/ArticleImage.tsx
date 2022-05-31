import Image from "next/image";

type ArticleImageProps = {
  image: string;
};

export default function ArticleImage({ image }: ArticleImageProps) {
  return (
    <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
      <Image
        src={image}
        alt="Product image"
        className="w-64 h-64 object-center object-cover"
        layout="fill"
      />
    </div>
  );
}
