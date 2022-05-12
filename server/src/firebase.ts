import { initializeApp, cert } from 'firebase-admin/app'
import dotenv from 'dotenv'

dotenv.config()

export function initFirebaseApp() {
	const serviceAccount = {
		projectId: String(process.env.PROJECT_ID),
		clientEmail: String(process.env.CLIENT_EMAIL),
		privateKey: String(process.env.PRIVATE_KEY)
	}

	initializeApp({
		credential: cert(serviceAccount)
	})
}