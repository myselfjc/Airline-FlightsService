const express = require('express');
const { PORT } = require('./config/serverConfig');
const Routes = require('./routes/Routes');

const db = require('./models/index');
const {City,Airport} = require('./models/index');

const serverSetupAndStart = async () => {
    //Create the express object
    const app = express();

    app.use(express.json());

    //Defining the routes
    app.use('/api/v1',Routes);

    

    app.listen(PORT, async () => {
        console.log(`App is running on ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        } 
    })
}

serverSetupAndStart();
