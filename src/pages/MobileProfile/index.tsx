import styles from './styles.module.scss'
import CircularProgress from './ui/CircularProgress/CircularProgress'

export const MobileProfile = () => {
  return (
    <div className={styles.section}>
      <CircularProgress value={75} max={100} />
    </div>
  )
}