import { initializeApp } from 'firebase/app';
import { getAnalytics, type Analytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';

const firebaseConfig = {
  // Next.js environment variables use NEXT_PUBLIC_ prefix for client-side access
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FB_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FB_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics: Analytics | null = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);

  // Initialize Performance Monitoring for automatic metrics collection
  getPerformance(app);
}

export { analytics };
export default app;
