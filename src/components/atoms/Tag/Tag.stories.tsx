import { Story, Meta } from "@storybook/react";
import Tag, { TagProps } from "./Tag";

import { GiSlicedBread, GiPeanut } from "react-icons/gi";
import { FaBomb } from "react-icons/fa";
import Grid from "../Grid";

export default {
    title: "Components/atoms/Tag",
    component: Tag,
    argTypes: {},
} as Meta<TagProps>;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

// export const GlutenFree = Template.bind({});
// GlutenFree.args = {
//     icon: GiSlicedBread,
//     children: <p>Gluten Free</p>,
// };

// export const AllergyFree = Template.bind({});
// AllergyFree.args = {
//     icon: FaBomb,
//     children: <p>Allergy Free</p>,
// };

// export const PeanutFree = Template.bind({});
// PeanutFree.args = {
//     icon: GiPeanut,
//     children: <p>Peanut Free</p>,
// };

export const All = () => {
    return (
        <>
            <Grid numOfColumns={3}>
                <Tag icon={GiSlicedBread}>
                    <p>Gluten Free</p>
                </Tag>
                <Tag icon={FaBomb}>
                    <p>Allergy Free</p>
                </Tag>
                <Tag icon={GiPeanut}>
                    <p>Peanut Free</p>
                </Tag>
            </Grid>
        </>
    );
};
