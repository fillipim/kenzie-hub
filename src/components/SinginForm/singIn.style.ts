import { Link } from "react-router-dom";
import styled from "styled-components";

export const SingInForm = styled.form`
    width: 295px;
    background-color: ${({theme}) => theme.colors.grey.grey3};
    padding: 19px 17px ;
    color: #fff;
    position: relative;
    border-radius: 8px;
    align-items: start;
    animation: transitionOpacity 1s ease;
    img{
        width: 101px;
        position: absolute;
        left: 33%;
        top: -7%;
    }
    h2{
        text-align: center;
        padding: 2rem;
    }
    label{
        font-size: 10px;
    }
     button, a{
        margin: 1rem 0;
    }
    input{
        margin-top: 1rem;
        margin-bottom: .4rem;
    }
    h4{
        text-align: center;
    }
    @media (min-width: 780px) {
        width: 370px;

        img{
            width: 143px;
        }
    }

    @keyframes transitionOpacity {
    0%{
        opacity: 0;
        transform: translateY(-10px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);        
    }
    }

`
export const PasswordInput = styled.div`
    position: relative;
    button{
        position: absolute;
        top: 32px;
        right: 9px;
        font-size: 20px;
        background: transparent;
        margin: 0;
        color: #868E96;
    }
`

export const SingUpButton = styled(Link)` 
    padding: 1rem;
    width: 100%;
    border-radius: 4px;
    display: block;
    text-align: center;
    cursor: pointer;
    color: #fff;
    background-color: ${({theme}) => theme.colors.grey.grey1};
    font-size: 12px;
    &:hover{
        background-color: ${({theme}) => theme.colors.grey.grey2};
    }
`