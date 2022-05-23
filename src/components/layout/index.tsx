import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.appLayout}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
