import { useSelector } from 'react-redux'

import { StatusCell, ActiveCasesStatusCell } from '../../components'
import {
  getTotalCases,
  getAddedToday,
  getRecoveredCount,
  getDeathsCount,
  getMildCasesCount,
  getSevereCasesCount
} from '../../redux/selectors'

import styles from './StatusTable.module.scss'
import totalCasesIcon from '../../assets/total-cases.png'
import addedTodayIcon from '../../assets/added-today.png'
import totalRecoveredIcon from '../../assets/total-recovered.png'
import totalDeadIcon from '../../assets/total-dead.png'

const StatusTable = () => (
  <div className={styles.table}>
    <StatusCell infoTitle='Total Cases' infoNumber={useSelector(getTotalCases)} img={totalCasesIcon} />
    <StatusCell infoTitle='Added Today' infoNumber={useSelector(getAddedToday)} img={addedTodayIcon} />
    <StatusCell infoTitle='Total Recovered' infoNumber={useSelector(getRecoveredCount)} img={totalRecoveredIcon} />
    <StatusCell infoTitle='Total Deaths' infoNumber={useSelector(getDeathsCount)} img={totalDeadIcon}/>
    <ActiveCasesStatusCell mildCases={useSelector(getMildCasesCount)} severeCases={useSelector(getSevereCasesCount)} />
  </div>
)

export default StatusTable
