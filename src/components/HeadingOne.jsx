const HeadingOne = () => {
  return <h1>Overskrift</h1>;
};
/* Bagefter bliver den lavet om til en props, så den kan blive dynamisk, da h1 hedder my Movies på forsiden og SPiderman returns på den næste side. */
/* Denne konstant er en fnktion der returnere et element. */

export default HeadingOne; //skal importeres hvor den skal bruges, i vores app.jsx som indeholder vores struktur.
