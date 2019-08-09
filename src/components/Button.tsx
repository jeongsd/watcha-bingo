import styled from 'styled-components';

const Button = styled.button<{ primary?: boolean }>`
  background: ${props => (props.primary ? 'tomato' : 'white')};
  color: ${props => (props.primary ? 'white' : 'tomato')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid tomato;
  border-radius: 3px;
  cursor: pointer;

  transition: background 250ms;
  :hover {
    box-shadow: 0 0 5px tomato;
  }
`;

export default Button;
