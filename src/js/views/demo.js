import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { actions } = useContext(Context);

	const [newContactData, setNewContactData] = useState({
		full_name: "",
		email: "",
		agenda_slug: "leonardo_agenda",
		address: "",
		phone: "",
	});

	const handleSubmit = async (event) => {
		event.preventDefault(); 

		await actions.newContact(newContactData);

		setNewContactData({
			full_name: "",
			email: "",
			agenda_slug: "leonardo_agenda",
			address: "",
			phone: "",
		});
	};

	console.log(newContactData)

	return (
		<div className="container mt-5">
			<h1 className="text-center">Add a new contact</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="fullname" className="form-label">Full name</label>
					<input 
						type="name" 
						className="form-control" 
						id="fullname" 
						value={newContactData.full_name}
						onChange={(event) =>
							setNewContactData({
								...newContactData,
								full_name: event.target.value,
							})
						}
						placeholder="Enter full name"
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">Email</label>
					<input 
						type="email" 
						className="form-control" 
						id="email"
						value={newContactData.email}
						onChange={(event) =>
							setNewContactData({
								...newContactData,
								email: event.target.value,
							})
						}
						placeholder="Enter email"
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="phone" className="form-label">Phone</label>
					<input 
						type="number" 
						className="form-control" 
						id="phone"
						value={newContactData.phone}
						onChange={(event) =>
							setNewContactData({
								...newContactData,
								phone: event.target.value,
							})
						}
						placeholder="Enter phone"
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="address" className="form-label">Address</label>
					<input 
						type="name" 
						className="form-control" 
						id="address"
						value={newContactData.address}
						onChange={(event) =>
							setNewContactData({
								...newContactData,
								address: event.target.value,
							})
						}
						placeholder="Enter address"
						required
					/>
				</div>
				<button 
					type="submit" 
					className="btn btn-primary" 
					style={{width:"100%"}}
					>Save
				</button>
			</form>
			<br />
			<Link to="/">
				<div className="link">Get back to contacts</div>
			</Link>
		</div>
	);
};
