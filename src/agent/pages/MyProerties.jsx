import LayoutContainer from '../../components/Layout';
import PropertyTable from '../components/PropertyTable';
import style from '../styles/myproperties.module.css';
const properties = [
    {
        name: 'Sunny Apartment',
        address: '123 MG Road, Bangalore, Karnataka',
        description: 'A beautiful 2BHK apartment with ample sunlight and modern amenities.',
        type: 'rent',
        parkingSpot: true,
        fullyFurbished: true,
        beds: 2,
        baths: 2,
        price: 25000,
        image: 'https://placehold.co/100x100'
    },
    {
        name: 'Green Villa',
        address: '456 Palm Street, Pune, Maharashtra',
        description: 'Spacious villa with a private garden and a swimming pool.',
        type: 'sell',
        parkingSpot: true,
        fullyFurbished: false,
        beds: 4,
        baths: 3,
        price: 15000000,
        image: 'https://placehold.co/100x100'
    },
    {
        name: 'City Center Flat',
        address: '789 Connaught Place, New Delhi',
        description: 'Luxurious flat located in the heart of the city with all facilities nearby.',
        type: 'rent',
        parkingSpot: false,
        fullyFurbished: true,
        beds: 3,
        baths: 2,
        price: 45000,
        image: 'https://placehold.co/100x100'
    },
    {
        name: 'Peaceful Cottage',
        address: '321 Lake View Road, Udaipur, Rajasthan',
        description: 'A serene cottage overlooking the lake, perfect for a peaceful living.',
        type: 'sell',
        parkingSpot: false,
        fullyFurbished: true,
        beds: 2,
        baths: 1,
        price: 8000000,
        image: 'https://placehold.co/100x100'
    },
    {
        name: 'Modern Duplex',
        address: '654 IT Park, Hyderabad, Telangana',
        description: 'A modern duplex with state-of-the-art facilities and close to IT hubs.',
        type: 'rent',
        parkingSpot: true,
        fullyFurbished: false,
        beds: 3,
        baths: 3,
        price: 60000,
        image: 'https://placehold.co/100x100'
    },
    {
        name: 'Heritage Bungalow',
        address: '987 Old Town, Jaipur, Rajasthan',
        description: 'A heritage bungalow with traditional architecture and spacious rooms.',
        type: 'sell',
        parkingSpot: true,
        fullyFurbished: true,
        beds: 5,
        baths: 4,
        price: 20000000,
        image: 'https://placehold.co/100x100'
    },
    {
        name: 'Cozy Studio',
        address: '159 Marine Drive, Mumbai, Maharashtra',
        description: 'A cozy studio apartment with a stunning sea view, ideal for singles.',
        type: 'rent',
        parkingSpot: false,
        fullyFurbished: true,
        beds: 1,
        baths: 1,
        price: 30000,
        image: 'https://placehold.co/100x100'
    }
];
 

const MyProerties = () => {
 
  return (
    <LayoutContainer>
           <div className={style.properyContainer}>
            <h1>My Properties</h1>
            <PropertyTable data={properties}/>
           </div>
    </LayoutContainer>
 
  )
}

export default MyProerties