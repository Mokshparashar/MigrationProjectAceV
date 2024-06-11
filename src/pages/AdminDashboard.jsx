import Header from "../components/layout/Header.jsx";
import DashboardContent from "./DashboardContent.jsx";
// import Style from '../Styles/AdminDashboard.module.css';
// AdminDashbord
const AdminDashboard = () => {
  return (
    <div className="flex items-start justify-center flex-col">
      {/* <div className='bg-slate-500'> */}
      <Header />
      <DashboardContent />
    </div>
  );
};
// DashboardContent.js
export default AdminDashboard;
