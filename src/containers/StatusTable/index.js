import { useRecoilValue } from 'recoil'

import { StatusCell, ActiveCasesStatusCell } from '../../components'
import {
  getTotalCases,
  getAddedToday,
  getRecoveredCount,
  getDeathsCount,
  getMildCasesCount,
  getSevereCasesCount
} from '../../state/CaseState'

import styles from './StatusTable.module.scss'
import totalCasesIcon from '../../assets/total-cases.png'
import addedTodayIcon from '../../assets/added-today.png'
import totalRecoveredIcon from '../../assets/total-recovered.png'
import totalDeadIcon from '../../assets/total-dead.png'

const StatusTable = () => (
  <div className={styles.table}>
    <StatusCell infoTitle='Total Cases' infoNumber={useRecoilValue(getTotalCases)} img={totalCasesIcon} />
    <StatusCell infoTitle='Added Today' infoNumber={useRecoilValue(getAddedToday)} img={addedTodayIcon} />
    <StatusCell infoTitle='Total Recovered' infoNumber={useRecoilValue(getRecoveredCount)} img={totalRecoveredIcon} />
    <StatusCell infoTitle='Total Deaths' infoNumber={useRecoilValue(getDeathsCount)} img={totalDeadIcon}/>
    <ActiveCasesStatusCell mildCases={useRecoilValue(getMildCasesCount)} severeCases={useRecoilValue(getSevereCasesCount)} />
  </div>
)

export default StatusTable
