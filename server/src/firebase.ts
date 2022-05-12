import { initializeApp, cert } from 'firebase-admin/app'

export function initFirebaseApp() {
	const serviceAccount = require('../serviceAccountKey.json')

	initializeApp({
		credential: cert(serviceAccount)
	})
}