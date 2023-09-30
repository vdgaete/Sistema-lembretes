// To Do List Show Component

import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { format, previousSaturday } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const api = axios.create({
    baseURL: 'http://localhost:3001/api'
    })

function ToDoListShow() {
    const [toDoDates, setToDoDates] = React.useState([])
    const [toDoDatesValues, setToDoDatesValues] = React.useState({})
    const [isLoading, setIsLoading] = React.useState(false)


    React.useEffect(() => {
        //get all dates and values
        //here we need to use axios to get all dates and values using Rest API
        //and set toDoList
        setIsLoading(true)
        api.get('/dates').then(response => {
            setToDoDates(response.data)
        })
        // get all values in each date
        //here we need to use axios to get all values in each date using Rest API
        toDoDates.forEach(date => {
            api.get(`/datesValues`, {params: {date: date}}
            ).then(response => {
                setToDoDatesValues(prevState => ({
                    ...prevState,
                    [date]: response.data
                }))
            })
        })

        setIsLoading(false)
    }, [])

    

    return (
        <div>
            {(isLoading) ? (
                <div>
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div>
                    <h1 style={{textAlign: 'center'}}>To Do List</h1>
                </div>
            )
            }
            
        </div>
    )
}

export default ToDoListShow;