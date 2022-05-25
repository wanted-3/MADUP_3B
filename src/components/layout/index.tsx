import { Outlet } from 'react-router-dom'

import NavBar from './Navbar'
import UserBar from './UserBar'

import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.appLayout}>
      <NavBar />
      <main className={styles.main}>
        <UserBar />
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
