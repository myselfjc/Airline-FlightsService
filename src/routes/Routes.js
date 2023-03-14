const express = require('express');
const cityController = require('../controllers/cityController');
const airplaneController = require('../controllers/airplaneController');

const router = express.Router();

router
    .route('/city')
    .post(cityController.create)
    .get(cityController.getAllCities);

router
    .route('/city/:id')
    .get(cityController.getCity)
    .patch(cityController.update)
    .delete(cityController.delete)

router
    .route('/airplane')
    .post(airplaneController.create);
                    

module.exports = router;