import styles from "./styles/Destination.module.css";
import { useEffect, useState, useCallback } from "react";

const Destination = ({ destinations }) => {
  const [name, setName] = useState("Moon");
  const [destiny, setDestiny] = useState({ ...destinations[0] });

  const handleName = useCallback(
    (name) => {
      const des = destinations.filter(
        (destination) => destination.name === name
      );
      setDestiny(des[0]);
    },
    [destinations]
  );
  useEffect(() => {
    handleName(name);
  }, [name, handleName]);
  console.log(destiny.images.png);

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.head}>PICK YOUR DESTINATION</h1>

        <div className={styles.flex}>
          <img
            className={styles.img}
            src={destiny.images.png}
            alt={destiny.name}
          />
          <div className={styles.destiny}>
            <section className={styles.sectionbtn}>
              {destinations.map((destination) => (
                <span
                  className={styles.btn}
                  key={destination.name}
                  onClick={() => setName(destination.name)}
                >
                  {destination.name}
                </span>
              ))}
            </section>
            <div>
              <h1 className={styles.name}>{destiny.name}</h1>
              <p className={styles.description}>{destiny.description}</p>
              <hr />
              <div className={styles.contain}>
                <div className={styles.item}>
                  <p>AVG. DISTANCE</p>
                  <h3>{destiny.distance}</h3>
                </div>
                <div className={styles.item}>
                  <p>EST. TRAVELTIME</p>
                  <h3>{destiny.travel}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
