//Date input react component
import { useState } from 'react'
import DateSelect from './DateSelect'
import PropTypes from 'prop-types'
function DateInput(props) {
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
            <DateSelect setDate={setDate} />
        </label>
        <input type="submit" value="Submit" />
        </form>
    )
    }

DateInput.propTypes = {
    setDate: PropTypes.func.isRequired
    
    };

export default DateInput

