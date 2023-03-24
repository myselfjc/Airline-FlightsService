const express = require('express');
const cityController = require('../controllers/cityController');
const airplaneController = require('../controllers/airplaneController');
const flightController = require('../controllers/flightController');
const airportController = require('../controllers/airportController');
const {flightMiddleware} = require('../middlewares/index');

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
    .post(flightMiddleware.validateCreateFlight,flightController.createFlight)
    .get(flightController.getAllFlights)

router
    .route('/flight/:id')
    .get(flightController.getFlight)
    .patch(flightController.updateFlight)


router
    .route('/airport')
    .post(airportController.createAirport)
                    

module.exports = router;