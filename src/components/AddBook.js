import React, { useState } from 'react'

//apollo comonent
import { graphql } from 'react-apollo'
import { queryAuthors, addBook, queryBook } from '../query/query'

import _, { flowRight as compose } from 'lodash';

function AddBook(props) {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorID, setAuthorID] = useState('');

    const getAuthors = () => {
        let options = <option key='1' value="none"> Add Author</option>
        if (props.queryAuthors.loading) {
            return [options];
        } else {
            var ret = props.queryAuthors.authors.map(author => (
                <option key={author.id} value={author.id}> {author.name}</option>
            ))
            ret.unshift(options);
            return ret
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!(_.isEmpty(authorID) || _.isEmpty(genre) || _.isEmpty(name)))
            props.addBook({
                variables: {
                    name, genre, authorID
                },
                refetchQueries: [{ query: queryBook }]
            })
    }

    return (
        <div>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }}></input>
                </div>

                <div>
                    <label>Genre</label>
                    <input type="text" value={genre} onChange={(e) => { setGenre(e.target.value) }}></input>
                </div>

                <div>
                    <label>Author</label>
                    <select onChange={(e) => { setAuthorID(e.target.value) }}>
                        {getAuthors()}
                    </select>
                </div>
                <button> Add Book</button>
            </form>
        </div>
    )
}

export default compose(
    graphql(queryAuthors, { name: 'queryAuthors' }),
    graphql(addBook, { name: 'addBook' })
)(AddBook)
