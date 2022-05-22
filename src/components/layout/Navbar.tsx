import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h1>title</h1>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='ad'>Ad</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
