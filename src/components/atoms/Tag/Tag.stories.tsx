import { Story, Meta } from "@storybook/react";
import Tag, { TagProps } from "./Tag";

import { GiSlicedBread, GiPeanut } from "react-icons/gi";
import { FaBomb } from "react-icons/fa";

export default {
    title: "Components/atoms/Tag",
    component: Tag,
    argTypes: {},
} as Meta<TagProps>;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const GlutenFree = Template.bind({});
GlutenFree.args = {
    icon: GiSlicedBread,
    children: <p>Gluten Free</p>,
};

export const AllergyFree = Template.bind({});
AllergyFree.args = {
    icon: FaBomb,
    children: <p>Allergy Free</p>,
};

export const PeanutFree = Template.bind({});
PeanutFree.args = {
    icon: GiPeanut,
    children: <p>Peanut Free</p>,
};
