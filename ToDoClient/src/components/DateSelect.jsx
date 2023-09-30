//DateSelect component
import { useState } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

function DateSelect(props) {
    const [date, setDate] = useState('')
    
    const handleChange = (event) => {
        setDate(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        props.setDate(date)
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <label>
            Date:
            <input type="date" value={date} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
    )
    }

export default DateSelect
