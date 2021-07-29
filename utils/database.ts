import { Db, MongoClient, MongoClientOptions } from 'mongodb'

interface IConnect {
  db: Db
  client: MongoClient
}

const MongoOptions: MongoClientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const client = new MongoClient(`${process.env.DATABASE_URL}`, MongoOptions)

export default async function connect(): Promise<IConnect> {
  if (!client.isConnected()) await client.connect()

  const db = client.db('Freelancer-app')
  return { db, client }
}
