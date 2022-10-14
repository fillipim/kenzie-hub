import styled from "styled-components";
import { StyledTitle } from "../../styles/typography";

const SingUpForm = styled.form`
    width: 295px;
    background-color: var(--grey-3);
    padding: 19px 17px ;
    color: #fff;
    position: relative;
    border-radius: 8px;
    img{
        width: 101px;
        position: absolute;
        left: 0;
        top: -5%;
    }
    h3{
        text-align: center;
        padding: 2rem;
        line-height: 28px;
    }
    label{
        font-size: 10px;
    }
    a{
        position: absolute;
        right: 0;
        top: -8%;
    }
     button{
        margin: 1rem 0;
    }
    input, select{
        margin-top: 1rem;
        margin-bottom: .4rem;
    }
    span:nth-child(1){
        display: block;
    }

    @media (min-width: 780px) {
        width: 370px;
        img{
            width: 143px;
        }
    }
    `

export { SingUpForm };