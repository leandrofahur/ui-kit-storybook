import { Story, Meta } from "@storybook/react";
import Heading from "components/atoms/Heading";
import Card, { CardBody, CardMedia, CardProps } from "./Card";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";

import Card01 from "../../../assets/images/card01.jpeg";
import Card02 from "../../../assets/images/card02.jpeg";
import Card03 from "../../../assets/images/card03.jpeg";
import Card04 from "../../../assets/images/card04.jpeg";
import Card05 from "../../../assets/images/card05.jpeg";

export default {
    title: "Components/Molecules/Card",
    component: Card,
    subcomponents: { CardBody, CardMedia },
    argTypes: {},
} as Meta<CardProps>;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    width: "300px",
    children: (
        <>
            <CardMedia image={Card01} />
            <CardBody color="#333">
                <Heading as="h6">Card Title</Heading>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatum, nam voluptate recusandae minus aliquid
                    laboriosam!
                </p>
                <Button variant="primary">Button</Button>
            </CardBody>
        </>
    ),
};

export const OnlyImage = Template.bind({});
OnlyImage.args = {
    width: "300px",
    children: (
        <>
            <CardMedia image={Card01} />
        </>
    ),
};

export const OnlyContent = Template.bind({});
OnlyContent.args = {
    width: "300px",
    children: (
        <>
            <CardBody color="#333">
                <Heading as="h6">Card Title</Heading>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatum, nam voluptate recusandae minus aliquid
                    laboriosam!
                </p>
                <Button variant="primary">Button</Button>
            </CardBody>
        </>
    ),
};

export const CardGrid = () => {
    return (
        <>
            <Grid numOfColumns={3}>
                <Card>
                    <CardMedia image={Card01} />
                    <CardBody color="#333">
                        <Heading as="h6">Card Title</Heading>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>
                        <Button variant="primary">Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardMedia image={Card02} />
                    <CardBody color="#333">
                        <Heading as="h6">Card Title</Heading>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>
                        <Button variant="primary">Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardMedia image={Card03} />
                    <CardBody color="#333">
                        <Heading as="h6">Card Title</Heading>
                        <p>Lorem ipsum dolor sit amet.aliquid laboriosam!</p>
                        <Button variant="primary">Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardMedia image={Card04} />
                    <CardBody color="#333">
                        <Heading as="h6">Card Title</Heading>
                        <p>Lorem ipsum dolor sit amet.aliquid laboriosam!</p>
                        <Button variant="primary">Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardMedia image={Card05} />
                    <CardBody color="#333">
                        <Heading as="h6">Card Title</Heading>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>
                        <Button variant="primary">Button</Button>
                    </CardBody>
                </Card>
            </Grid>
        </>
    );
};
