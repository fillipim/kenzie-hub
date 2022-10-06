import styled from "styled-components";

export const Dashboard = styled.main`
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--grey-3);
        padding: calc(1rem + 10px) calc(1rem - 3px);
    }
    header > img {
        width: 101px;
    }
    div{
        padding: 2rem calc(1rem - 3px);
    }
    div:nth-child(2){
        border-bottom: 1px solid var(--grey-3);
    }
    div:nth-child(3){
        display: none;
    }

    span{
        display: block;
        padding-top: 1rem ;
    }
    @media (min-width: 780px) {
      header{
        padding: calc(1rem + 10px) 334px;
      }  
      div{
        padding: 2rem 334px;
      }
      div:nth-child(2){
        display: flex;
        justify-content: space-between;
      }
      div:nth-child(3){
        display: block;
      }
    }
`