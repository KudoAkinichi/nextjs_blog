import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Kudo</div>
      <div className={styles.text}>
        Kudo creative thoughts agency © All rights reserved.
      </div>
      
    </div>
  );
};

export default Footer;
