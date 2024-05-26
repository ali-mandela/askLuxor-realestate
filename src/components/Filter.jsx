import styles from '../styles/component.module.css'
import LayoutContainer from './Layout'
const Filter = () => {
    return (

        <div className={styles.mainFilter}>
         
            <div className={styles.fisrtDiv}>
                <p>For Rent</p>
                <p className={styles.ac}>For Sale</p>
            </div>
            <div className={styles.seconfDiv}>
                <LayoutContainer >
                    <form>
                        <select>
                            <option value="" disabled selected>All Types</option>
                            <option value="Townhouses">Townhouses</option>
                            <option value="Duplexes">Duplexes</option>
                            <option value="Quadplexes">Quadplexes</option>
                            <option value="Condominiums">Condominiums</option>
                        </select>
                        <input type='text' placeholder='Title'/>

                        <select>
                            <option value="" disabled selected>Any Bedrooms</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3+">3+</option>
                        </select><input type='text' placeholder='Address'/>
                        <select>
                            <option value="" disabled selected>Any Bathrooms</option>
                            <option value="Townhouses">Townhouses</option>
                            <option value="Duplexes">Duplexes</option>
                            <option value="Quadplexes">Quadplexes</option>
                            <option value="Condominiums">Condominiums</option>
                        </select>

                        <select>
                            <option value="" disabled selected>Min price</option>
                            <option value="$100">$100</option>
                            <option value="$200">$200</option>
                            <option value="$300">$300</option>
                            <option value="$400">$400</option>
                        </select>
                        <select>
                            <option value="" disabled selected>Max price</option>
                            <option value="$25000">$25000</option>
                            <option value="$50000">$50000</option>
                            <option value="$100000">$100000</option>
                            <option value="$100000+">$100000+</option>
                        </select>
                        </form>
                    <button>Submit</button>
 
                </LayoutContainer>
            </div> 
           
        </div>
    )
}

 

export default Filter 