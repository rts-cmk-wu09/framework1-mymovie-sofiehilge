import Heading3 from "../components/Heading3";
import Image from "../components/Image"; // Image navnet er ligemeget, men det skal hedde det samme i import og i component tagget.
import MovieRating from "../components/MovieRating";



const MovieCard = () => {
  return (
    <article>
      <figure>
        <Image />
      </figure>
      <Heading3 />
      <MovieRating />
    </article>
  );
};

export default MovieCard;
