export default function Button(props: { className?: string; text?: string; title?: string }) {
  return (
    <button type="button" className={props.className} title={props.title}>
      {props.text ? props.text : ''}
    </button>
  )
}
