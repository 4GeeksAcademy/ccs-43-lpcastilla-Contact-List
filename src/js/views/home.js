import React from "react";
import "../../styles/home.css";
import { Card }  from "../component/card"
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-3">
		<div className="container d-flex justify-content-end mb-4" style={{width:"82%"}}>
			<Link to="/demo">
				<button className="btn btn-success">Add new contact</button>
			</Link>
		</div>
		<Card />
		
	</div>
);
