const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Welcome To the Simpsons Server")
})

app.get("/homer", (req, res) => {
    res.send("<h1>D'oh! Where Are My Donuts?!</h1>")
})

app.get("/marge", (req, res) => {
    res.send("Homiiie, get off the couch!")
})

app.get("/bart", (req, res) => {
    res.send("Eat My Shorts")
})

app.get("/lisa", (req, res) => {
    res.send("e=mc squared")
})

app.get("/maggie", (req, res) => {
    res.send("I Just Stare At People")
})

app.get("/snowball-II", (req, res) => {
    res.send("Snowballs are being thrown, DUCK!")
})

app.get("/santas-little-helper", (req, res) => {
    res.send("I am Rudolph the red nosed reindeer!")
})

app.listen(3000, () => {
    console.log("D'oh! Listening on port 3000")
}) 