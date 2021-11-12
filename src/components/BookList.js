import React from 'react'

import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo'

const queryBook = gql`
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


export default graphql(queryBook)((props) => {
    let a = true;
    console.log(props)
    const renderBooks = function () {
        if (props.data.loading) {
            return <div> Loading Data....</div>
        } else {
            return props.data.books.map(book => (
                <li>{book.name}</li>
            ))
        }
    }
    return (
        <div>
            <ul>
                {renderBooks()}
            </ul>
            <div>{a.toString()}</div>
            <button onClick={(e) => { a = !a; console.log(a) }}>Change a</button>
        </div>
    )
})
