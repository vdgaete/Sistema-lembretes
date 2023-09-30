import React, { useEffect } from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;
    const Input = styled.input`
    width: 300px;
    height: 30px;
    margin: 10px;
    `;
    const Button = styled.button`
    width: 100px;
    height: 30px;
    margin: 10px;
    `;
    const Label = styled.label`
    margin: 10px;
    `;
    const Title = styled.h2`
    margin: 10px;
    `;

const ToDoForm = () => {

    const [name, setName] = React.useState("");
    const [date, setDate] = React.useState(Date.now());
    

    const handleSubmit = (event) => {
        //validar os dados
        //enviar os dados para o servidor
        //limpar o formulario
        
        if (name === "" || new Date(date) < new Date()) {
            alert("Preencha os dados corretamente");
            return;
        }
        event.preventDefault();
        const data = {
            name,
            dueDate: date
        };
        console.log(data);
        alert("Atividade adicionada com sucesso!");
        alert(JSON.stringify(data));
        alert(Date.now());
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Title>Adicionar nova atividade</Title>
            <Label>Nome da atividade:</Label>
            <Input type="text" value={name} onChange={
                (event) => {
                    setName(event.target.value);
                }
            } />
            <Label>Data de entrega:</Label>
            <Input type="date" value={date} onChange={
                (event) => {
                    setDate(event.target.value);
                    console.log(event.target.value);    
                }
            } />
            <Button type="submit" >Adicionar</Button>
        </Form>
    )

}

export default ToDoForm;

