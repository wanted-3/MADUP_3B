import { BellIcon, SettingIcon, UserIcon } from 'assets/svgs'
import styles from './userBar.module.scss'

const UserBar = () => {
  return (
    <header className={styles.userBar}>
      <BellIcon className={styles.bell} />
      <SettingIcon className={styles.setting} />
      <div className={styles.user}>
        <UserIcon />
        <span>3B팀 님</span>
      </div>
    </header>
  )
}

export default UserBar
