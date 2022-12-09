import '../../css/51-modern-default.css'
import { OperandDropDown } from './FormParts'
import { TableRow, TableTitleRow, Textbox } from './KintoneParts'
// import { v4 as uuidv4 } from 'uuid'
export default function TestTable() {
  const TableProps = {
    titles: ['入力', '条件'],
    childrens: [<Textbox />, <OperandDropDown />]
  }

  return (
    <table className="kintoneplugin-table">
      <TableTitleRow titles={TableProps.titles} />
      <tbody id="table-body">
        <TableRow childrens={TableProps.childrens} />
      </tbody>
    </table>
  )
}
