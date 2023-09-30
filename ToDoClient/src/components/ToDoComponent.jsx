//To Do individual component
import React from 'react';


// Remove this line since React has already been imported in the file above

import PropTypes from 'prop-types';

function ToDoListIndividual(props) {
    const { toDoList } = props

    const removeToDo = () => {
        //remove to do from database
        //here we need to use axios to remove to do using Rest API
    }

    return (
        <div>
            <h1>{toDoList.name}</h1>
            <h2>{toDoList.date}</h2>
            <h3>{toDoList.description}</h3>
            <button onClick={removeToDo}>X</button>
        </div>
    )
}

ToDoListIndividual.propTypes = {
    toDoList: PropTypes.shape({
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
};

export default ToDoListIndividual;
