/* eslint-disable react/jsx-key */
import VideoItem from "./VideoItem";
import style from "./VideoList.module.css";

/* eslint-disable react/prop-types */
const VideoList = (props) => {
  return (
    <div className={style.container}>
      <h1>{props.title}</h1>
      {props.playList.map((item, index) => (
        <VideoItem
          key={index}
          {...item}
        />
      ))}
    </div>
  );
};
export default VideoList;
  