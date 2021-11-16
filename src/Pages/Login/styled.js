import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 2px solid #888888;
  margin-bottom: 20px;
  padding: 0 30px;
  border-radius: 5px;

  ::-webkit-input-placeholder {
    color: #707070;
    font: bold 16px 'Comfortaa', cursive;
  }
`

export const GreenButton = styled.div`
  display: inline-flex;
  width: 120px;
  height: 50px;
  background: #00BF6C;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  font: bold 15px 'Comfortaa', cursive;
  cursor: pointer;
`