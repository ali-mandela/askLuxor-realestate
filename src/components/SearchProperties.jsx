/* eslint-disable react/prop-types */
import {  useState } from 'react';
import styles from '../styles/Prop.module.css';
import PropertyComponent from './PropertyComponent';
import { useSelector } from 'react-redux';
import { getItems } from '../utils/ApiRequest';
import PaginationBtns from './utils/PaginationBtns';

 
const SearchProperties = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const items = useSelector((state) => state.search.items);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
 
        getItems();

     

    // Calculate the start and end indices of items to display
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentItems = items.slice(startIdx, endIdx);

    return (
        <div className={styles.searchPropertiesContainer}>
            <h1>Properties</h1>
            <div className={styles.body}>
            {
                items.length == '0' && <p style={{color:"black"}}>Currenly, No property is live.</p> 
            }
                {currentItems.map((item, i) => 
                    <PropertyComponent key={i} item={item} />
                )}
            </div>
            <PaginationBtns len={items.length} iPerPage={6} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
    );
};

export default SearchProperties;
