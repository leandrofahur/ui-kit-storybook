import { Story, Meta } from "@storybook/react";
import Icon, { IconProps } from "./Icon";
import styled from "styled-components";
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

//#region Summary
// container to display in a row the component
const HStack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 100%;
    margin: 20px 0;

    & > * {
        margin: 0 10px;
    }
`;

const VStack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin: 20px 0;

    & > * {
        margin: 10px 0;
    }
`;

export const Summary = () => {
    return (
        <>
            <h4>Sizes</h4>
            <HStack>
                <Icon icon={FaAngellist} width="15px" height="15px" />
                <Icon icon={FaAngellist} width="25px" height="25px" />
                <Icon icon={FaAngellist} width="35px" height="35px" />
            </HStack>
        </>
    );
};
//#endregion
