import React, { useEffect, useState } from 'react';
import Doctor from '../Docotr/Doctor';

const Doctors = () => {
    const [doctors,setDoctors] = useState([]) //

    useEffect(()=>{
        fetch('./doctors.JSON')
        .then(res=>res.json())
        .then(data=>setDoctors(data));
        
    },[]);
    return (
        <div>
            <div className="ps-3">
            <h1>Doctors list</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 bg-light">
            {
                doctors.map(doctor =><Doctor
                    key={doctor.id}
                    doctor={doctor}
                ></Doctor> )
            }
            </div>
        </div>
    );
};

export default Doctors;