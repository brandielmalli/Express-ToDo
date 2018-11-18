const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://demotodo:abc123@ds211694.mlab.com:11694/demotodo', (err, database) => {

  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/word', (req, res) => {
  if (!req.body.word) return res.redirect('/')
  db.collection('word').save({word:req.body.word }, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.get('/', (req, res) => {
  db.collection('word').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {tasks: result})
  })
})

app.put('/tasks', (req, res) => {
  db.collection('word')
  .findOneAndUpdate({word: req.body.prevWord }, {
    $set: {
      word:req.body.newWord
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})


app.delete('/delete', (req, res) => {
  db.collection('word').findOneAndDelete({word: req.body.word }, (err, result) => {
    if (err) return res.send(500, err)
    console.log('deleted')
    res.send('Message deleted!')
  })
})
