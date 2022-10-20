/* eslint-disable default-case */
import styled, {css} from "styled-components";

export const ButtonStyle = styled.button<{buttonType: string}>`
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
                background-color: ${({theme}) => theme.colors.brand[100]};
                font-size: 12px;
                &:hover{
                    background-color: ${({theme}) => theme.colors.brand[200]};
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
                background-color: ${({theme}) => theme.colors.grey.grey1};
                font-size: 12px;
                color: #fff;
                `
            case "medium":
                return css`
                padding: .5rem 1rem;
                background-color: ${({theme}) => theme.colors.grey.grey3};
                color: #fff;
                font-size: 12px;
                width: fit-content;
                &:hover{
                    background-color: ${({theme}) => theme.colors.grey.grey2};
                }
                `
        }
    }}
`
