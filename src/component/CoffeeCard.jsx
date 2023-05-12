import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, handleDeleteCoffee }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between p-8 w-full">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn">Edit</button>
                        </Link>
                        <button onClick={() => handleDeleteCoffee(_id)} className="btn bg-red-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;