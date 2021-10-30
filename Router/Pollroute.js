const router = require('express').Router()
const {PollgetController,PollpostController} = require('../Controller/Controller')
router.get('/',PollgetController)
router.post('/',PollpostController)

module.exports=router