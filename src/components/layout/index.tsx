import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import styles from './layout.module.scss'
import { BellIcon, SettingIcon, UserIcon } from 'assets/svgs'

const Layout = () => {
  return (
    <div className={styles.appLayout}>
      <Navbar />
      <main className={styles.main}>
        <header className={styles.header}>
          <BellIcon className={styles.bell} />
          <SettingIcon className={styles.setting} />
          <div className={styles.user}>
            <UserIcon />
            <span>3B팀 님</span>
          </div>
        </header>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
