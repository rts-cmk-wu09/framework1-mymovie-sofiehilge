import coverimage from "../assets/moviecover.png";
//billedet skal importeres øverst i React, stien lægges da ned i coverimage variablen, sådan at man kan kalde den. Når man skal lave attributer i react, laves det med curlybrackets.

const Image = () => {
  return <img src={coverimage} alt="spidermand film" />;//curley brakets i stedet for quotes, for elles vil den læse det som en string.
};
//alt hvad der står i constanten er javascript.

export default Image;
