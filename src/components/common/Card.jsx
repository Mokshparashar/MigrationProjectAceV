import React from 'react';
import styles from '../../Styles/Card.module.css';

const Card = ({ title, value, color, icon }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      {icon && <div className="icon">{icon}</div>}
      <div className={styles['card-title']}>{title}</div>
      <div className={styles['small-desc']}>{value}</div>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
  );
};

export default Card;
