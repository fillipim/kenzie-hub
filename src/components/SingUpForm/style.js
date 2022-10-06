import styled from "styled-components";

export const SingUpForm = styled.form`
    width: 295px;
    background-color: var(--grey-3);
    padding: 19px 17px ;
    color: #fff;
    position: relative;
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
    label:nth-child(4) > div{
        position: relative;
    }
    label:nth-child(4) > div > button{
        position: absolute;
        top: 32px;
        right: 9px;
        font-size: 20px;
        background: transparent;
        margin: 0;
        color: #868E96;
    }
    span:nth-child(1){
        display: block;

    }
    span:nth-child(n + 2){
        text-align: start;
        display: block;
        cursor: pointer;
        min-height: 14px;
        transition: all .3s;
    }

    @media (min-width: 780px) {
        width: 370px;
        img{
            width: 143px;
        }
    }
    `