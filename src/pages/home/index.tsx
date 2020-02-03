import React, { SFC, useState, useEffect } from "react";
import css from "styled-jsx/css";
import html2canvas from "html2canvas";
import Target from "../../components/Target";
import Loading from "../../components/Loading";
import bg from "../../assets/img/bg.jpeg";
import { placeArr } from "../../utils";
import avatarUrl from "../../assets/avatar.jpg";

interface Props {
  history: { push: any };
}
const Home: SFC<Props> = props => {
  const [loading, setLoading] = useState(false);
  const [place, setPlace] = useState("default");

  useEffect(() => {
    document.addEventListener("touchend", e => {
      console.log("e", e);
    });
    return document.removeEventListener("touchend", () => {});
  });

  const getImage = async () => {
    if (place === "default") {
      alert("请选择地点");
      return;
    }
    let imgArr: Array<string> = [];
    setLoading(true);
    const res = await Promise.all(
      [0, 1, 2, 3, 4].map(async (id: number) => {
        const slider = document.getElementById(`tg${id}`) || document.body;
        return await html2canvas(slider, {
          useCORS: true
        });
      })
    );
    res.forEach((canvas: any) => {
      var imgUrl = canvas.toDataURL("image/png");
      imgArr.push(imgUrl);
    });
    setLoading(true);
    props.history.push({
      pathname: "/poster",
      state: { place, imgArr }
    });
  };

  return (
    <div className="app">
      <img className="bg" src={bg} />
      <select
        value={place}
        className="place"
        placeholder="请选择"
        onChange={e => setPlace(e.target.value)}
      >
        <option value="default">请选择</option>
        {placeArr.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      {/* <button className="arrow" onClick={getImage}></button> */}
      <Loading loading={loading}></Loading>
      <div className="target">
        <Target avatar={avatarUrl} place={place}></Target>
      </div>
      <i className="top" onClick={getImage}></i>
      <style jsx>{style}</style>
    </div>
  );
};

export default Home;

const style = css`
  .app {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
  .bg {
    width: 100vw;
    height: 100vh;
  }
  select {
    color: red;
    background: inherit;
    border: none;
    outline: none;
    width: 60px;
    height: 40px;
    line-height: 40px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align: center;
  }
  .place {
    color: black;
    font-size: 1.3em;
    position: absolute;
    top: 83%;
    left: 26%;
  }
  .target {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  .top {
    position: absolute;
    right: 25px;
    top: calc(50% - 25px);
  }
  .top:before,
  .top:after {
    position: absolute;
    content: "";
    border-bottom: 20px transparent dashed;
    border-left: 20px #fff dashed;
    border-right: 20px transparent dashed;
    border-top: 20px transparent solid;
  }
  .top:after {
    border-left: 20px #b22222 solid;
  }
  .top:before {
    left: 5px;
    border-left: 20px #fff solid;
  }
`;
