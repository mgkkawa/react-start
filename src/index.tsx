import React from 'react'
import ReactDOM from 'react-dom/client'
import Row from './components/Row'
import App from './App'
import Table from './components/Table'
import Text from './components/Text'
import { v4 as uuid } from 'uuid'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Table
      thead={[
        { title: '列タイトルA', key: uuid() },
        { title: '列タイトルB', key: uuid() },
        { title: '列タイトルC', key: uuid() },
      ]}
      elements={[
        { elem: <Text key={uuid()} />, key: uuid() },
        { elem: <Text key={uuid()} />, key: uuid() },
        { elem: <Text key={uuid()} />, key: uuid() },
      ]}
    />
    <Row />
    <App />
  </React.StrictMode>
)
