import { Alert } from 'react-bootstrap'
import React, { useEffect } from 'react'

import { graphql } from 'react-apollo'
import { queryBook } from '../query/query'

const BookDetail = (props) => {

    const bookDetails = () => {
        console.log('bookDetails');
        if (props.data.loading) {
            return <Alert varian="primary"> Loading data</Alert>
        } if (props.data.error) {
            <Alert variant='warning'> {props.data.error} </Alert>
        } else {
            console.log(props)
            return <div class="card-body">
                <h5 className="card-title"> {props.data.book.name}</h5>
                <h6 className="card-subtitle text-muted">{props.data.book.author.name} - {props.data.book.genre}</h6>
                {/* <h6 className="card-subtitle text-muted">{props.data.book.genre}</h6> */}
                <div className="card-text">
                    <ul class="list-group">
                        {props.data.book.author.books.map(book => <li class="list-group-item" key={book.id}>{book.name}</li>)}
                    </ul>
                </div>
            </div>
        }
    }

    return (
        <div>
            <h2> Book details</h2>
            <div className="card" style={{ width: "18rem" }}>

                {bookDetails()}
            </div>
        </div>
    )
}

// (BookDetail)

export default graphql(queryBook, {
    options: (props) => {
        return {
            variables: {
                id: props.selected
            }
        }
    }
})(BookDetail)