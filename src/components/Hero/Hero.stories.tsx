import React from "react";
import Hero from "./Hero";

export default {
    title: "Components/Hero",
    component: Hero,
};

export const Basic = () => {
    return (
        <Hero title="Hero component">
            <p>A paragraph with the children</p>
        </Hero>
    );
};

export const WithList = () => {
    return (
        <Hero title="Hero component">
            <li>Item 01</li>
            <li>Item 02</li>
            <li>Item 03</li>
        </Hero>
    );
};
