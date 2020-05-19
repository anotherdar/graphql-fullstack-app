import React, {useState} from 'react'


export const SongCreator = () => {
    const [title, setTitle] = useState('')

    const getUserInput = () => {
        return (e) => {
            const event = e.target
            setTitle(event.value)
        }
    }

    return (
        <div>
            <h3>Create a new song</h3>

            <form>
                <label>
                    Song title: 
                    <input 
                        type="text" 
                        onChange={getUserInput()} 
                        value={title}
                    />
                </label>
            </form>
        </div>
    )
}