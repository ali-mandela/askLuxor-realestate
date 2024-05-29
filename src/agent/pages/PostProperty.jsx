import { useRef, useState } from 'react';
import LayoutContainer from '../../components/Layout';
import style from '../styles/post.module.css';

const PostProperty = () => {
    const ref = useRef();
    const [propertyData, setPropertyData] = useState({
        name: '',
        address: '',
        description: '',
        type: '',
        parkingSpot: false,
        fullyFurbished: false,
        beds: '',
        baths: '',
        price: '',
        image: null
    });
    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (name === 'image' && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setPropertyData(prevState => ({
                    ...prevState,
                    image: file
                }));
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPropertyData(prevState => ({
                ...prevState,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(propertyData);
        // Add your form submission logic here
    };

    return (
        <LayoutContainer bgColor={"#F26531"}>
            <div className={style.postProperty}>
                <h1>Post a Property</h1>
                <div className={style.propertyContainer}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name of Property :</label> <br/>
                            <input name="name" onChange={handleChange} type='text' placeholder='Name' />
                        </div>
                        <div>
                            <label>Address of Property :</label><br/>
                            <input name="address" onChange={handleChange} type='text' placeholder='Address' />
                        </div>
                        <div>
                            <label>Description of Property :</label><br/>
                            <textarea name="description" onChange={handleChange} placeholder='Description' />
                        </div>
                        <div>  
                                <label>Rent:
                                    <input name='type' onChange={handleChange} type='radio' value='rent' />
                                </label>
                                <label>Sell:
                                    <input name='type' onChange={handleChange} type='radio' value='sell' />
                                </label>
                            
                        
                            <label>Parking Spot:
                            <input name="parkingSpot" onChange={handleChange} type='checkbox' /></label>
                            <label>Fully Furbished:
                            <input name="fullyFurbished" onChange={handleChange} type='checkbox' /></label>
                        </div>
                        <div>
                            <label>Beds:
                            <input name="beds" onChange={handleChange} type='number' placeholder='' /></label>
                            <label>Baths:
                            <input name="baths" onChange={handleChange} type='number' placeholder='' /></label>
                        </div>
                        <div>
                            <label>Price of Property:
                            <input name="price" onChange={handleChange} type='number' placeholder='' /></label>
                        </div>
                      
                        <button type="submit">Submit</button>
                    </form>
                    <div className={style.imgContainer}>
  <div>
                           { imagePreview &&  <img src={imagePreview } alt="Preview" onClick={() => ref.current.click()} />}
                           <br/>    <input ref={ref} name="image" capture onChange={handleChange} type='file' accept='image/*'  />
                         
                           <br/> <button type="button"  >Upload Image</button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutContainer>
    );
};

export default PostProperty;
