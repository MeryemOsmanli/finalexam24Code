import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
const app = express()
app.use(cors())
app.use(express.json())

const MeryexamSchema = new mongoose.Schema({
  title: String,
  image: String,
  price: Number,
});
const ExamModel = mongoose.model('ExamModel', MeryexamSchema);

app.get('/meryem/', async (req, res) =>{
    const getAll= await ExamModel.find()
  res.send(getAll)
})
app.get('/meryem/:id', async (req, res) =>{
    const {id}=req.params
    const getById= await ExamModel.findById(id)
  res.send(getById)
})
app.post('/meryem/', async (req, res) =>{
    const obj = req.body
    const getAdd= new ExamModel(obj)
    getAdd.save()
  res.send(getAdd)
})
app.delete('/meryem/:id', async (req, res) =>{
    const {id}=req.params
    const getDelete= await ExamModel.findByIdAndDelete(id)
  res.send(getDelete)
})
mongoose.connect('mongodb+srv://meryemosmanova24:meryemosmanova24@codem.0uejvk1.mongodb.net/')
  .then(() => console.log('Connected!'));
app.listen(3000)