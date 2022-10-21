import styled from "styled-components";

export const SingUpForm = styled.form`
    width: 295px;
    background-color: ${({theme}) => theme.colors.grey.grey3};
    padding: 19px 17px ;
    color: #fff;
    position: relative;
    border-radius: 8px;
    animation: transitionOpacity 1s ease;
    img{
        width: 101px;
        position: absolute;
        left: 0;
        top: -5%;
    }
    h2{
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
    `;