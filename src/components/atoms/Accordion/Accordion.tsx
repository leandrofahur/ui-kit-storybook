import React, { ReactNode, useState } from "react";
import { BaseAccordion, Content, Title } from "./Accordion.styled";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

export interface AccordionProps {
    /** Provides the items to be displayed in the accordion */
    items: { title: string; content: string }[];
}

const Accordion = ({ items }: AccordionProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    const handleOnClick = (index: number) => {
        setActiveIndex(index);
        setOpen(!open);
        // console.log(activeIndex, open);
    };

    return (
        <>
            {items.map((item, index) => {
                return (
                    <BaseAccordion key={index}>
                        <div>
                            <Title onClick={() => handleOnClick(index)}>
                                {activeIndex === index && open ? (
                                    <IoMdArrowDropdown />
                                ) : (
                                    <IoMdArrowDropright />
                                )}
                                {item.title}
                            </Title>
                            {activeIndex === index && open ? (
                                <Content activeIndex={activeIndex}>
                                    {item.content}
                                </Content>
                            ) : (
                                ""
                            )}
                        </div>
                    </BaseAccordion>
                );
            })}
        </>
    );
};

export default Accordion;
