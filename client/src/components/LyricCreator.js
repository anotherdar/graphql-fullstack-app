import React, {useState} from 'react'

//npm libraries
import {useMutation} from '@apollo/react-hooks'

//mutation
import {ADD_LYRIC_TO_A_SONG} from '../mutations/addLyricToASong'

export const LyricCreator = ({ id }) => {
    const [content, setContent] = useState('')
    const [addLyric] = useMutation(ADD_LYRIC_TO_A_SONG)

    //get user input a set the state
    const userInput = () => {
        return (e) => {
            //saving the event to prevent synthetic events
            const event = e.target

            //set the state
            setContent(event.value)
        }
    }

    //on submit user input
    const submitUserInput = () => {
        return async (e) => {
            //saving the event to prevent synthetic events
            const event = e
            
            //prevent default behavior
            event.preventDefault()

            //mutation to add a lyric
            await addLyric({
                variables: {
                    id: id,
                    content: content
                }
            })

            //after sending the lyrics correctly set the state back to empty
            setContent('')
        }
    }

    return (
        <form onSubmit={submitUserInput()}>
            <label>
                Add lyric
            </label>

            <input value={content} onChange={userInput()} type="text"/>
        </form>
    )
}