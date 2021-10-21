import React from 'react';

const Doctor = (props ) => {
    const { name, designation, department, specialist, image } = props.doctor;
    return (
        <div>
            <div className="col mx-3 my-3">
          <div className="card p-2">
            <img src={image} className="card-img-top card-img" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Name: {name}</h5>
              <p className="card-text">Designation: {designation}</p>
              <p className="card-text">Department: {department}</p>
              <p className="card-text">Specialist: {specialist}</p>
              <button>Book appointment</button>
              <button className="ms-3">More details</button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Doctor;