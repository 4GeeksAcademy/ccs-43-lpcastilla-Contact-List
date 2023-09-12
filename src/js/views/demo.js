import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5">
			<h1 className="text-center">Add a new contact</h1>
			<form>
				<div className="mb-3">
					<label for="fullname" className="form-label">Full name</label>
					<input 
						type="name" 
						className="form-control" 
						id="fullname" 
						placeholder="Enter full name"
					/>
				</div>
				<div className="mb-3">
					<label for="email" className="form-label">Email</label>
					<input 
						type="email" 
						className="form-control" 
						id="email"
						placeholder="Enter email"
					/>
				</div>
				<div className="mb-3">
					<label for="phone" className="form-label">Phone</label>
					<input 
						type="phone" 
						className="form-control" 
						id="phone"
						placeholder="Enter phone"
					/>
				</div>
				<div className="mb-3">
					<label for="address" className="form-label">Address</label>
					<input 
						type="address" 
						className="form-control" 
						id="address"
						placeholder="Enter address"
					/>
				</div>
				<button type="submit" className="btn btn-primary" style={{width:"100%"}}>Save</button>
			</form>
			<br />
			<Link to="/">
				<a className="link">Get back to contacts</a>
			</Link>
		</div>
	);
};
