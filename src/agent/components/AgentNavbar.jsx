import { Link } from 'react-router-dom';
import LayoutContainer from '../../components/Layout'
import style from '../styles/component.module.css'

const AgentNavbar = () => {

    const isLoggenIn = true;

    const links= !isLoggenIn ? [
        {
            id:1,
            name:"login",
            path:"/agent/login"

        },
        {
            id:2,
            name:"register",
            path:"/agent/register"

        }
    ] : [
        {
            id:1,
            name:"post a property",
            path:"/agent/post-a-property"
        },
        {
            id:2,
            name:"my proprties",
            path:"/agent/my-properties"
        },
        {
            id:3,
            name:"Profile",
            path:"/agent/profile"
        },
        {
            id:4,
            name:"Logout",
            path:"/auth/login"
        },

    ]
    return (
        <LayoutContainer>
            <div className={style.navbarContainer}>
                <h1>askLuxor</h1> 
                        <ul className={style.menus}>
                            {
                                links.map((i)=> <li key={i.id}><Link to={i.path}>{i.name}</Link></li>)
                            }
                        </ul> 
            </div>
        </LayoutContainer>
    )
}

export default AgentNavbar