import styled, { createGlobalStyle } from "styled-components";

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
        --athens-gray:#E5E7EB;
        --athens:#F3F4F6;
        --black:#000000;
        --ebony:#111827;
        --royal-blue:#4F46E5;
        --portage:#9EA0F6;
        --cornflower-blue:#6366F1;
        --mischka:#D1D5DB;
        --river-bed:#4B5563;
        --gray-chateau:#9CA3AF;
        /* Border Radius */
        --border-radius-sm:6px;
        --border-radius-md:14px;
        --border-radius-lg:100%;
        /* container width */
        --container-mxw-md:1150px;
        --container-mxw-lg:1250px;
        --container-mxw-xlg:1300px;
        --container-mxw-sm:500px;
    }

    body{
      font-family:var(--main-font);
      background-color:var(--wild-sand);
      font-size:var(--font-md) ;
    }

`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--container-mxw-md);
  margin: 0 auto;
`;

export const AppContainer = styled(Container)`
  padding: 0 0.5rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`;

export default GlobalStyle;
