import styled from "styled-components";
import { DropdownProps } from "./Dropdown";

type SelectedProps = {
    open?: boolean;
};

export const BaseDropdown = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;

    // TODO: Change the hardcoded color:
    border: 1px solid #c4c4c4;
    border-radius: 5px;
`;

export const Selected = styled.div<SelectedProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;

    ${(props) => (props.open ? "border-bottom: 1px solid #e6e6e6" : "")}
`;

export const DropdownMenu = styled.div`
    & > *:last-child {
        border-bottom: none;
    }
`;

export const Select = styled.div`
    padding: 10px 20px;
    border-bottom: 1px solid #e6e6e6;

    &:hover {
        background-color: #f6f6f6;
    }
`;
