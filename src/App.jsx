import "./App.css";

import HeadingOne from "./components/HeadingOne";
import HeadingTwo from "./components/HeadingTwo";
import SeeMoreButton from "./components/SeeMoreButton";
import MovieCard from "./templates/MovieCard";

function App() {
  // da det er app elementet der renderes, opsættes hele strukturen inde i diven med className="app"
  return (
    <div className="App">
      <header>
        <HeadingOne />
        {/* Sådan ser et komponent ud når det bruges i React */}
      </header>
      <main>
        <section>
          <div className="flexContainer justify">
            <HeadingTwo />
            <SeeMoreButton />
          </div>
          <div className="flexContainer">
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
