const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on 3000')
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index.ejs', { id: 1 })
  })

app.get('/hello', (req, res) => {
  res.json({ value : 'loaded' })
  console.log('Hurray!!!');
})

app.post('/getData', (req, res) => {
  console.log(req.body);
})
