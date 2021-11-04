import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
    --background : hsl(230, 35%, 7%);
    --lightBlue : hsl(231, 77%, 90%);
    --fontHeading :  'Bellefair', serif;
    --fontBody : 'Barlow Condensed', sans-serif;

      }

    * {
    margin: 0;
    padding: 0;
  }
  
  *,
  *:before, 
  *:after {
    box-sizing: border-box;
  }
  
  body {
    font-family: var(--fontBody);
    background-color : var(--background);
    overflow-x: hidden;
  }
  
  
  img {
    max-width: 100%;
    display: block;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }  
p{
  line-height: 25px;
  color: var(--lightBlue);
}

button {
  font-family: var(---fontStack);
    border : none;
    &:hover{
        cursor: pointer;
    }
}
`;

export default GlobalStyle;
