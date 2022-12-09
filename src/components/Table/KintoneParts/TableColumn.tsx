import { v4 as uuidv4 } from 'uuid'

export default function TableColumn(props: { children: React.ReactNode }) {
  return (
    <td key={uuidv4()}>
      <div className="kintoneplugin-table-td-control">
        <div className="kintoneplugin-table-td-control-value">{props.children}</div>
      </div>
    </td>
  )
}
