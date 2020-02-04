import React, { FC, useState } from "react";
import Slider from "react-slick";
import { imgUrls } from "../../utils";
import css from "styled-jsx/css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  imgArr: Array<string>;
}

const MySlider: FC<Props> = ({ imgArr }) => {
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
    <div>
      <Slider {...settings} ref={(c: any) => (slider = c)}>
        {imgArr.map((item, index) => (
          <div key={item} id={num === index ? "target" : ""} onClick={change}>
            <img className="item" src={item} alt="" />
          </div>
        ))}
      </Slider>
      <style jsx>{style}</style>
    </div>
  );
};

export default MySlider;

const style = css`
  .item {
    width: 95%;
    border: 3px solid #eee;
    border-radius: 10px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5),
      0 12px 40px 0 rgba(0, 0, 0, 0.2);
  }

  .name {
    font-size: 30px;
    position: absolute;
    top: 80px;
    left: 150px;
    z-index: 999;
  }
  .center {
    width: 100%;
  }
`;
