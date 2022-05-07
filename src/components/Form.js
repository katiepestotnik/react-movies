import {useState} from 'react'
const Form = ({getMovie}) => {
    const [formState, setFormState] = useState({
        searchTerm: ''
    })
    const handleChange = (e) => {
        console.log(formState)
        //replace state with a copy
        const newState = { ...formState }
        //update copy
        newState[e.target.name] = e.target.value
        //set state to new object
        setFormState(newState)
        //doesn't work below you have to make a new object
        // formState.searchTerm = e.target.value
        // console.log(formState)
        // setFormState(formState)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        //pass searchterm to getMovie
        getMovie(formState.searchTerm)
        //reset form
        setFormState({
            searchTerm: ''
        })

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    name='searchTerm'
                    value={formState.searchTerm} type='text' />
                <input type='submit' value="SUBMIT"/>
            </form>
        </div>
    )
}
export default Form 