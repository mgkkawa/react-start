import React from 'react'
import ReactDOM from 'react-dom/client'
import { TestTable } from './components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <TestTable />
  </React.StrictMode>
)
