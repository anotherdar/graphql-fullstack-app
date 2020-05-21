import gql from 'graphql-tag'

export const ADD_A_SONG_MUTATION = gql`
    mutation AddSong($title: String!){
        addSong(title: $title) {
            id 
            title
        }
    }

`