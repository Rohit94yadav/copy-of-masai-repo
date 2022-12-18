import {Link, NavLink} from "react-router-dom"
import styles from "./Navbar.module.css"

const links=[
{
  path: "/",
  title:"Home"
},
{
  path: "/about",
  title:"About"
},
{
  path: "/contact",
  title:"Contact"
},
{
  path: "/products",
  title:"Products"
},
{
    path: "/login",
    title:"Login"
  }
]

function Navbar(){
  return(
    <div className={styles.nav}>
      {links.map((link)=>(

        <NavLink className={({isActive})=>
        isActive?StyleSheet.active:styles.default
        }
        
      key={link.path}
      to={link.path}
      >
        {link.title}
        </NavLink>

      ))}
      </div>
  )
}

export default Navbar