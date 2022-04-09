import express from 'express'
import bodyParser from 'body-parser'
import router from './routes'

const PORT = 3001
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

// body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Router
app.use(router)

app.listen(PORT, () => {
    console.log(`Listenning on port ${PORT}`)
})