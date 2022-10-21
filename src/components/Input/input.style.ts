import styled from "styled-components";

export const Input = styled.input`
    padding:  1rem;
    background-color: ${({theme}) => theme.colors.grey.grey2};
    border: 1.2px solid ${({theme}) => theme.colors.grey.grey2};
    border-radius: 4px;
    width: 100%;
    color: ${({theme}) => theme.colors.grey.grey0};
    &:focus{
        border: 1.2px solid ${({theme}) => theme.colors.grey.grey4};
        background-color: ${({theme}) => theme.colors.grey.grey2};
    }
`