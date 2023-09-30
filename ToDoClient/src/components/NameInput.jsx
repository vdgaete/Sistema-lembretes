//Name input react component
import { useState } from 'react'

function NameInput(props) {
    const [name, setName] = useState('')
    
    const handleChange = (event) => {
        setName(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        props.setName(name)
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
    )
    }

export default NameInput
