import { gql } from 'apollo-boost';

export const queryAuthors = gql`
    {
        authors {
            id
            name
        }
    }
`

export const queryBooks = gql`
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

export const queryBook = gql`
query($id: ID!){
    book(id: $id){
      id
      name
      genre
      author{
        id
        name
        age
        books{
            id
            name
        }
      }
    }
  }
`


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