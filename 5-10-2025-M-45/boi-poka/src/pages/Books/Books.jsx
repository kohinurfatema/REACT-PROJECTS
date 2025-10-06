import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    return (
        <div>
            <h1 className='text-3xl text-center font-bold p-6'>Books</h1>
            <Suspense fallback = {<span>LOADING......</span>}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               {
                data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
               }
            </div>
            </Suspense>
            
        </div>
    );
};

export default Books;