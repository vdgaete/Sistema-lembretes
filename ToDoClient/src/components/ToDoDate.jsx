//All To Do  in certain date component

import React, {useState,useEffect} from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import PropTypes from 'prop-types';

function ToDoListDate(props) {
    const { date } = props
    const [toDoList, setToDoList] = useState([])
    const formattedDate = format(new Date(date), 'dd/MM/yyyy', { locale: ptBR })
    useEffect(() => {
        //get all to do in date
        //here we need to use axios to get all to do in date using Rest API
        //and set toDoList

    }, [])

    

    return (
        <div>
            <h1>{formattedDate}</h1>
            {//show all to do in date



            }
        </div>
    )
}

ToDoListDate.propTypes = {
    date: PropTypes.string.isRequired
};


export default ToDoListDate;