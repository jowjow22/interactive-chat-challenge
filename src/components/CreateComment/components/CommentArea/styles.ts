import styled from "styled-components"

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 150px;
  resize: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`
