const express = require("express")
let router = express.Router()
const db = require("../db/index.js") 
const { stakeSchema } = require("../schema/stakeType.js")
const database = new db.Database()


const validPayload = (req,res,next) => { // middleware checking payload
    const {error} = stakeSchema.validate(req.body)
    if(error){
        console.log(error)
        res.status(400).json({error})
        return
    }

    next()
}

router.get('/token/:address', async (req,res) => {
    try{
        let address = req.params.address
        let response = await database.getAll(address)
        const modResponse = response.map( ({ Data }) => { return { ...JSON.parse(Data) }} )
        res.status(200).json(modResponse)
    }catch(err){
        res.status(500).json({err})
    }
})

router.post('/token/', validPayload, async (req,res) => {
    try{
        const data = req.body
        const {address} = data
        await database.addRow(data)
        let response = await database.getAll(address)
        const modResponse = response.map( ({ Data }) => { return { ...JSON.parse(Data) }} )
        res.status(200).json(modResponse)
    }catch(err){
        console.log(err)
        res.status(500).json({err})
    }
})

router.delete('/token/:id', async (req,res) => {
    try{
        let id = req.params.id
        await database.deleteRow(id)
        res.status(200).json({status:200})
    }catch(err){
        res.status(500).json({err})
    }
})

module.exports = router