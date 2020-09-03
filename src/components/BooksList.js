import React, {useState, useEffect} from "react";
import axios from 'axios';

const BooksList = ({ openModalWithItem, editModal }) => {

    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const url = 'https://tranquil-dawn-84507.herokuapp.com/api/books';
        const response = await axios.get(url);
        setBooks(response.data.books);
    }

    useEffect(() => {
        getBooks();
    }, [books])

    return (
        <div className="row background">
            <h1 className="container text-center mt-4 header-title">My favorite books</h1>
            {books.map((book) => (
                <div
                className="container pt-5 mt-3 d-flex justify-content-center"
                key={book._id}
                >
                    <h5 
                    className="title text-center"
                    onClick={ () => openModalWithItem(book)} 
                    >{book.title}</h5>
                          
                    <h2
                        className="ml-5 button-title"
                        data-toggle="modal"  
                        onClick={ () => editModal(book)}
                    >EDIT</h2>
                </div>
            ))}
        </div>
    );
};

export default BooksList;
