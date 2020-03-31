import React from "react";
import { addParameters, addDecorator, configure } from "@storybook/react";
import { create } from "@storybook/theming";
import Container from "./container.js";

const basicTheme = create({
    brandTitle: "NADS",
    brandUrl: "https://masterminddesign.io/",
    brandImage: "https://masterminddesign.io/mstile-150x150.png"
});

addParameters({
    options: {
        showPanel: false,
        theme: basicTheme
    }
});

addDecorator(story => <Container story={story} />);

configure(
    [
        require.context("../lib", true, /\.stories\.mdx$/),
        require.context("../lib", true, /\.stories\.jsx$/)
    ],
    module
);
