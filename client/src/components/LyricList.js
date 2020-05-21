import React from 'react'

import { useMutation } from '@apollo/react-hooks'

import {LIKE_A_LYRIC} from '../mutations/likeLyric'

export const LyricList = ({lyrics}) => {
    const [likeToALyric] = useMutation(LIKE_A_LYRIC, )
    //to give a like to a lyric
    const onLike = (id, likes) => {
        return async () => {
            await likeToALyric({
                variables: {
                    id: id
                },
                optimisticResponse: {
                    __typename: 'Mutation',
                    likeLyric: {
                        id: id,
                        __typename: 'LyricType',
                        likes: likes + 1
                    }
                },
            })
        }
    }

    return (
        <ul className='collection'>
            {
                lyrics.map(({id, content, likes}) => {
                    return (
                        <li key={id} className='collection-item'>
                            {content}

                            <div className='vote-box'>
                                <i 
                                    className="material-icons" 
                                    style={{color: "#1e88e5 "}}
                                    onClick={onLike(id, likes)}
                                >thumb_up</i>

                                {likes}
                            </div>

                        </li>
                    )
                })
            }
        </ul>
    )
}