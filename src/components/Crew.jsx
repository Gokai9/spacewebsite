import styles from "./styles/Crew.module.css";
import { useState, useCallback } from "react";

const Crew = ({ crews }) => {
  const [crew, setCrew] = useState({ ...crews[0] });

  const handleCrew = useCallback(
    (name) => {
      const des = crews.filter((crew) => crew.name === name);
      console.log(name);
      setCrew(des[0]);
    },
    [crews]
  );
  console.log(crew);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>02 MEET YOUR CREW</h1>
        <main className={styles.main}>
          <section className={styles.section}>
            <h2>{crew.role}</h2>
            <h1>{crew.name}</h1>
            <p>{crew.bio}</p>
            {crews.map((crew) => (
              <span
                key={crew.name}
                className={styles.circle}
                onClick={() => handleCrew(crew.name)}
              ></span>
            ))}
          </section>
          <img src={crew.images.png} alt={crew.name} className={styles.img} />
        </main>
      </div>
    </div>
  );
};

export default Crew;
