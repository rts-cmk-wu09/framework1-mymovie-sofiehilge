import styled from "styled-components";

const Heading = styled.h2`// da komponenter er isolerede enheder, gør det ikke noget at vi bruger kontstanter af samme navn i flere komponenter.
font-size: 16px;
color: #110E47;
`;

const HeadingTwo = () => {
    return ( <Heading>Title</Heading> );
}
 
export default HeadingTwo;