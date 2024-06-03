import LayoutContainer from '../../components/Layout'
import style from '../../styles/AgentProfile.module.css'

const ProfilePage = () => {
    return (
        <LayoutContainer>
            <div className={style.profileContainer}>
                <hr
                    style={{
                    border: "2px solid #054C7D",
                    width: "90px",
                    display: "block",
                    margin: "auto"
                }}/>
                <h1>AGENT PROFILE</h1>
                <div>
                    <img src='https://placehold.co/200x200'/> <br/>
                    <br/>
                    <br />
                    <label>change Profile Image

                        <input type='file'  accept='image/*' placeholder='Chnage the profile'/>
                    </label>
                </div>
                <div>
                <label>Change Name</label>
                  <input type='name' name='name' />
                </div>
                <div>
                <label>Chnage Number</label>
                  <input type='number' name='Phone' />
                </div> 
                <button>UPDATE PROFILE</button>
            </div>

        </LayoutContainer>
    )
}

export default ProfilePage