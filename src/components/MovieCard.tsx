import Image from "next/image";

type Props = {
  title: string;
  imageUrl: string;
  id: string;
  description: string;
};
const BASE_URL = "https://image.tmdb.org/t/p/w400";
export const MovieCard = ({ title, imageUrl, id, description }: Props) => {
  return (
    <article className="bg-pink-100 p-2 rounded-md flex flex-col max-w-xs gap-2">
      <Image
        src={
          imageUrl
            ? `${BASE_URL}${imageUrl}`
            : "https://placehold.co/300x400/png"
        }
        alt={title}
        width={300}
        height={400}
      />
      <h2 className="font-bold">{title}</h2>
      <p className="line-clamp-4">{description}</p>
    </article>
  );
};
