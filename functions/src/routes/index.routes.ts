import express, {Request, Response} from 'express'
import userController from '../controllers/user.controller'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

router.post('/login', async (req: Request, res: Response) => {
  try {
    const result = await userController.login(req.body)
    res.json(result)
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json(err.message)
    }
  }
})

export default router
