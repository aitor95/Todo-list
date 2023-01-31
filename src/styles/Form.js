import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  margin-bottom: 10px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    margin-left: 10px;
    width: 50px;
    transition: 0.3s all ease-out;

    &:hover{
      transform: rotate(90deg);
    }
  }
`