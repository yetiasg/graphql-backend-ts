import express, { Request, Response, NextFunction } from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './graphql/schema'
import { resolvers } from './graphql/resolvers'
import { connect } from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import { config } from './config'

const app = express()
app.use(express.json())
app.use(cors({origin: '*'}))
app.use(morgan('dev'))
// app.use(helmet())

app.get('/', (req:Request, res:Response, next:NextFunction) => {
  res.status(200).json({message: 'Root route'})
})

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}))

connect('mongodb://localhost:27017').then(() => {
  app.listen(config.server.PORT, () => {
    console.log(`App listening on port ${config.server.PORT}`)
  })
}).catch(err => console.log(err))

