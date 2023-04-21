import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  width: 80px;
  height: 20px;
  border-radius: 25px;
  font-size: 8px;
  letter-spacing: 2px;
`;
const SeeMoreButton = () => {
  return <Button>See more</Button>;/* Stadigvæk et komponent, selvom den ikke er selvlukkende */
};

export default SeeMoreButton;
