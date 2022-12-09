export default function TableTitle(props: { title: string; key: string }) {
  return (
    <th className="kintoneplugin-table-th">
      <span className="title">{props.title}</span>
    </th>
  )
}
