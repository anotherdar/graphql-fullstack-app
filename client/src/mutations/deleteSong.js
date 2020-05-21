import gql from 'graphql-tag'


export const DELETE_A_SONG = gql`
    mutation DeleteASong($id: ID!) {
        deleteSong(id: $id) {
            id
           title
        }
    }

`