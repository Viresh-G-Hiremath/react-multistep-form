import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

export default function MyProgressBar({ page }) {
  let per = 0;
  if (page === 1) {
    per = 16;
  }
  if (page === 2) {
    per = 50;
  }
  if (page === 3) {
    per = 83;
  }
  if (page === 4) {
    per = 100;
  }

  return (
    <div className="my-5 width2 m-auto">
      <ProgressBar percent={per} filledBackground="#0d6efd" height={"1px"}>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`box ${page >= 1 ? "box1" : "box2"}`}>1</div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`box ${page >= 2 ? "box1" : "box2"}`}>2</div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`box ${page >= 3 ? "box1" : "box2"}`}>3</div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`box ${page === 4 ? "box1" : "box2"}`}>4</div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
}
