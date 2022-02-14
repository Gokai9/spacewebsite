import styles from "./styles/Technology.module.css";
import { useState, useCallback } from "react";

const Technology = ({ technology }) => {
  const [techno, setTechno] = useState(technology[0]);

  const handleTechno = useCallback(
    (name) => {
      const des = technology.filter((techno) => techno.name === name);
      console.log(name);
      setTechno(des[0]);
    },
    [technology]
  );
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>03 SPACE LAUNCh 101</h1>
        <main className={styles.main}>
          <section className={styles.section}>
            {technology.map((techno, i) => (
              <button
                key={techno.name}
                className={styles.circle}
                onClick={() => handleTechno(techno.name)}
              >
                {i + 1}
              </button>
            ))}
          </section>
          <p className={styles.description}>{techno.description}</p>
          <img src={techno.images.portrait} alt={techno.name} />
        </main>
      </div>
    </div>
  );
};

export default Technology;
