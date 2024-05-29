import {useRef, useState} from 'react';
import style from '../styles/auth.module.css';
import LayoutContainer from '../../components/Layout';
import img from '../../assets/auth.svg';

const RegisterPage = () => {
    const [formData,
        setFormData] = useState({name: '', email: '', phone: '', password: '', image: null});
        const ref = useRef();

    const [imagePreview,
        setImagePreview] = useState(null);

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        if (name === 'image' && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prevState => ({
                    ...prevState,
                    image: file
                }));
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <LayoutContainer bgColor={"#fff"}>
            <div className={style.registerContainer}>
                <div className={style.imgContainer}>
                    <img src={img} alt="left bg"/>
                </div>

                <div className={style.formContainer}>
                    <h1>Welcome to askLuxor</h1>
                    <h3>Partner register portal</h3>
                    <form onSubmit={handleSubmit}>
                        <div className={style.formGroup}>  
                            <img src={imagePreview ? imagePreview : 'https://placehold.co/100x100'} alt="Preview" onClick={() => ref.current.click()}/>
                            <br/>
                            <label>Upload your image</label>
                            <input type='file' name='image'  ref={ref} hidden accept='.jpeg, .png, .jpg' onChange={handleChange}/>
                    
                        </div>
                        <div className={style.formGroup}>
                            <input
                                name="name"
                                type='text'
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}/>
                        </div>
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
                                name="phone"
                                type='number'
                                placeholder="Enter your phone"
                                value={formData.phone}
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
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </LayoutContainer>
    );
}

export default RegisterPage;
