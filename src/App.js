import styles from "./App.module.css";
import Button from "./Button";

export default function App() {
  const buttonsWhiteTop = ["AC", "+/-", "%", 7, 8, 9, 4, 5, 6, 1, 2, 3];
  const buttonWhiteBottom = [0, "."];
  const buttonOrange = ["x", "x", "-", "+", "="];

  const buttonsWhiteTopList = buttonsWhiteTop.map((element) => (
    <Button name={element} classame={styles.button_top_white} />
  ));
  const buttonWhiteBottomList = buttonWhiteBottom.map((element) => (
    <Button name={element} classame={styles.button_bottm_white} />
  ));
  const buttonOrangeList = buttonOrange.map((element) => (
    <Button name={element} classame={styles.button_orange} />
  ));

  return (
    <>
      <div className={styles.main}>
        {/* display for calculations */}
        <div className={styles.display}>2x4</div>

        <div className={styles.buttonss}>
          <div className={styles.white}>
            <div className={styles.top_white}>{buttonsWhiteTopList}</div>
            <div className={styles.bottom_white}>{buttonWhiteBottomList}</div>
          </div>
          <div className={styles.orange}>{buttonOrangeList}</div>
        </div>
      </div>
    </>
  );
}
