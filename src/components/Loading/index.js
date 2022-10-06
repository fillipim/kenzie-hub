import styled from "styled-components";

export const Loading = styled.div`
    width: 50px;
    border: 5px solid transparent;
    height: 50px;
    border-top: 5px solid #FF577F;
    animation: is-rotate 1s infinite ease-in-out;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;

    @keyframes is-rotate {
      to {
        transform: rotate(1turn);
      } 
    }
`