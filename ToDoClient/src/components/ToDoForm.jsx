//To do form component
import { set } from "date-fns";
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
    const [valid, setValid] = React.useState(false);
    //style

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, date);
    }


    const isDateValid = (date) => {
        const now = Date.now();
        if (date < now) {
            console.log("Data invalida");
            return false;
        }
        return true;
    }

    const isNameValid = (name) => {
        if (name == "") {
            return false;
        }
        return true;
    }

    const isFormValid = () => {
        if (isDateValid(date) && isNameValid(name)) {
            setValid(true);
            return true;

        }
        setValid(false);
        return false;
    }
    useEffect(() => {
        isFormValid();
    }
         // eslint-disable-next-line react-hooks/exhaustive-deps
         , [name, date]);

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
                }
            } />
            <Button type="submit" disabled={!valid}>Adicionar</Button>
        </Form>
    )

}

export default ToDoForm;

