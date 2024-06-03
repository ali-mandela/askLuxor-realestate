import LayoutContainer from '../../components/Layout';
import style from '../../styles/admin.module.css';

const AdminDashBoard = () => {
    return (
        <LayoutContainer>
        <h2 className={style.title}>Admin Dashboard</h2>
            <div className={style.adminContainer}>
            <h3>New Agents</h3>
            </div>
        </LayoutContainer>
    )
}

export default AdminDashBoard