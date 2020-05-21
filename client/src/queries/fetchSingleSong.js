import gql from 'graphql-tag'

export const FETCH_A_SINGLE_SONG = gql`
    query Song($id: ID!) {
        song(id: $id) {
            id
            title
            lyrics {
                id
                content
                likes
            }
        }
    }
`