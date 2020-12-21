import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CasesTable, StatusTable, AddCaseForm } from './containers'
import { getData } from './redux/actions'
import { getIsLoadingData } from './redux/selectors'

import styles from './App.module.scss'

function App() {
  const dispatch = useDispatch()
  const isLoadingData = useSelector(getIsLoadingData)

  useEffect(() => {
      dispatch(getData())
  }, [dispatch])

  return (
    <div className={styles.App}>
      <h1 className={styles.App__header}>Covid 19 Status</h1>
      {
        isLoadingData
          ? <span>Loading . . .</span>
          : (
            <div className={styles.App__table}>
              <StatusTable />
            </div>
          )
      }
      <div className={styles.App__casesTable}>
        <CasesTable />
      </div>
      <AddCaseForm />
    </div>
  )
}

export default App
