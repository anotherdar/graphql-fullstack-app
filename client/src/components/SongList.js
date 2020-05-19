import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo'

const FETCH_SONGS_TITLE = gql`
    query{
        songs {
            id
            title
        }
    }
`
export const SongList = () => {
    const {data, loading} = useQuery(FETCH_SONGS_TITLE)

    if(loading) return <div>loading ...</div>

    return (
        <ul className="collection">
        {
            data && data.songs && data.songs.map(({id, title}) => (
                <li className="collection-item" key={id}>
                    {title}
                </li>
            ))
        }
        </ul>
    )
};

