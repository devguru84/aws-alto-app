import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Authenticator } from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify'
import awsconfig from '../aws-config.json'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(awsconfig)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
)
