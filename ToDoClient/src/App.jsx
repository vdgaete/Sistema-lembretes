// Autor: Victor Daniel Oliveira Gaete

import './App.css'

import ToDoListShow from './components/ToDOListShow'
import ToDoForm from './components/ToDoForm'
function App() {
  


  return (
    <>
      <h1>Lista de Tarefas</h1>
      <div className="cadastro">
      <h2>Cadastro de nova tarefa: </h2>
      <ToDoForm />
      </div>
      <div className="lista">
      <h2>Lista de atividades: </h2>
      <ToDoListShow />  
      </div>
    </>
  )
}

export default App
