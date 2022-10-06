/* eslint-disable default-case */
import styled, {css} from "styled-components";

const Button = styled.button`
    padding: 1rem;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    ${({butttonType}) => {
        switch(butttonType) {
            case "primary":
                return css`
                color: #fff;
                background-color: var(--primal-color);
                &:hover{
                    background-color: var(--primal-color-focus);
                }
                `
            case "default": 
                return css`
                background-color: var(--grey-1);
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
export default Button;