import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing:border-box;
    }

    :root {
        /* Typography */
        --main-font:'Inter', sans-serif;
        --font-md:14px;
        --font-sm:12.8px;
        --font-xm:11px;
        --font-lg:18px;
        --font-xlg:20px;
        /* Colors */
        --oxford-blue:#374151;
        --pale-sky:#6B7280;
        --wild-sand:#F5F5F5;
        --white:#ffffff;
        --athens-gray:#F3F4F6;
        --black:#000000;
        --ebony:#111827;
        --royal-blue:#4F46E5;
        --portage:#9EA0F6;
        --cornflower-blue:#6366F1;
        --mischka:#D1D5DB;
        /* Border Radius */
        --border-radius-sm:6px;
        --border-radius-md:14px;
        --border-radius-lg:100%;
    }

    body{
      font-family:var(--main-font);
      background-color:var(--wild-sand);
      font-size:var(--font-md) ;
    }

`;

export default GlobalStyle;
