import styled from "styled-components";

export const TechCard = styled.li` 
    background-color: ${({theme}) => theme.colors.grey.grey4};
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    border-radius: 4px;
    transition: all .3s;
    &:hover{
        background-color: ${({theme}) => theme.colors.grey.grey2};
    }
`