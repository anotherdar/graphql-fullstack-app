import React, {Fragment, useEffect} from 'react';
import { useLazyQuery, useMutation } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'

import {FETCH_SONGS_TITLE} from '../queries/fetchSongs'
import {DELETE_A_SONG} from '../mutations/deleteSong'

export const SongList = () => {
    const [getSongs, {data, loading,error, refetch}] = useLazyQuery(FETCH_SONGS_TITLE)
    const [deleteSong] = useMutation(DELETE_A_SONG)

    useEffect(() => {
        let isMounted = true
        
        if(isMounted) {
            getSongs()
        }

        return () => {
            isMounted = false
        }
    }, [getSongs])

    const onDeleteASong = (id) => {
        return async () => {
            //delete a song function
            await deleteSong({
                variables: {
                    id: id
                }
            })

            //after delete a song execute re-fetch the query to get the songs again
            await refetch()
        }
    }
    if(error) return    <div>upps... something went wrong</div>
    if(loading) return <div>loading ...</div>
    
    return (
        <Fragment>
        <ul className="collection">
            {
                data && data.songs.length !== 0 ? data.songs.map(({id, title}) => (
                    <li className="collection-item" key={id}>
                        <Link to={`/songs/${id}`}>
                            {title}
                        </Link>
                        <i className="material-icons" onClick={onDeleteASong(id)}>delete</i>
                    </li>
                )) : <li className='collection-item'>start adding a new song</li>
            }
        </ul>

        <Link
            to="/songs/creator"
            className="btn-floating btn-large red right"
        >
            <i className="material-icons">add</i>
        </Link>
        </Fragment>
    )
};

