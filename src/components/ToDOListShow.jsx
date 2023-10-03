// To Do List Show Component
import { useApi } from "../contexts/ApiContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from 'react';

const DateCard = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 10px;
  width: 100%;
`;

const DateCardTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 0;  
  align-self: flex-start;
  color: #333;
`;

const ListDiv = styled.div`
  list-style: inside;
  
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap:5px;
`;

const ListItem = styled.ul`
  color: #333;
  font-size: 18px;
  height: 30px; 
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function ToDoListShow() {
  const { tarefas, error, deleteTarefas,getTarefas,reload } = useApi();
  const [savedTarefas, setSavedTarefas] = useState([]);
  useEffect(() => {
    if (tarefas.error) {
      getTarefas();
    }
    else {

      setSavedTarefas(tarefas);
    }
  }, [getTarefas, tarefas]);

  const filterDates = (tarefas) => {
    let dates = [];
    tarefas.forEach((tarefa) => {
      if (!dates.includes(tarefa.data)) {
        dates.push(tarefa.data);
      }
    });

    // Sort dates
    dates.sort();
    return dates;
  };
  const filterTarefasByDate = (tarefas, date) => {
    let tarefasByDate = [];
    tarefas.forEach((tarefa) => {
      if (tarefa.data === date) {
        tarefasByDate.push(tarefa);
      }
    });
    //sort
    tarefasByDate.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
    return tarefasByDate;
  };
  const handleDelete = async (id) => {
    while (reload){
      await new Promise(r => setTimeout(r, 200));
    }
    deleteTarefas(id);
  };

  return (
    <>
      {
        <>
          {error ? (
            <div>
              <h3>Error: {error.message}</h3>
            </div>
          ) : (
            <>
              {filterDates(savedTarefas).map((selectedDate) => (
                <DateCard key={selectedDate}>
                  <DateCardTitle>{`${selectedDate.split("-")[2]}/${
                    selectedDate.split("-")[1]
                  }/${selectedDate.split("-")[0]}`}</DateCardTitle>

                  <ListDiv>
                    {filterTarefasByDate(savedTarefas, selectedDate).map(
                      (selectedTarefa) => (
                        <ListItem key={selectedTarefa.id}>
                          {selectedTarefa.nome}
                          <FontAwesomeIcon
                            icon={faDeleteLeft}
                            size="xs"
                            color="red"
                            style={{
                              marginLeft: "10px",
                              alignSelf: "center",
                            }}
                            onClick={() => handleDelete(selectedTarefa.id)}
                          />
                        </ListItem>
                      )
                    )}
                  </ListDiv>
                </DateCard>
              ))}
            </>
          )}
        </>
      }
    </>
  );
}

export default ToDoListShow;
