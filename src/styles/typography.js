/* eslint-disable default-case */
import styled, {css} from "styled-components";
import BaseText from "./components/baseText";

export const StyledTitle = styled(BaseText)`
${({titleType, color}) => {
    switch(titleType){
        case "title1":
            return css`
                font-size: 18px;
                font-weight: bold;
                color: ${color};
            `
        case "title2":
            return css`
                font-size: 16px;
                font-weight: bold;
                color: ${color};
            `
        case "title3":
            return css`
                font-size: 14px;
                font-weight: bold;
                color: ${color};
            `
        case "headline":
            return css`
                font-size: 12px;
                font-weight: 400;
                color: ${color};
            `
        case "headlineBold":
            return css`
                font-size: 12px;
                font-weight: bold;
                color: ${color};
            `
        case "HeadlineItalic":
            return css`
                font-size: 12px;
                font-weight: 600;
                color: ${color};
                font-style: italic;
            `
    }
}}
`