import { BellIcon, SettingIcon, UserIcon } from 'assets/svgs'
import styles from './userBar.module.scss'

const UserBar = () => {
  return (
    <div className={styles.userBar}>
      <BellIcon className={styles.bell} />
      <SettingIcon className={styles.setting} />
      <div className={styles.user}>
        <UserIcon />
        <span>3Bí ë</span>
      </div>
    </div>
  )
}

export default UserBar
