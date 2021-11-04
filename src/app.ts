import express, { Request, Response, NextFunction } from 'express'
import { config } from './config'

const app = express()

app.get('/', (req:Request, res:Response, next:NextFunction) => {
  res.status(200).json({message: 'Root route'})
})

app.listen(config.server.PORT, () => {
  console.log(`App listening on port ${config.server.PORT}`)
})