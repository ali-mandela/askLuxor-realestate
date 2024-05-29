/* eslint-disable react/prop-types */
import { useCallback } from 'react';
import style from '../styles/component.module.css';
import { MdDelete } from "react-icons/md";
import {Link} from 'react-router-dom'
const PropertyTable = ({ data }) => {
  const handleDelete = useCallback((id) => {
    console.log('Item deleted successfully!', id);
  }, []);

  return (
    <div className={style.TableContainer}>
      <table className={style.Table}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                <img src={item.image} alt={item.name} className={style.Image} />
              </td>
              <td>
                <button
                  className={style.DeleteButton}
                  onClick={() => handleDelete(item.id)}
                > Delete
                  <MdDelete />
                </button>
                <Link to={"/"}>Visit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyTable;
