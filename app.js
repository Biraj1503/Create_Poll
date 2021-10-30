const express = require('express')
const mongoose = require('mongoose');
const router = require('./Router/Pollroute')
const {AllgetPoll,ViewgetPoll,ViewpostPoll} = require('./Controller/Controller')
const app = express()
app.set('views engine','ejs')
app.use(express.urlencoded({extened:true}))
app.use(express.json())
const PORT = process.env.PORT || 4000
const { MongoClient } = require('mongodb');

app.use('/createpoll',router)
app.get('/allpolls',AllgetPoll)
app.get('/allpolls/:id',ViewgetPoll)
app.post('/allpolls/:id',ViewpostPoll)
app.get('/', (req,res)=>{
	res.render('home.ejs')
})

mongoose.connect('mongodb+srv://Poll:Biraj1234@cluster0.yj1c9.mongodb.net/test',
	{useNewUrlParser:true},
	()=>{
		app.listen(PORT,()=>{
		console.log(`Server is ready Now PORT ${PORT}`)
		console.log('Database is Ready Now')
	})
})
