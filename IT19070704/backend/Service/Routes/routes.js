import express from 'express';
import { CreateVehicle,getAllvehicles ,getAllProductsInVehicle,calculatedeliveryCharges} from '../Controllers/Controller.vehicle.js';
import { CreateProduct,getAllProducts} from '../Controllers/Controller.product.js'

const router = express.Router();


router.post('/createVehicle', CreateVehicle);
router.get('/get', getAllvehicles);
router.get('/getAllProductsInVehicle/:id', getAllProductsInVehicle);
router.post('/rent', calculatedeliveryCharges);



router.post('/CreateProduct', CreateProduct);
router.get('/',getAllProducts);

export default router;