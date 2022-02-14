import styles from "./styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <div className={styles.box}>
          <h3>So, you want to travel to</h3>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! Explore{" "}
          </p>
        </div>
        <button className={styles.circle}>EXPLORE</button>
      </div>
    </div>
  );
};

export default Home;
