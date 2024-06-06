/* eslint-disable react/prop-types */

import './Spinner.css'; 
import styles from './error.module.css'

const Spinner = () => {
  return (
    <div className="spinner"> 
      <span className="loader"></span>
    </div>
  );
};

export default Spinner;
 

const ErrorComponent = ({ message }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
      <h1 className={styles.errorTitle}>Uh-oh!</h1>
        <p className={styles.errorMessage}>Something went wrong.</p>
        <p className={styles.errorMessage}>{message}</p>
        <button className={styles.refreshButton} onClick={handleRefresh}>
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export  {ErrorComponent};
