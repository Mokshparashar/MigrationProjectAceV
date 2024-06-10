import Card from '../components/common/Card.jsx';
import Style from '../Styles/AdminDashboard.module.css';

const DashboardContent =()=> {
  return (
    <div className={Style.adminDashboard}>
      <Card title="Students" value="3256" color="#FF5733" />
      <Card title="Employees" value="68" color="#FFC107" />
      <Card title="Courses" value="16" color="#4CAF50" />
      <Card title="Revenue" value="3,47,000" color="#2196F3" />
      <Card title="Students" value="3256" color="#FF5733" />
      <Card title="Employees" value="68" color="#FFC107" />
      <Card title="Courses" value="16" color="#4CAF50" />
      <Card title="Revenue" value="3,47,000" color="#2196F3" />
      {/* you can add more cards here */}
    </div>
  )
};

export default DashboardContent;