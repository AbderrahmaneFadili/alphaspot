import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing:border-box;
    }

    :root{
        --main-font:'Inter', sans-serif;
    }

    body{
      font-family:var(--main-font);
    }

`;

export default GlobalStyle;
