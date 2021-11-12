import { gql } from 'apollo-boost';

export const queryAuthors = gql`
    {
        authors {
            id
            name
        }
    }
`

export const queryBook = gql`
{
    books{
      id
      name
      author{
        name
        id
      }
    }
  }
`;

export const addBook = gql`
mutation($name: String!, $genre: String!, $authorID: ID!){
    addBook(
        name: $name,
        genre: $genre,
        authorID: $authorID
    ){
        id
        name
        genre
    }
}
`