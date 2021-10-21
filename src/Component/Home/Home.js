import React, { useEffect, useState } from 'react';
import { Accordion, Card, CardGroup, Carousel } from 'react-bootstrap';
import './Home.css'
import Services from '../Services/Services';

const Home = () => {

    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('./services.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data));
        
    },[]);
    console.log(services);
    return (
        <div>
             {/* <img src={banner} alt="" className="w-100 banner-img"/> */}
            <div className="">
            <Carousel>
  <Carousel.Item className="img-fluid">
    <img
      className="d-block carousel-img-style px-3"
      src="https://asianvivekanand.com/wp-content/uploads/2019/07/Slider3-Asian-Vivekanand.jpg"
      alt=""
    />
    <Carousel.Caption>
      <h3>Best services with digital labs</h3>
      <p>We ensure your the best services with digital machineries, labs, equipments.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carousel-img-style px-3"
      src="https://www.kochi-u.ac.jp/kms/images/facilities/hospital/slider-1.png"
      alt="Second slide"
    />

    <Carousel.Caption >
      <h3 className= "text-black">We keep our service more clean then your expectation</h3>
      <p className= "text-black">The best cleanest services, hostilities we provide.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carousel-img-style px-3"
      src="https://www.americanpatient.org/wp-content/uploads/2019/12/Strong-Memorial-Hospital-nighttime.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>We are always available to serve you</h3>
      <p>We are a 24X7 basis hospitality provider. Doctors are always available beside you.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>
          <div className="pt-5 px-3 text-success">
            <h1>Services at a glance</h1>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4 bg-light">
          {
                services.map(service => <Services
                    key={service.id}
                    service={service}
                ></Services> )
            }
          </div>
            <div className="pt-5">
            <div className="d-flex justify-content-evenly">
                    <h1 className="p-5 bg-success text-light rounded-3 w-25">INDOOR CARE</h1>
                    <h1 className="p-5 bg-success text-light rounded-3 w-25">OUTDOOR CARE</h1>
                    <h1 className="p-5 bg-success text-light rounded-3 w-25">ONLINE APPOINTMENT</h1>
                </div>
                <div className="d-flex justify-content-evenly pt-5">
                    <h1 className="p-5 bg-success text-light rounded-3 w-25">VACCINE REGISTRATION</h1>
                    <h1 className="p-5 bg-success text-light rounded-3 w-25">MEDICINE CORNER</h1>
                    <h1 className="p-5 bg-success text-light rounded-3 w-25">24X7 SERVICES</h1>
                </div>
                <div className="d-flex pt-5 justify-content-evenly">
              <h1 className="w-50 ms-5 ps-5">Why choose us?</h1>
              <div className="w-50 px-5 mx-5">
              <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Experiences since 2000</Accordion.Header>
    <Accordion.Body>
    We are the most prestigious, renowned and well reputed hospital service provider since 2000, hence we have a lot of experiences in this sector.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What procedures will I have in the Emergency Department?
</Accordion.Header>
    <Accordion.Body>
    Treatments and procedures may include lab work, radiological studies, CAT scans, ultrasound, EKG for cardiac review, medication administration and physician evaluations.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>When will I see a physician?
</Accordion.Header>
    <Accordion.Body>
    All patients are first triaged by an ER nurse. Then patients are evaluated by a physician. Patients who have a higher acuity of illness (i.e. heart attack or stroke) may be treated before those patients with less severe conditions (laceration, sprained ankle, etc.). Your patience is always appreciated.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>How is the Emergency Department staffed?
</Accordion.Header>
    <Accordion.Body>
    The department is staffed with emergency medicine physicians and nurses, physician assistants, technicians, CNAs and unit coordinators along with specialists from the laboratory, cardiology, respiratory and radiology departments.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
              </div>
            </div>
            <div className="d-flex justify-content-evenly align-items-center py-4 mt-5 bg-secondary">
                <div className="w-25 text-white">
                    <h3>HEALTH CARE SERVICES</h3>
                </div>
                <div className="w-50 text-white"><p>HEALTH CARE SERVICES is a General hospital located in Rampura, Dhaka, Bangladesh. It has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in IT through paperless medical records. The skilled nurses, technologists and administrators of Health Care Hospital aided by state-of-the-art equipments, provide a congenial infrastructure for the medical professionals in providing better care of international standards.</p></div>
            </div>
          </div>
        </div>
    );
};

export default Home;