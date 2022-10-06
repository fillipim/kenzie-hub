import styled from "styled-components";

export const SingInForm = styled.form`
    width: 295px;
    background-color: var(--grey-3);
    padding: 19px 17px ;
    color: #fff;
    position: relative;
    img{
        width: 101px;
        position: absolute;
        left: 33%;
        top: -5%;
    }
    h3{
        text-align: center;
        padding: 2rem;
    }
    label{
        font-size: 10px;
    }
     button{
        margin: 1rem 0;
    }
    input{
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
    span{
        text-align: center;
        display: block;
        cursor: pointer;
        height: 14px;
        transition: all .3s;
    }

    @media (min-width: 780px) {
        width: 370px;

        img{
            width: 143px;
        }
    }

`