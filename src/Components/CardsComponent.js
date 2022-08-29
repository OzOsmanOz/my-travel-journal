import React from "react";
import '../styles/CardsComponent.css'

function CardsComponent (props) {
    return (
        <div className="cards-component container my-5">
            <div className="row">
                <div className="cards-component-img col-4 ">
                    <img src={props.img} alt="" className="img-fluid rounded-2"/>
                </div>
                <div className="cards-component-text col-8 text-start ">
                <i class="fa-solid fa-location-dot text-danger me-2 mt-5"></i> <span className="me-4">{props.placeName} </span><a href={props.placeMap} target="_blank" rel="noopener noreferrer" className="text-secondary fs-6">View on Google Maps</a>
                <h1 className="fw-bold mb-4 mt-1">{props.title}</h1>
                <p className="fw-bold mt-5">{props.date}</p>
                <p className="lead fs-6">{props.description}</p>
                </div>
            </div>
            {/* <div className="row my-3">
                <div className="cards-component-img col-4">
                    <img src="images/opera-house.jpg" alt="" className="img-fluid rounded-2"/>
                </div>
                <div className="cards-component-text col-8 text-start ">
                <i class="fa-solid fa-location-dot text-danger me-2 mt-5"></i> <span className="me-4">AUSTRALIA</span><a href="https://www.google.com/maps/place/Fuji+Da%C4%9F%C4%B1/@35.3606237,138.7098538,14z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634" className="text-secondary fs-6">View on Google Maps</a>
                <h1 className="fw-bold mb-4 mt-1">Sydney Opera House</h1>
                <p className="fw-bold mt-5">27 May, 2021 - 8 Jun, 2021</p>
                <p className="lead fs-6">{props.text2}</p>
                </div>
            </div>
            <div className="row">
                <div className="cards-component-img col-4 ">
                    <img src="images/geirangerfjord.jpg" alt="" className="img-fluid rounded-2"/>
                </div>
                <div className="cards-component-text col-8 text-start ">
                <i class="fa-solid fa-location-dot text-danger me-2 mt-5"></i> <span className="me-4">NORWAY</span><a href="https://www.google.com/maps/place/Fuji+Da%C4%9F%C4%B1/@35.3606237,138.7098538,14z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634" className="text-secondary fs-6">View on Google Maps</a>
                <h1 className="fw-bold mb-4 mt-1">Geirangerfjord</h1>
                <p className="fw-bold mt-5">01 Oct, 2021 - 18 Nov, 2021</p>
                <p className="lead fs-6">{props.text3}</p>
                </div>
            </div> */}
        </div>
    )
}
export default CardsComponent;