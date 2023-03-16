const express = require('express');
const cityController = require('../controllers/cityController');
const airplaneController = require('../controllers/airplaneController');
const flightController = require('../controllers/flightController');

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

router
    .route('/airplane/:id')
    .get(airplaneController.get)
    .patch(airplaneController.update)
    .delete(airplaneController.delete)

router
    .route('/flight')
    .post(flightController.createFlight)
    .get(flightController.getAllFlights)
                    

module.exports = router;