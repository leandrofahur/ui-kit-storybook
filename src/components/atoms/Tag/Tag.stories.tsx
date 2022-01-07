import { Story, Meta } from "@storybook/react";
import Tag, { TagProps } from "./Tag";

import { GiSlicedBread, GiPeanut } from "react-icons/gi";
import { FaBomb } from "react-icons/fa";
import Grid from "../Grid";

export default {
    title: "Components/Atoms/Tag",
    component: Tag,
    argTypes: {},
} as Meta<TagProps>;

// const Template: Story<TagProps> = (args) => <Tag {...args} />;

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
