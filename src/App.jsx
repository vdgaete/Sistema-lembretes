// Autor: Victor Daniel Oliveira Gaete

import './App.css'
import { ApiProvider } from './contexts/ApiContext'
import ToDoListShow from './components/ToDOListShow'
import ToDoForm from './components/ToDoForm'
import styled from 'styled-components'

function App() {

  return (
    <>
      <ApiProvider>
      <ViewContainer>
      <ViewTitle>Lista de Tarefas</ViewTitle>
      <FormContainer>
      <FormTitle>Adicionar Tarefa</FormTitle>
      <ToDoForm />
      </FormContainer>
      <ListContainer>
      <FormTitle>Lista de Tarefas</FormTitle>
      <ToDoListShow />  
      </ListContainer>
      </ViewContainer>
      </ApiProvider>
    </>
  )
}

//Styled Components

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  width:100%;
  height:100%;
`;

const ViewTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  align-self: flex-start;
  top: 0;
  color: #333;
  width: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  
  padding: 10px;
  width: 80%;
  max-width: 500px;
  border-radius: 10px;
  background-color: #f0f0f0;
  box-shadow: 0px 0px 5px 0px #888;
`;

const FormTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  
  padding: 10px;
  width: 80%;
  max-width: 500px;
  border-radius: 10px;
  background-color: #f0f0f0;
  box-shadow: 0px 0px 5px 0px #888;
`;




export default App
