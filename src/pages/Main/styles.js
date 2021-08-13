import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;

  input {
    flex: 1;
    border: 1px solid ${props => (props.error ? '#FF0000' : '#ddd')};
    padding: 10px 15px;
    border-radius: 4px 0 0 4px;
    font-size: 17px;
  }
`;

//Criando animação do botao
const animate = keyframes`
  //começa
  from{
    transform: rotate(0deg);
  }
  //até
  to{
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background-color: #0d2636;
  border: 0;
  border-radius: 0 4px 4px 0;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  //se tem loading executa a animação
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${animate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    //ignora o primeiro item
    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #0d2636;
      text-decoration: none;
    }
  }
`;

export const DeleteButton = styled.button.attrs({
  type: 'button',
})`
  border: 0;
  background-color: transparent;
  color: #0d2636;
  padding: 8px 7px;
  outline: 0;
  border-radius: 4px;
`;
