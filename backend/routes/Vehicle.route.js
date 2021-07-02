import express from 'express';
import { getAllVehicles, CreateVehicle,deleteVehicle } from '../Controller/Vehicle.controller.js';
import { getAllCategories, CreateCategories ,getAllVehiclesInCategory,calculateTripCharges} from '../Controller/category.controller.js';

const router = express.Router();

router.get('/', getAllVehicles);
router.post('/create', CreateVehicle);
router.delete('/delete/:id',deleteVehicle),


router.get('/get', getAllCategories);
router.post('/createCategory', CreateCategories);
router.get('/category/:id', getAllVehiclesInCategory);
router.post('/rent', calculateTripCharges);
export default router;

