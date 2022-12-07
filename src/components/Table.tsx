import React from 'react'

interface TableProps {
  thead: { title: string; key: string }[]
  elements: { elem: any; value?: string; key: string }[]
}

function Table(props: TableProps) {
  const getTableTitle = (title: string) => {
    return (
      <th className="kintoneplugin-table-th">
        <span className="title">{title}</span>
      </th>
    )
  }

  const getTableControl = (elem: any) => {
    return (
      <td>
        <div className="kintoneplugin-table-td-control">
          <div className="kintoneplugin-table-td-control-value">{elem}</div>
        </div>
      </td>
    )
  }

  return (
    <div>
      <table className="kintoneplugin-table">
        <thead>
          <tr>
            {props.thead.map(thead => getTableTitle(thead.title))}
            <th className="kintoneplugin-table-th-blankspace"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {props.elements.map(element => getTableControl(element))}
            <td className="kintoneplugin-table-td-operation">
              <button type="button" className="kintoneplugin-button-add-row-image" title="Add row"></button>
              <button type="button" className="kintoneplugin-button-remove-row-image" title="Delete this row"></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
