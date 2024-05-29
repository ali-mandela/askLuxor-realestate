import style from '../styles/auth.module.css';
import LayoutContainer from '../../components/Layout';
import img from '../../assets/auth.svg';

import {useState} from 'react';
const LoginPage = () => {

    const [formData,
        setFormData] = useState({email: '', password: ''});

    const handleChange = (e) => {

        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <LayoutContainer>
            <div className={style.registerContainer}>
                <div className={style.imgContainer}>
                    <img src={img} alt="left bg"/>
                </div>

                <div className={style.formContainer}>
                    <h1>Welcome to askLuxor</h1>
                    <h3>Partner's login portal</h3>
                    <form onSubmit={handleSubmit}>

                        <div className={style.formGroup}>
                            <input
                                name="email"
                                type='email'
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}/>
                        </div>
                        <div className={style.formGroup}>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}/>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>

            </div>

        </LayoutContainer>

    )
}

export default LoginPage