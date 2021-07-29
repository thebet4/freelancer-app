import { NextApiResponse, NextApiRequest } from 'next'
import connect from '../../utils/database'

interface IErrorResponse {
  error: string
}

interface IUserAddress {
  country: string
  state: string
  city: string
  street: string
  number: number
  extra: string
}

interface ISuccessResponse {
  _id: string
  name: string
  email: string
  cellphone: string
  skills: string[]
  address: IUserAddress
}

const user = async (
  req: NextApiRequest,
  res: NextApiResponse<IErrorResponse | ISuccessResponse>
): Promise<void> => {
  if (req.method === 'POST') {
    const { name, email, cellphone, skills, address } = req.body

    if (!name || !email || !cellphone || !skills || !address) {
      res
        .status(400)
        .json({ error: 'All params are required missing a body param' })
      return
    }

    const { db } = await connect()

    const response = await db.collection('users').insertOne({
      name,
      email,
      cellphone,
      skills,
      address,
      review: 0
    })

    res.status(200).json(response.ops[0])
  } else {
    res.status(400).json({ error: 'Invalid method' })
  }
}

export default user
