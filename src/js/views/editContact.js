import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { actions } = useContext(Context);
    const { id } = useParams();
    const [contactData, setContactData] = useState({
        full_name: "",
        email: "",
        address: "",
        phone: "",
    });

    useEffect(() => {
        actions.getContactById(id)
            .then((data) => {
                setContactData(data);
            })
            .catch((error) => {
                console.log("Error al cargar los detalles del contacto:", error);
            });
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContactData({
            ...contactData,
            [name]: value,
        });
    };

    const handleSave = () => {
        actions.updateContact(id, contactData)
            .then(() => {
            })
            .catch((error) => {
                console.log("Error al guardar los cambios del contacto:", error);
            });
    };

    return (
        <div className="container mt-5">
			<h1 className="text-center">Update a new contact</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="fullname" className="form-label">Full name</label>
					<input 
                        type="text"
                        className="form-control"
                        value={contactData.full_name}
                        onChange={handleInputChange}
                    />
                </div>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">Email</label>
					<input 
						type="email" 
						className="form-control" 
						id="email"
                        value={contactData.email}
                        onChange={handleInputChange}
                    />
                </div>
				<div className="mb-3">
					<label htmlFor="phone" className="form-label">Phone</label>
					<input 
						type="number" 
						className="form-control" 
						id="phone"
                        value={contactData.phone}
                        onChange={handleInputChange}
                        />
                </div>
                <div className="mb-3">
					<label htmlFor="address" className="form-label">Address</label>
					<input 
						type="name" 
						className="form-control" 
						id="address"
                        value={contactData.address}
                        onChange={handleInputChange}
                    />
                </div>    
                <button 
                    onClick={handleSave}
                    className="btn btn-primary" 
                    style={{width:"100%"}}
                    >Guardar
                </button>
			</form>
			<br />
			<Link to="/">
				<div className="link">Get back to contacts</div>
			</Link>
        </div>
    );
};
