import * as React from 'react'
import { useRecoilValue } from 'recoil'

import { StatusTable, CasesTable, AddCaseForm } from './containers'
import { isLoadingCasesAtom } from './state/AppState'
import { useLoadCases } from './state/hooks'

import styles from './App.module.scss'

function App() {
  const getCases = useLoadCases()
  const isLoadingCasesData = useRecoilValue(isLoadingCasesAtom)
  console.log(isLoadingCasesData)
  React.useEffect(() => {
    getCases()
  }, [getCases])

  return (
    <div className={styles.App}>
      <h1 className={styles.App__header}>Covid 19 Status</h1>
      {
        isLoadingCasesData
          ? <div>Loading...</div> : (
            <>
              <div className={styles.App__table}>
                <StatusTable />
              </div>
              <div className={styles.App__casesTable}>
                <CasesTable />
              </div>
              <AddCaseForm />
            </>
          )
      }
    </div>
  )
}

export default App
