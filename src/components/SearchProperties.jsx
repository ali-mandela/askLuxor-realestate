/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from '../styles/Prop.module.css';
import PropertyComponent from './PropertyComponent';
import { useSelector } from 'react-redux';

const PaginationBtns = ({ len, currentPage, onPageChange }) => {
    const itemsPerPage = 6;
    const totalPages = Math.ceil(len / itemsPerPage);

    const renderPageButtons = () => {
        let buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={currentPage === i ? styles.active : ''}
                >
                    {i}
                </button>
            );
        }
        return buttons;
    };

    return (
        <div className={styles.paginationContainer}>
            {renderPageButtons()}
        </div>
    );
};

const SearchProperties = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const items = useSelector((state) => state.search.items);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Calculate the start and end indices of items to display
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentItems = items.slice(startIdx, endIdx);

    return (
        <div className={styles.searchPropertiesContainer}>
            <h1>Properties</h1>
            <div className={styles.body}>
                {currentItems.map((item, i) => 
                    <PropertyComponent key={i} item={item} />
                )}
            </div>
            <PaginationBtns len={items.length} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
    );
};

export default SearchProperties;
