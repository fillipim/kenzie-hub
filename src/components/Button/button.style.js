/* eslint-disable default-case */
import styled, {css} from "styled-components";
import Button from ".";

export const ButtonStyle = styled(Button)`
    padding: 1rem;
    width: 100%;
    border-radius: 4px;
    display: block;
    text-align: center;
    cursor: pointer;
    font-size: 1rem;
    ${({buttonType}) => {
        switch(buttonType) {
            case "primary":
                return css`
                color: #fff;
                background-color: var(--primal-color);
                font-size: 12px;
                &:hover{
                    background-color: var(--primal-color-focus);
                }
                `
            case "disable":
                return css`
                color: #fff;
                background-color: #59323F;
                font-size: 12px;
                `
            case "default": 
                return css`
                background-color: var(--grey-1);
                font-size: 12px;
                color: #fff;
                `
            case "medium":
                return css`
                padding: .5rem 1rem;
                background-color: var(--grey-3);
                color: #fff;
                font-size: 12px;
                width: fit-content;
                &:hover{
                    background-color: var(--grey-2);
                }
                `
        }
    }}
`
