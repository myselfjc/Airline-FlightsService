const express = require('express');
const { PORT } = require('./config/serverConfig');
const cityRoutes = require('./routes/cityRoutes');



const serverSetupAndStart = async () => {
    //Create the express object
    const app = express();

    app.use(express.json());

    //Defining the routes
    app.use('/api/v1',cityRoutes);

    

    app.listen(PORT, async () => {
        console.log(`App is running on ${PORT}`); 
    })
}

serverSetupAndStart();
