const express = require('express');
const cityController = require('../controllers/cityController');

const router = express.Router();

router.route('/city').post(cityController.create);
router
    .route('/city/:id')
    .get(cityController.getCity)
    .patch(cityController.update)
    .delete(cityController.delete)
                    

module.exports = router;