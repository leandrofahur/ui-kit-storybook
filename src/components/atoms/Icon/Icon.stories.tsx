import { Story, Meta } from "@storybook/react";
import Icon, { IconProps } from "./Icon";

import { FaAngellist } from "react-icons/fa";

export default {
    title: "Components/Atoms/Icon",
    component: Icon,
    argTypes: {},
} as Meta<IconProps>;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    width: "40px",
    height: "40px",
    icon: FaAngellist,
};
