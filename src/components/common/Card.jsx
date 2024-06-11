import styles from "../../Styles/Card.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
const Card = ({ title, value, color, icon }) => {
  return (
    <div
      className={`w-full  ${styles.card} rounded-sm`}
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center justify-start gap-10">
        {icon && <div className={`${styles.icon} text-6xl`}>{icon}</div>}
        <div>
          <div className={styles["card-title"]}>{title}</div>
          <div className={styles["small-desc"]}>{value}</div>
        </div>
      </div>
      <div className={styles.go_corner}>
        <div className={styles.go_arrow}>
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default Card;
