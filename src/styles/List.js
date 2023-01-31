import styled from "styled-components";

export const List = styled.div`
  width: 90%;
  margin-top: 50px;

  label {
    cursor: pointer;
    transition: color 0.5s;
    margin-left: 20px;
  }
  
  input {
    position: relative;

    &:before {
      position: absolute;
      content: "✔";
      height: 20px;
      width: 20px;
      transform: translate(-50%, -50%) scale(0.8);
      top: 60%;
      left: 80%;
      color: #888;
      z-index: 1;
      opacity: 0;
      transition: transform 0.6s, opacity 0.6s;
    }

    &:after {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      border: 1px solid #888;
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(1);
      top: 50%;
      left: 50%;
      background-color: white;
      transition: transform 0.6s, border 0.6s;
    }
    &:checked + label {
      color: #888;
    }

    &:checked::after {
      transform: translate(-50%, -50%) scale(1.2);
      border: 1px solid #eee;
    }

    &:checked::before {
      opacity: 0.4;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`