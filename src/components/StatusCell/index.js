import styles from './StatusCell.module.scss'

const StatusCell = ({ infoTitle, infoNumber, img }) => (
  <div className={styles.cell}>
    <h3 className={styles.cell__title}>{infoTitle}</h3>
    <strong className={styles.cell__info}>{infoNumber}</strong>
    <img src={img} width='50'/>
  </div>
)

export default StatusCell
