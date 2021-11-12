import React from 'react'

import { graphql } from 'react-apollo'
import { queryBook } from '../query/query';


export default graphql(queryBook)((props) => {
    let a = true;
    console.log(props)
    const renderBooks = function () {
        console.log(props)
        if (props.data.loading) {
            return <div> Loading Data....</div>
        } else {
            return props.data.books.map(book => (
                <li key={book.id}>
                    {book.name}
                </li>
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
