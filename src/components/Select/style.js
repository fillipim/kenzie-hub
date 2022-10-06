import styled from "styled-components";

const Select = styled.select`
    padding:  1rem;
    background-color: var(--grey-2);
    border: 1.2px solid var(--grey-2);
    border-radius: 4px;
    width: 100%;
    color: var(--grey-0);
    &:focus{
    border: 1.2px solid var(--grey-0);
    }
`

export default Select;