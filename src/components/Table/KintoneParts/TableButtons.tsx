import React from 'react'
import { TableDeleteButton, TableAddButton } from '.'

function TableButtons(props: { bodyId: any; rowId: any }) {
  return (
    <td className="kintoneplugin-table-td-operation">
      <TableAddButton id={props.bodyId} />
      <TableDeleteButton />
    </td>
  )
}

export default TableButtons
