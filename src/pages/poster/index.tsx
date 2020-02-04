import React, { SFC, useState } from "react";
import css from "styled-jsx/css";
import { imgUrls } from "../../utils/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface Props {
  place: string;
  location: { state: any };
}

const Poster: SFC<Props> = props => {
  console.log("props :", props);
  let imgArr = props.location.state ? props.location.state.imgArr : imgUrls;
  let slider: any;
  const [num, setNum] = useState(0);
  const settings = {
    infinite: true,
    speed: 200,
    centerPadding: "40px",
    centerMode: true,
    afterChange: (e: number) => {
      setNum(e);
    },
    fade: true,
    className: "center"
  };
  const change = () => {
    slider.slickNext();
  };
  return (
    <div className="poster">
      <div className="slider" id="slider">
        <Slider {...settings} ref={(c: any) => (slider = c)}>
          {imgArr.map((item: string, index: number) => (
            <div key={item} id={num === index ? "target" : ""} onClick={change}>
              <img className="item" src={item} alt="" />
              <div className="tip">长按即可保存</div>
            </div>
          ))}
        </Slider>
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
  .item {
    width: 95%;
    border: 3px solid #eee;
    border-radius: 10px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  }

  .name {
    font-size: 30px;
    position: absolute;
    top: 80px;
    left: 150px;
    z-index: 999;
  }
  .center {
    padding-top: 10%;
    width: 100%;
  }
  .tip {
    display: flex;
    justify-content: center;
    font-size: 1em;
    color: #eee;
  }
`;
