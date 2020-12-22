import { useRecoilValue } from 'recoil'

import { getCasesOrderedByDate  } from '../../state/CaseState'
import styles from './CasesTable.module.scss'
import CaseRow from '../CaseRow'

const CasesTable = () => {
  const caseIds = useRecoilValue(getCasesOrderedByDate)

  return (
    caseIds.length > 0
      ? (
        <table className={styles.casesTable}>
          <thead>
          <tr>
            <th>ID</th>
            <th>Discovered Date</th>
            <th>Age</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
          { caseIds.map((id) => <CaseRow key={id} id={id} />) }
          </tbody>
        </table>
      )
      : null
  )
}

export default CasesTable
