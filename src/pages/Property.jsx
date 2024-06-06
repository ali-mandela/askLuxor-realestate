import { useEffect, useState } from 'react';
import LayoutContainer from '../components/Layout';
import styles from '../styles/property1.module.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import {CiLocationOn} from "react-icons/ci";
import Spinner from '../utils/Spinner';
import { FaBath } from 'react-icons/fa';
import { IoBedSharp } from 'react-icons/io5';
import { LuParkingSquare, LuParkingSquareOff } from 'react-icons/lu';
import { GiRolledCloth } from "react-icons/gi";
import { BiSolidNotificationOff } from "react-icons/bi";

const Property = () => {
    const { id } = useParams();
    const [propertyDetails, setPropertyDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPropertyDetails = async () => {
            try {
                const { data } = await axios.get(`/property/get-property/${id}`);
                if (data.success) {
                    setPropertyDetails(data.property);
                } 
            } catch (err) {
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPropertyDetails();
    }, [id]);

    if (loading) {
        return <LayoutContainer><Spinner/></LayoutContainer>;
    } 

    return (
        <LayoutContainer> 
        {/* <pre>{JSON.stringify(propertyDetails, null, 2)}</pre> */}
        <ProperyContent data={propertyDetails} /> 
        <AboutAgent data={propertyDetails.agent}/>
        <PropertyForm/>
        </LayoutContainer>
    );
};


const ProperyContent=({data})=>{
   return(
    <div className={styles.propContent}>
    
      <div className={styles.content}>
      <div className={styles.imgContainer}>
    <h2>{data.name}</h2>
        <img src={data.image} alt={data.name} /> 
    </div>
    
    <div className={styles.body}>

        
        <p><CiLocationOn/> {data.address}</p>
        
        <div className={styles.features}>
        {
                        data.baths && <p><FaBath/> {data.baths}</p>
                    }
                    {
                        data.beds && <p><IoBedSharp/> {data.beds}</p>
                    }
                    {
                        !data.parkingSpot ? <p><LuParkingSquare/></p> : <p> <LuParkingSquareOff/></p> 
                    } 
                    {
                        !data.fullyFurbished ? <p><GiRolledCloth/></p> : <p> <BiSolidNotificationOff/></p> 
                    }
        </div>
        <p className={styles.type}><i>{data.type} ₹ {data.price}</i> </p>
         
    </div>
    
  

    </div>
    <p>{data.description}</p>
</div>
   )

}

const AboutAgent=({data})=>{
    return(
        <div className={styles.agentContainer}>
            <div>
            <img src={data.image} alt='lak' />
            <p>{data.name}</p>
            <Link to={'/'}>{data.Property} Properies</Link>
            </div>
            <div>
                {data.bio}
            </div>
        </div>
    )
}

const PropertyForm=()=>{
    return(
        <div className={styles.formContainer}>
        <h3>Contact Agent</h3>
            <form>
                <input type='text' placeholder='Name' />
                <input type='text' placeholder='Email' />
                <input type='text' placeholder='Phone' />
                <button>Contact Agent</button>
            </form>
        </div>
    )
}
export default Property;
