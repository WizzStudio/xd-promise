import React, { SFC } from "react";
import css from "styled-jsx/css";
import Slider from "../../components/Slider";
import { imgUrls } from "../../utils/index";

interface Props {
  place: string;
  location: { state: any };
}

const Poster: SFC<Props> = props => {
  console.log("props :", props);
  return (
    <div className="poster">
      <div className="wrap">
        <div className="slider" id="slider">
          <Slider
            imgArr={
              props.location.state ? props.location.state.imgArr : imgUrls
            }
          ></Slider>
          <div className="tip">长按即可保存</div>
        </div>
      </div>
      <style jsx>{style}</style>
    </div>
  );
};

export default Poster;

const style = css`
  .poster {
    width: 100vw;
    height: 100vh;
    background: #cd2626;
  }

  .slider {
    padding-top: 10%;
  }
  .tip {
    display: flex;
    justify-content: center;
    font-size: 1em;
    color: #eee;
  }
`;
