import { format } from 'date-fns'
import Select from 'react-dropdown-select'

import { CaseStatusOptions } from '../../common/constants'

import styles from './CaseRow.module.scss'

const CaseRow = ({
  id,
  created,
  age,
  isStatusUpdating,
  status,
  onSelect
}) => (
  <tr className={styles.caseRow}>
    <td>{id}</td>
    <td>{format(created, 'dd/MM/yy')}</td>
    <td>{age}</td>
    <td>
      <Select
        multi={false}
        options={CaseStatusOptions}
        loading={isStatusUpdating}
        disabled={isStatusUpdating}
        searchable={false}
        values={[CaseStatusOptions.find(({ value }) => value === status)]}
        onChange={(values) => {
          onSelect(id, values[0].value)
        }}
      />
    </td>
  </tr>
)

export default CaseRow
