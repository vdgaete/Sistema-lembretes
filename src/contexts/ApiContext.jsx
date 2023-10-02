//Api management context
import { createContext, useState, useContext, useEffect} from "react";
import axios from "axios";
import propTypes from "prop-types";


const api = axios.create({
    baseURL: "",
    headers: {
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Allow-Control-Allow-Origin": "*",
    },
},
});

const ApiContext = createContext();

const ApiProvider = (props) => {
    const [tarefas, setTarefas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getTarefas();
    }   , []);

    const getTarefas = async () => {
        setLoading(true);
        try {
            const response = await api.get("/tarefa");
            setTarefas(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    const postTarefas = async (name, date) => {
        
        try {
            console.log(date);
            await api.post("/tarefa", {
                nome: name,
                data: date
            }).then((response) => {
                console.log(response);
            }   
            );
            getTarefas();
            
        } catch (error) {
            setError(error);
            
        }
    }

    const deleteTarefas = async (id) => {
        
        try {
            await api.delete(`/tarefa/`
            , 
            {
                data: {
                    id: id
                }
            }
            );
            getTarefas();
        } catch (error) {
            setError(error);
            
        }
    }

    const updateTarefas = async (id, name, date) => {
        setLoading(true);
        try {
            await api.put(`/tarefa/`, {
                id: id,
                name: name,
                date: date
            });
            getTarefas();
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    const APIState = {
        tarefas,
        loading,
        error,
        getTarefas,
        postTarefas,
        deleteTarefas,
        updateTarefas
    }

    return (
        <ApiContext.Provider value={APIState}>
            {props.children}
        </ApiContext.Provider>
    );
}

const useApi = () => {
    const context = useContext(ApiContext);
    if (context === undefined) {
        throw new Error("useApi must be used within a ApiProvider");
    }
    return context;
}

export { ApiProvider, useApi };



ApiProvider.propTypes = {
    children: propTypes.node.isRequired
}
