export default function TableAddButton(props: { id: any }) {
  const click = (e: any) => {
    console.log(e)
  }
  return (
    <button onClick={() => click(props.id)} className="kintoneplugin-button-add-row-image" title="テーブルに行を追加" />
  )
}
