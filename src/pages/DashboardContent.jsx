import { PiBookOpenUserLight } from "react-icons/pi";
import Card from "../components/common/Card.jsx";
import Style from "../Styles/AdminDashboard.module.css";

const DashboardContent = () => {
  return (
    <div className={`${Style.adminDashboard} w-4/5 grid grid-cols-4 gap-x-4`}>
      <Card
        title="Students"
        value="3256"
        color="#FF5733"
        icon={<PiBookOpenUserLight />}
      />
      <Card
        title="Employees"
        value="68"
        color="#FFC107"
        icon={<PiBookOpenUserLight />}
      />
      <Card
        title="Courses"
        value="16"
        color="#4CAF50"
        icon={<PiBookOpenUserLight />}
      />
      <Card
        title="Revenue"
        value="3,47,000"
        color="#2196F3"
        icon={<PiBookOpenUserLight />}
      />
      <Card
        title="Students"
        value="3256"
        color="#FF5733"
        icon={<PiBookOpenUserLight />}
      />
      <Card
        title="Employees"
        value="68"
        color="#FFC107"
        icon={<PiBookOpenUserLight />}
      />
      <Card
        title="Courses"
        value="16"
        color="#4CAF50"
        icon={<PiBookOpenUserLight />}
      />
      <Card
        title="Revenue"
        value="3,47,000"
        color="#2196F3"
        icon={<PiBookOpenUserLight />}
      />
      {/* you can add more cards here just add on */}
    </div>
  );
};

export default DashboardContent;
