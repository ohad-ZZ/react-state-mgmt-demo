import CaseRow from '../CaseRow'

import styles from './CasesTable.module.scss'

const CasesTable = ({
  cases,
  onCaseStatusChange,
  updatedCaseId
}) => (
  cases.length > 0
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
        {
          cases.map(({ id, status, age, created}) => (
            <CaseRow
              key={id}
              age={age}
              created={created}
              id={id}
              status={status}
              isStatusUpdating={updatedCaseId === id}
              onSelect={(id, value) => {
                if (status !== value) {
                  onCaseStatusChange(value, id)
                }
              }}
            />
          ))
        }
        </tbody>
      </table>
    )
    : null
)

export default CasesTable
