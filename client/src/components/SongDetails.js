import React, {Fragment, useEffect} from 'react'

//npm libraries 
import { useLazyQuery } from '@apollo/react-hooks'
import { useParams, Link } from 'react-router-dom'

//queries
import { FETCH_A_SINGLE_SONG } from '../queries/fetchSingleSong'

//components
import {LyricCreator} from './LyricCreator'
import {LyricList} from './LyricList'

export const SongDetails = () => {
    const [getSong, {loading, data}] = useLazyQuery(FETCH_A_SINGLE_SONG)
    const {id} = useParams()

    useEffect(() => {
        let isMounted = true 

        //if the component is mounted make the request to fetch the song
        if(isMounted) {
            //if theres no id to make the request don't do anything
            if(!id) return 
            getSong({
                variables: {
                    id: id
                }
            })
        }

        return () => {
            isMounted = false
        }
    }, [id, getSong])

    if(loading) return <div>loading...</div>

    return (
        <div>
            <Link to="/">
                <i className="material-icons">arrow_back</i>
            </Link>
            {
                data && (
                    <Fragment>
                        <h3>{data.song.title}</h3>


                        <LyricList lyrics={data.song.lyrics}/>
                    </Fragment>
                )
            }
            <LyricCreator id={id}/>
        </div>
    )
}