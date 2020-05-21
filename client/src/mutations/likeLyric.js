import gql from 'graphql-tag'


export const LIKE_A_LYRIC = gql`
    mutation LikeLyric($id: ID!) {
        likeLyric(id: $id) {
            id
            likes
        }
    }
`