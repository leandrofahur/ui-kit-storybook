import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Helmet } from "react-helmet";

const GlobalStyleComposed = () => (
    <>
        <GlobalStyle />
        <Helmet>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    </>
);

export default GlobalStyleComposed;
