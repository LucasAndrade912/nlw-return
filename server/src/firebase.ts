import { initializeApp, cert } from 'firebase-admin/app'
import dotenv from 'dotenv'

dotenv.config()

export function initFirebaseApp() {
	const serviceAccount = {
		projectId: process.env.PROJECT_ID,
		clientEmail: process.env.CLIENT_EMAIL,
		privateKey: process.env.PRIVATE_KEY
	}

	initializeApp({
		credential: cert(serviceAccount)
	})
}