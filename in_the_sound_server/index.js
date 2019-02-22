const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

//middleware
app.use(cors());
app.use(express.urlencoded({extended: false}))


//controllers
app.use('/years', require('./controllers/years'));



//catch all route
app.get('*', (req, res ) =>{
	res.status(404).send({message: 'Not Found'});
})



app.listen(process.env.PORT || 3000, () => {
	console.log('api is up and running')
});