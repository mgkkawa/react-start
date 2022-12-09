import { TableBlankSpace, TableTitle } from '../KintoneParts'
import { TableTitleProps } from '../props'
import { v4 as uuidv4 } from 'uuid'

export default function TableTitleRow(props: TableTitleProps) {
  return (
    <thead>
      <tr>
        {props.titles.map((title, index) => {
          return <TableTitle title={title} key={uuidv4()} />
        })}
        {<TableBlankSpace />}
      </tr>
    </thead>
  )
}
