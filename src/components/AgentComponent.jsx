/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles  from '../styles/agent.module.css';  

const AgentComponent = ({item}) => {
    return (
        <div className={styles.agentComponent}>
            <div className={styles.imgContainer}>
                <img src={item.img} alt='home-image' />
                <div>

                </div>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.list}><Link to={'/'}>{item.properties} Properties</Link> </p>
            </div>
        </div>
    )
}

export default AgentComponent