import React from 'react'

const Card = (userName) => {
    console.log(userName.user,userName.year);
    return (
        <div className="card">
            <img src={userName.img} alt="Image" />
            <h1>{userName.user},{userName.year}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <button>View Profile</button>
        </div>
    )
}

export default Card
