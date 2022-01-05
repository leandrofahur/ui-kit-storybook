import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

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

        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 100%;
    }
`;
