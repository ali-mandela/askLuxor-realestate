/* eslint-disable react/prop-types */
import styles from '../styles/property.module.css';
import {CiLocationOn} from "react-icons/ci";

const PropertyComponent = ({item}) => {
    return (
        <div className={styles.PropertyComponent}>
            <img src={item.img} alt='real-estate'/>
            <div className={styles.description}>
                <div className={styles.features}>
                    {
                      item.features?.map((i, index)=> <p key={index}>{i}</p>)
                    }
                </div>
                <p className={styles.price}>$ {item.price}</p>
                <p className={styles.location}>
                    <b><CiLocationOn/>
                    </b>
                    {item.location}</p>
            </div>
        </div>
    )
}

export default PropertyComponent