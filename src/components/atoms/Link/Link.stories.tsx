import { Story, Meta } from "@storybook/react";
import Link, { LinkProps } from "./Link";

export default {
    title: "Components/atoms/Link",
    component: Link,
    argTypes: {},
} as Meta<LinkProps>;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    color: "00b5d8",
    _hover: "0bc5ea",
    href: "http://veganofoods.com",
    children: "Link",
};

export const Disabled = Template.bind({});
Disabled.args = {
    color: "00b5d8",
    _hover: "0bc5ea",
    href: "http://veganofoods.com",
    isDisabled: true,
    children: "Link",
};
