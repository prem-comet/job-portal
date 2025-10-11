import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import './config/instrument.js'
import * as Sentry from "@sentry/node";
import {clerkWebhooks} from './controllers/webhooks.js'

// Initialize Express
const app = express()

// Connect to Database
 await connectDB()

// Middlewares
 app.use(cors())
//  body parser middlewares
 app.use(express.json())

//  Routes
app.get('/',(req, res)=> res.send("Api Working Successfully") )

// verify sentry 
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post('/webhooks',clerkWebhooks)


// Add this after all routes,
// but before any and other error-handling middlewares are defined
Sentry.setupExpressErrorHandler(app);

// Port
const PORT = process.env.Port || 5000 

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})