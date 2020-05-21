import React, {useState} from 'react'

import { useMutation } from '@apollo/react-hooks'
import {Link, useHistory} from 'react-router-dom'

import {ADD_A_SONG_MUTATION} from '../mutations/addSongs'
import {FETCH_SONGS_TITLE} from '../queries/fetchSongs'

export const SongCreator = () => {
    const [title, setTitle] = useState('')
    const [addSong, {loading}] = useMutation(ADD_A_SONG_MUTATION)
    const {push} = useHistory()

    const getUserInput = () => {
        return (e) => {
            const event = e.target
            setTitle(event.value)
        }
    }
    const submitUserInput = () => {
        return async (e) => {
            const event = e
            event.preventDefault()

            //if theres not title don't do anything
            if(!title) return

            //mutation to add song
            await addSong({
                variables: {
                    title: title
                },
                refetchQueries: [{
                    query: FETCH_SONGS_TITLE
                }]
            })
           
            //after the song gets added push back to al the song
            push('/')
        }
    }

    return (
        <div>
            <Link to="/">
                <i className="material-icons">arrow_back</i>
            </Link>
            <h3>Create a new song</h3>

            <form onSubmit={submitUserInput()}>
                <label>
                    Song title: 
                    <input 
                        type="text" 
                        onChange={getUserInput()} 
                        value={title}
                    />
                </label>
            </form>


            {
                loading && <div>Sending....</div>
            }
        </div>
    )
}