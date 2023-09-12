import React from "react";
import { Link } from "react-router-dom";

export const Card = () => {
	return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="card mb-3" style={{width:"82%"}}>
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src="..." className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body text-start">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                <i className="fa-solid fa-location-dot me-3"></i>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                            <p className="card-text"><i className="fa-solid fa-phone-flip me-3"></i><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            <p className="card-text"><i className="fa-solid fa-envelope me-3"></i><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card-body text-end">  
                            <i className="fa-solid fa-pen me-3"></i>
                            <i className="fa-solid fa-trash-can me-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};