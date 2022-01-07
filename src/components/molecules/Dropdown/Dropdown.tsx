import React, { useEffect, useRef, useState } from "react";
import {
    BaseDropdown,
    DropdownMenu,
    Select,
    Selected,
} from "./Dropdown.styled";
import { IoMdArrowDropdown } from "react-icons/io";

export interface DropdownProps {
    /** Provides the first item name to be displayed in the dropdown */
    title: string | number;

    /** Provides the items to be displayed in the dropdown */
    options: { label: string; value: string | number }[];
}

const Dropdown = ({ options }: DropdownProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<{
        label: string;
        value: string | number;
    }>(options[0]);

    const ref = useRef<any>();

    useEffect(() => {
        const onBodyClick = (event: MouseEvent) => {
            event.preventDefault();
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener("click", onBodyClick, { capture: true });

        return () => {
            document.body.removeEventListener("click", onBodyClick, {
                capture: true,
            });
        };
    }, []);

    const handleOnClick = (option: {
        label: string;
        value: string | number;
    }) => {
        setSelected(option);
    };

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <BaseDropdown onClick={() => toggle()} ref={ref}>
                <Selected open={open}>
                    {selected.label}
                    <IoMdArrowDropdown />
                </Selected>
                {open ? (
                    <DropdownMenu>
                        {options.map((option) => {
                            return (
                                <Select
                                    key={option.value}
                                    onClick={() => handleOnClick(option)}
                                >
                                    {option.label}
                                </Select>
                            );
                        })}
                    </DropdownMenu>
                ) : (
                    ""
                )}
            </BaseDropdown>
        </>
    );
};

export default Dropdown;
