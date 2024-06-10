import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/revenue">Revenue</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;