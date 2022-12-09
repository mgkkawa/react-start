export default function Input(props: { className: string | undefined; type: string | (string & {}) | undefined }) {
  return <input className={props.className} type={props.type} />
}
