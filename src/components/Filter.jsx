/* eslint-disable no-unused-vars */
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import styles from '../styles/component.module.css';
import LayoutContainer from './Layout';
import {setItems, updateQuery} from '../Rdeux/searchSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Filter = ({isNav = false}) => {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.search.query);
    
    const nav =useNavigate()
    const [formData,
        setFormData] = useState(query);

    useEffect(() => {
        setFormData(query);
    }, [query]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(updateQuery(formData));

        // Make request to /property/search
        console.log(formData);
        const {data} = await axios.post('/property/search', formData) ;

        if(data.success){
        dispatch(setItems(data.response));
       {isNav && nav('/property')}


        }
    };

    return (
        <div className={styles.mainFilter}>
            <div className={styles.firstDiv}>
                <p
                    className={formData.type === 'Rent'
                    ? styles.ac
                    : ''}
                    onClick={() => dispatch(updateQuery({type: 'Rent'}))}>
                    For Rent
                </p>
                <p
                    className={formData.type === 'Sell'
                    ? styles.ac
                    : ''}
                    onClick={() => dispatch(updateQuery({type: 'Sell'}))}>
                    For Sale
                </p>
            </div>

            <div className={styles.secondDiv}>
                <LayoutContainer>
                    <form >
                        {/* <select name="purchaseType" onChange={handleChange} value={formData.purchaseType}>
                            <option value="" >Purchase Type</option>
                            <option value="sell">For Sale</option>
                            <option value="buy">For Rent</option>
                        </select> */}
                        <select name="typee" onChange={handleChange} value={formData.type}>
                            <option value="" >All Types</option>
                            <option value="Townhouses">Townhouses</option>
                            <option value="Duplexes">Duplexes</option>
                            <option value="Quadplexes">Quadplexes</option>
                            <option value="Condominiums">Condominiums</option>
                        </select>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            onChange={handleChange}
                            value={formData.title}/>
                        <select name="bedrooms" onChange={handleChange} value={formData.bedrooms}>
                            <option value="" >Any Bedrooms</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3+">3+</option>
                        </select>
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            onChange={handleChange}
                            value={formData.address}/>
                        <select name="bathrooms" onChange={handleChange} value={formData.bathrooms}>
                            <option value="" disabled>Any Bathrooms</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3+">3+</option>
                        </select>
                        <select name="minPrice" onChange={handleChange} value={formData.minPrice}>
                            <option value="" >Min Price</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                        </select>
                        <select name="maxPrice" onChange={handleChange} value={formData.maxPrice}>
                            <option value="" >Max Price</option>
                            <option value="25000">25000</option>
                            <option value="50000">50000</option>
                            <option value="100000">100000</option>
                            <option value="100000+">100000+</option>
                        </select>

                    </form>
                    <button onClick={handleSubmit} type="submit">Submit</button>
                </LayoutContainer>
            </div>
        </div>
    );
};

export default Filter;
