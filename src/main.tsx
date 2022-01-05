import React from 'react'
import { render } from 'react-dom'
import App from '@/src/App'

const plugin = document.getElementById('plugin') as HTMLElement

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  plugin
)
