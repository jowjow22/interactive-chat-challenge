import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.color};
  padding: 20px 40px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  font-weight: bolder;
  max-height: 60px;
  transition: .5s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
  `
