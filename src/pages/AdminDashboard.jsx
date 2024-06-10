import Header from '../components/layout/Header.jsx';
import DashboardContent from './DashboardContent.jsx';
// import Style from '../Styles/AdminDashboard.module.css';
const  AdminDashboard =()=>{
  return (
    <div >
    {/* <div className='bg-slate-500'> */}
    <Header/>
      <DashboardContent />
    </div>
  );
};
// DashboardContent.js
export default AdminDashboard;