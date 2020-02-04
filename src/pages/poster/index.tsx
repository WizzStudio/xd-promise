import React, { SFC, useState } from "react";
import css from "styled-jsx/css";
import { imgUrls } from "../../utils/index";
import { CSSTransition } from "react-transition-group";

interface Props {
  place: string;
  location: { state: any };
}

const Poster: SFC<Props> = props => {
  let imgArr = props.location.state ? props.location.state.imgArr : imgUrls;
  const [index, setIndex] = useState(0);

  const changeImg = () => {
    let now = index;
    setIndex(++now % 5);
  };
  return (
    <div className="poster">
      <div className="wrap">
        <CSSTransition
          in={true}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          appear={true}
          onEnter={el => {}}
          onEntering={el => {}}
          onEntered={el => {}}
          onExit={el => {}}
          onExiting={el => {}}
          onExited={el => {}}
        >
          <img
            className="item"
            src={imgArr[index]}
            alt=""
            onClick={changeImg}
          />
        </CSSTransition>
        <div className="tip">轻触更换，长按保存</div>
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
  .tip {
    display: flex;
    justify-content: center;
    font-size: 1em;
    color: #eee;
  }
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }
  .item {
    width: 75vw;
    border: 3px solid #eee;
    border-radius: 10px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  }
  .fade-enter,
  .fade-appear {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-appear-active {
    opacity: 1;
    transition: opacity 1200ms;
  }
  .fade-enter-done {
    opacity: 1;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 1200ms;
  }
  .fade-exit-done {
    opacity: 0;
  }
`;
