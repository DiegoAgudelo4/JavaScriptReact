/* eslint-disable react/prop-types */
import style from "./VideoItem.module.css";
import Views from "./Views";


const VideoItem = ({ title, duration, date, description }) => {
    return (
      <div className={style.container}>
        <h2>{title}</h2>
        <span>{duration}</span>
        <span>{date}</span>
        <p>{description}</p>
        <Views></Views>
      </div>
    );
  };
  export default VideoItem;
  