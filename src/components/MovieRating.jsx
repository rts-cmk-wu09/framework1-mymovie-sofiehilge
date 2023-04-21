import {FaStar} from "react-icons/fa"; //react-icons giver adgang til filen, FaStar er navnet på ikonet¨
import styled from "styled-components";

const MovieRating = () => {
  return (
    <div>{/* Her bruger vi en div som container, da vi skal bruge den til styling. */}
     <FaStar/>
      <p>9.10/10 IMDb</p>
    </div>
  );
};

export default MovieRating;
