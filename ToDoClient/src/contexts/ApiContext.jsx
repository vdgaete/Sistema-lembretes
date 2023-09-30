//Api management context
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import propTypes from "prop-types";


const api_url = "http://localhost:3000";

export const ApiContext = createContext();

export const ApiProvider = (props) => {
    const [tarefas, setTarefas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getTarefas = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${api_url}/tarefas`);
            setTarefas(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    const addtarefas = async (name, date) => {
        setLoading(true);
        try {
            await axios.post(`${api_url}/tarefas`, {
                name: name,
                date: date
            });
            getTarefas();
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    const getDates = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${api_url}/tarefas`);
            setTarefas(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    const deleteTarefas = async (id) => {
        setLoading(true);
        try {
            await axios.delete(`${api_url}/tarefas/${id}`);
            getTarefas();
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    const updateTarefas = async (id, name, date) => {
        setLoading(true);
        try {
            await axios.put(`${api_url}/tarefas/${id}`, {
                name: name,
                date: date
            });
            getTarefas();
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getTarefas();
    }, []);

    const APIState = {
        tarefas,
        loading,
        error,
        addtarefas,
        deletetarefas: deleteTarefas,
        updatetarefas: updateTarefas
    }

    return (
        <ApiContext.Provider value={APIState}>
            {props.children}
        </ApiContext.Provider>
    );

}



