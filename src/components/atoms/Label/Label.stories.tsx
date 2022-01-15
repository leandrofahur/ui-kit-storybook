import { Story, Meta } from "@storybook/react";
import Label, { LabelProps } from "./Label";

export default {
    title: "Components/Atoms/Label",
    component: Label,
    argTypes: {},
} as Meta<LabelProps>;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
