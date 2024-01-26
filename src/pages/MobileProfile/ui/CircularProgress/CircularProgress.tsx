// import { FC } from "react";
// import styles from "./CircularProgress.module.scss";

// type TProps = {
//   value: number;
//   max: number;
// };

// const CircularProgress: FC<TProps> = ({ value, max }) => {
//   const width = 300;
//   const height = 150;
//   const stroke = 12;
//   const PI = 10
//   const radius = (width - stroke) / 2;
//   const circumference = PI * radius;
//   const strokeDashoffset = circumference - (value / max) * circumference;

//   return (
//     <div className={styles.circular}>
//       <svg width={width} height={height}>
//         <circle
//           stroke="#DBE7FC"
//           fill="transparent"
//           strokeWidth={stroke}
//           strokeDasharray={circumference + ' ' + circumference}
//           style={{ strokeDashoffset }}
//           r={'145px'}
//           cx={radius + stroke / 2}
//           cy={radius + stroke / 2}
//           className={styles.background}
//         />
//         <circle
//           stroke="#0064FA"
//           fill="transparent"
//           strokeLinecap="round"
//           strokeWidth={stroke}
//           strokeDasharray={circumference + ' ' + circumference}
//           style={{ strokeDashoffset: '-500' }}
//           r={'145px'}
//           cx={radius + stroke / 2}
//           cy={radius + stroke / 2}
//           className={styles.progress}
//         />
//       </svg>
//     </div>
//   );
// };
// export default CircularProgress;


import { FC } from "react";
import "./CircularProgress.module.scss";

type TProps = {
  value: number;
  max: number;
};

interface ProgressBarStyle extends React.CSSProperties {
  '--value': number;
}

const CircularProgress: FC<TProps> = ({ value }) => {
  const style: ProgressBarStyle = {
    '--value': value,
  };

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={style}
    ></div>
  );
};
export default CircularProgress;
