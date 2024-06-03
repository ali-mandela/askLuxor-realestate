/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'; 
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../Rdeux/userSlice';
const ProtectedRoute = ({children}) =>{

    const {userDetails} = useSelector((sto)=> sto.user);
    const dispatch = useDispatch();


    const getUser = async () => {
        try {
          const { data } = await axios.get('/agent/get-user', {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          });
    
          if (data.success) {
            dispatch(setUser(data?.data?.user)); 
            // toast("getting data")
          } else {
            // toast.error(data.message);
            <Navigate to="/login" />;
          }
        } catch (error) {
        //   toast.error(error.message);
          <Navigate to="/login" />;
        }
      };
      
      useEffect(() => {
        if(userDetails===null)
            getUser();
      }, []);
      
      if (localStorage.getItem('token')) {
        return children;
      } else {
        return <Navigate to="/login" />;
      }

}


export default ProtectedRoute