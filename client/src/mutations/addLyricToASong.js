import gql from 'graphql-tag'

export const ADD_LYRIC_TO_A_SONG = gql`
    mutation AddLyricToASong($id: ID!, $content: String!) {
        addLyricToASong(songId: $id, content: $content) {
            id
            lyrics {
                id
                content
            }
        }
    }
`