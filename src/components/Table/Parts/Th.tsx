export default function Th(props: { className: string; child?: React.ReactNode } = { className: '' }) {
  return <th className={props.className}>{props.child ? props.child : ''}</th>
}
