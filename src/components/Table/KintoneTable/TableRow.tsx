import { v4 as uuidv4 } from 'uuid'
import { TableButtons } from '../KintoneParts'
import { TableRowProps } from '../props'
import TableColumn from '../KintoneParts/TableColumn'

export default function TableRow(props: TableRowProps) {
  const rowId = uuidv4()
  return (
    <tr key={rowId}>
      {props.childrens.map(children => (
        <TableColumn children={children} key={uuidv4()} />
      ))}
      {<TableButtons bodyId="table-body" rowId={rowId} />}
    </tr>
  )
}
