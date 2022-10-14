import styled from "styled-components";
import { ButtonStyle } from "../Button/button.style";

const ModalContainer = styled.div`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    padding: 1rem calc(1rem - 3px);
    div > form > div{
        display: flex;
        justify-content: space-between;
        margin-top: .5rem;
    }
    @media (min-width: 1024px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

`
const ModalForm = styled.form`
    position: relative;
    background-color: var(--grey-3);
    padding: 1rem;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    label{
        font-size: 10px;
        color: #fff;
    }
    input, select{
        margin-top: 1rem;
    }
    @media (min-width: 1024px) {
        width: 370px;
    }
    animation: fade-slide-top 1s ease;
    @keyframes fade-slide-top {
        0%{
            transform: translateY(-10%);
            opacity: 0;
        }
        100%{
            transform: translateY(0);
            opacity: 1;
        }
    }
`
const FormHeader = styled.div`
    padding: 1rem;
    background-color: var(--grey-2);
    color: #fff;
    display: flex;
    justify-content: space-between;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`
const CloseModalButton = styled.button`
    background-color: transparent;
    font-weight: 300;
    color: var(--grey-1);
`

const UpdateTechButton = styled(ButtonStyle)`
    width: 163px;
   @media (min-width: 1024px) {
    width: 204px;
   }
`

const DeleteTechButton = styled(ButtonStyle)`
    width: 78px;
    @media (min-width: 1024px) {
        width: 98px;
    }
`
export {
    ModalContainer, 
    ModalForm, 
    FormHeader, 
    CloseModalButton, 
    UpdateTechButton,
    DeleteTechButton
};