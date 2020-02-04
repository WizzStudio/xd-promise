import React, { FC } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import css from "styled-jsx/css";

interface Props {
  loading: boolean;
}

const Loading: FC<Props> = ({ loading }) => {
  return (
    <div className="loader">
      <BounceLoader color={"white"} size={150} loading={loading}>
        合成
      </BounceLoader>
      {loading && <div className="tip">努力生成中...</div>}
      {loading && <div className="overlay"></div>}
      <style jsx>{style}</style>
    </div>
  );
};
export default Loading;

const style = css`
  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  .loader {
    position: absolute;
    top: calc(50% - 75px);
    left: calc(50% - 75px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .tip {
    font-size: 1.3em;
    color: #eee;
  }
`;
