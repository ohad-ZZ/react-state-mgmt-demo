import classNames from 'classnames'

import styles from './ActiveStatusCell.module.scss'
import coughLogo from '../../assets/cough-covid.png'

const ActiveStatusCell = ({
  severeCases = 0,
  mildCases = 0
}) => (
  <div className={styles.cell}>
    <h3 className={styles.cell__title}>Active Cases</h3>
    <strong className={styles.cell__info}>{severeCases + mildCases}</strong>
    <img src={coughLogo} width='40' />
    <span className={classNames(styles.cell__breakdown, styles['cell__breakdown--severe'])}>Severe: {severeCases}</span>
    <span className={classNames(styles.cell__breakdown, styles['cell__breakdown--mild'])}>Mild: {mildCases}</span>
  </div>
)

export default ActiveStatusCell
