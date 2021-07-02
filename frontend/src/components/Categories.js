import React, { useState,useEffect}from 'react';
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VehicleInCategory from './VehiclesInCategory';
const Categories = () => {

	const [categories, setCategories] = useState(null);
	const [id, SetId] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:5000/app/get`)
		  .then((res) => {
			return res.json();
		  })
		  .then((data) => {
			console.log(data);
			setCategories(data);
		  });
	}, []);
	const [show, setShow] = useState(false);
	const [Vehicles, setVehicle] = useState([]);
	const handleShow = (vehicles,id) => {
		setShow(true);
		setVehicle(vehicles);
		SetId(id);
		
	};
	const handleClose = () => setShow(false);
	return (
		<div>
			<h4 className="Listname">Category List</h4>
        <div className="List">
			<table className="table">
				<thead>
					<tr className="head">
						<th>ID</th>
						<th>code</th>
						<th>Name</th>
						<th></th>
					</tr>
				</thead>
				{categories && (
					<tbody>
						{categories.map((category) => {
							return (
								<tr className="rw" key={category._id}>
									<td>{category._id}</td>
									<td>{category.Name}</td>
									<td>{category.rent}</td>
									<td><button className="bttn" onClick={() => {
										handleShow(category.Vehicles,category._id);
									}}>details</button></td>
								</tr>
							);
						})}
					</tbody>
				)}
			</table>
			<Modal className="modal" show={show} onHide={handleClose}>
				<div className="popup">
					{Vehicles && <VehicleInCategory id={id}/>}
				</div>
				</Modal>
				</div>
    </div>);
}
 
export default Categories;

const posts = [
	{ id: 1, name: "React", description: "Best UI library" },
	{ id: 2, name: "Node", description: "Server side JS" },
];