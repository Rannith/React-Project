import React from 'react'

//Sample for list and keys

function BookList() {
    const books = [
        {
            id : 1,
            booknamne : 'Wings of Fire',
            author : 'APJ Abdul Kalam',
            yearofpublishing : 1999
        },
        {
            id : 2,
            booknamne : 'Ulysses',
            author : 'James joyce',
            yearofpublishing : 2000
        },
        {
            id : 3,
            booknamne : 'War and Peace',
            author : 'Leo Tolstoy',
            yearofpublishing : 2005
        }
    ]
    const bookList = books.map(book => (
        <h4 key={book.id}>
            Id : {book.id}<br></br>
            Book Name : {book.booknamne}<br></br>
            Author : {book.author}<br></br>
            Publishing Year : {book.yearofpublishing}<br></br>
        </h4>
    ))

    return <div>{bookList}</div>
}

export default BookList

