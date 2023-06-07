const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Anime Site</title>
        <link rel="icon" href="https://i.imgur.com/hOe8dW4.png" type="image/x-icon"/>
        <style>
        ul {
            padding: 10px;
        }
        li {
            font-size: 25px;
        }
        a {
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        </style>
    </head>
    <body style="text-align: center;">
        <h1 style="text-align: center;">My Anime Site</h1>
        <h3>This Home Page Is Fully Functional</h3><br>
        <h5>Use the links below to navigate to the other routes</h5><br>
            <ul style="display: flex; justify-content: space-around; color: white; background-color: rgba(0,0,0,.7);">
                <li style="display: inline;"><a style="color: white;" href="#">Home Page</a></li>
                <li style="display: inline;"><a style="color: white;" href="#">About Us Page</a></li>
                <li style="display: inline;"><a style="color: white;" href="#">Contact Us Page</a></li>
            </ul><br>
            <img style="max-width: 100%;" src="https://i.imgur.com/oEmKxSt.jpg">
    </body>
    </html>`)
})




app.listen(3000, () => {
    console.log("Html Site listening on port 3000")
})