import express from 'express'
import cors from 'cors'
import { initFirebaseApp } from './firebase'
import { routes } from './routes'

initFirebaseApp()

const app = express()
const port = process.env.PORT || 3333

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log('Server is running...')
})