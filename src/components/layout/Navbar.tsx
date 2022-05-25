import cx from 'classnames'
import { NavLink } from 'react-router-dom'

import { AdIcon, GuideIcon, HomeIcon, LogoIcon } from 'assets/svgs'
import Dropdown from 'components/common/Dropdown'

import styles from './navBar.module.scss'

const SERVICE_MENU = ['매드업', '서비스 추가하기']

const NavBar = () => {
  return (
    <aside className={styles.navigationBar}>
      <LogoIcon className={styles.logoIcon} />
      <hr className={styles.divideLine} />
      <div className={styles.dropDown}>
        <h3>서비스</h3>
        <Dropdown>
          {SERVICE_MENU.map((item) => (
            <option key={`DropdownKey_${item}`} value={item}>
              {item}
            </option>
          ))}
        </Dropdown>
      </div>
      <div className={styles.navMenu}>
        <h3>광고 센터</h3>
        <ul className={styles.navUl}>
          <li>
            <NavLink className={({ isActive }) => cx(styles.navItem, { [styles.clicked]: isActive })} to='/'>
              <HomeIcon className={styles.navIcon} />
              대시보드
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => cx(styles.navItem, { [styles.clicked]: isActive })}
              to='advertiseManage'
            >
              <AdIcon className={styles.navIcon} />
              광고관리
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.guide}>
        <GuideIcon />
        <dl className={styles.guideContent}>
          <dt>레버 이용 가이드</dt>
          <dd>시작하기 전에 알아보기</dd>
        </dl>
      </div>
      <dl className={styles.termOfService}>
        <dt>레버는 함께 만들어갑니다.</dt>
        <dd>이용약관</dd>
      </dl>
    </aside>
  )
}

export default NavBar
