import React, { useState,useEffect}from 'react';
import {  Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsInVehicle from './ProductsInVehicle';
const Vehicles = () => {

	const [Vehicles, setVehicles] = useState(null);
	const [id, SetId] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:5000/app/get`)
		  .then((res) => {
			return res.json();
		  })
		  .then((data) => {
			console.log(data);
			setVehicles(data);
		  });
	}, []);
	const [show, setShow] = useState(false);
	const [Products, setProducts] = useState([]);
	const handleShow = (products,id) => {
		setShow(true);
		setProducts(products);
		SetId(id);
		
	};
	const handleClose = () => setShow(false);
	return (
		<div>
			<h4 className="Listname">Vehicle List</h4>
        <div className="List">
			<table className="table">
				<thead>
					<tr className="head">
						<th>ID</th>
						<th>Type</th>
							<th>Owner</th>
							<th>Description</th>
						<th></th>
					</tr>
				</thead>
				{Vehicles && (
					<tbody>
						{Vehicles.map((Vehicle) => {
							return (
								<tr className="rw" key={Vehicle._id}>
									<td>{Vehicle._id}</td>
									<td>{Vehicle.type}</td>
									<td>{Vehicle.owner}</td>
									<td>{Vehicle.description}</td>
									<td><button className="bttn" onClick={() => {
										handleShow(Vehicle.Products,Vehicle._id);
									}}>details</button></td>
								</tr>
							);
						})}
					</tbody>
				)}
			</table>
			<Modal className="modal" show={show} onHide={handleClose}>
				<div className="popup">
					{Products && <ProductsInVehicle id={id}/>}
				</div>
				</Modal>
				</div>
    </div>);
}
 
export default Vehicles;
