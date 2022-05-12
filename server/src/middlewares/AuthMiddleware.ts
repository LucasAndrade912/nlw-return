import { Request, Response, NextFunction } from 'express'
import { getAuth } from 'firebase-admin/auth'

export interface UserProps {
  name?: string
  email?: string
}

export interface CustomRequest extends Request {
  uid?: string
  user?: UserProps
}

export class AuthMiddleware {
  static async authenticate(req: CustomRequest, res: Response, next: NextFunction) {
    const tokenId = req.headers.authorization?.split(' ')[1]

    if (!tokenId) {
      return res.status(400).json({ error: 'Send tokenId to authenticate' })
    }

    try {
      const { uid } = await getAuth().verifyIdToken(tokenId)

      const { displayName, email } = await getAuth().getUser(uid)

      req.uid = uid
      req.user = {
        name: displayName,
        email
      }

      next()
    } catch (error) {
      console.log(error)
			return res.status(401).json({ error: 'Token is invalid' })
    }
  }
}