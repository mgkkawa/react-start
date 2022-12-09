export default function Span(props: { className: string; text?: string } = { className: '' }) {
  return <span className={props.className}>{props.text ? props.text : ''}</span>
}
