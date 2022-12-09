export default function Tbody(props: { className: string; child?: React.ReactNode } = { className: '' }) {
  return <tbody className={props.className}>{props.child ? props.child : ''}</tbody>
}
