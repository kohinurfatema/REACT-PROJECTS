import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../utility/addToDB'
import { ToastContainer, toast } from 'react-toastify';


const BookDetails = () => {
    const {id} =useParams();
    const bookId = parseInt(id);
    const data =useLoaderData();
    const singleBook=data.find(book=> book.bookId === bookId);
    const {image,bookName} = singleBook;


 const handleMarkAsRead = id => {
        //  Store with Id
        // where to store
        // array or collection
        // if book already exist  the show a  alart
        //  if book not exist then push in the collection or array


        toast("Wow so easy!")
        addToStoredDB(id)
}



    return (
        <div className='w-2/3 mx-auto mt-5'>
           <img className='w-48' src={image} alt="" />
           <h1 className='text-1xl font-bold'>{bookName}</h1>

           <button onClick={()=>handleMarkAsRead(id)}  className="btn btn-active btn-accent">Mark to Read</button>
           <button className="btn btn-active btn-info m-2">Add to Wish-list</button>
        </div>
    );
};

export default BookDetails;