import { createGlobalStyle } from "styled-components";
import { breakpointAt, Breakpoints } from "../styles/Breakpoints";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html, body {
        max-width: 100vw;
        max-height: 100vh;
        width: 100%;
        height: 100%;
        margin: 0 auto;

        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 100%;
    }

    h1,h2,h3,h4,h5,h6 {
        line-height: 1.7;
        font-weight: 700;
        letter-spacing: .1rem;
    }

    h1 {
        font-size: 2.5rem;

        ${breakpointAt(Breakpoints.lg)} {
            font-size: 3.75rem;
        }
    }

    h2 {
        font-size: 2rem;

        ${breakpointAt(Breakpoints.lg)} {
            font-size: 3.125rem;
        }
    }

    h3 {
        font-size: 1.8rem;
        ${breakpointAt(Breakpoints.lg)} {
            font-size: 2.5rem;
        }
    }

    h4 {
        font-size: 1.3rem;
        font-weight: 600;

        ${breakpointAt(Breakpoints.lg)} {
            font-size: 2.125rem;
        }
    }

    h5 {
        font-size: 1.2rem;
        font-weight: 300;

        ${breakpointAt(Breakpoints.lg)} {
            font-size: 1.5rem;
        }
    }

    h6 {
        font-size: 1.1rem;
        font-weight: 600;

        ${breakpointAt(Breakpoints.lg)} {
            font-size: 1.25rem;
        }
    }
`;
