import React from "react";
import Hero from "./Hero";

import HeroCover from "../../assets/images/hero.jpeg";

export default {
    title: "Components/Hero",
    component: Hero,
};

export const Basic = () => {
    return (
        <Hero title="Hero component" image={HeroCover}>
            <p>A paragraph with the children</p>
        </Hero>
    );
};

export const WithList = () => {
    return (
        <Hero title="Hero component" image={HeroCover}>
            <ul>
                <li>Item 01</li>
                <li>Item 02</li>
                <li>Item 03</li>
            </ul>
        </Hero>
    );
};
