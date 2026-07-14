const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())

mongoose.connect("mongodb://irfanmhdm:irfanmhdm@ac-vmvxcwg-shard-00-00.wegbt74.mongodb.net:27017,ac-vmvxcwg-shard-00-01.wegbt74.mongodb.net:27017,ac-vmvxcwg-shard-00-02.wegbt74.mongodb.net:27017/?ssl=true&replicaSet=atlas-ddqrpe-shard-0&authSource=admin&appName=Cluster0")
    .then(() => {

        console.log("Mongo Connected")


    }).catch((error) => {
        console.log(error)
    })

const Nss = mongoose.model("Nss", new mongoose.Schema(

    {
        volunteer_id: String,
        full_name: String,
        email: String,
        phone: String,
        date_of_birth: String,
        gender: String,
        blood_group: String,
        department: String,
        year_of_study: String,
        camp_name: String,
        hours_completed: String,
        address: String,
        unit_number: String
    }
))

app.post("/add-nss", async (req, res) => {

    await Nss.create(req.body)
    res.json({ "status": "success" })


})

app.get("/view_nss", async (req, res) => {

    const nss = await Nss.find()
    res.json(entry)
})

app.listen(3000, () => {

    console.log("Server Started")
})