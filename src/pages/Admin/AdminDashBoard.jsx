/* eslint-disable react/prop-types */
import LayoutContainer from '../../components/Layout';
import style from '../../styles/admin.module.css'; 
import PaginationComponent from '../../components/PaginationComponent';
import AgentComponent from './utils/AgentComponent';
import { getAgentsToVerify } from '../../utils/AgentApi';
import  Spinner from '../../utils/Spinner'

const AdminDashBoard = () => {
    return (
        <LayoutContainer>
            <AdminHeader/>
        </LayoutContainer>
    )
}
 
export default AdminDashBoard

const AdminHeader = () => {
    
    const {isLoading,agents} = getAgentsToVerify()

    return (
        
        <div className={style.adminHeaderContainer}>
            <h2 className={style.title}>Admin Dashboard</h2> 
            <div className={style.adminBody}>
            {
                isLoading ? <Spinner /> : <PaginationComponent message="As of now all the agents are verified, No new agent to verify." iPerPage={3} items={agents} component={AgentComponent} />
            }
                
            </div>
        </div>
    );
};
 