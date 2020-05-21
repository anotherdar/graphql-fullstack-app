import gql from 'graphql-tag'

export const FETCH_SONGS_TITLE = gql`
    query{
        songs {
            id
            title
        }
    }
`