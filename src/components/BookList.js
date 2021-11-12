import React from 'react'

import { graphql } from 'react-apollo';
import { queryBooks } from '../query/query';


export default graphql(queryBooks)((props) => {
    let a = true;
    console.log(props)
    const renderBooks = function () {
        console.log(props)
        if (props.data.loading) {
            return <div> Loading Data....</div>
        } else {
            return props.data.books.map(book => (
                <li key={book.id} onClick={(e) => props.setSelected(book.id)}>
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
        </div>
    )
})
