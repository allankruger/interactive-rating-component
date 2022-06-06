import "./global.css";
import styles from "./App.module.css";
import iconStar from "./assets/icon-star.svg";

export function App() {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <img src={iconStar} alt="Icon star" />
      </div>
      <h1>How did we do?</h1>

      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <ul className={styles.ratings}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>

      <button className={styles.button}>Submit</button>
    </div>
  );
}
