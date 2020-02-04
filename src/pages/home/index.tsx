import React, { SFC, useState, useEffect } from "react";
import css from "styled-jsx/css";
import html2canvas from "html2canvas";
import Target from "../../components/Target";
import Loading from "../../components/Loading";
import bg from "../../assets/bg.jpeg";
import { placeArr, REDIRECT_URI } from "../../utils";
import queryParse from "../../utils/queryParse";
import xdUrl from "../../assets/xd.png";
import arrow from "../../assets/arrow.png";
import Cookie from "js-cookie";

interface Props {
  history: { push: any };
  location: { search: string };
}
const Home: SFC<Props> = props => {
  const [loading, setLoading] = useState(false);
  const [place, setPlace] = useState("default");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (Cookie.get("place")) {
      setPlace(Cookie.get("place"));
    }
    const getData = async () => {
      if (!props.location.search) {
        window.location.href = REDIRECT_URI;
        return;
      }
      if (Cookie.get("avatar")) {
        setAvatar(Cookie.get("avatar"));
        return;
      }
      let data = queryParse(props.location.search);
      let url = `https://health.wizzstudio.com/login?code=${data.code}`;
      try {
        const userinfo = await fetch(url).then(res => res.json());
        // let avatarUrl = userinfo.headimgurl ? userinfo.headimgurl : xdUrl;
        Cookie.set("avatar", userinfo.headimgurl);
        setAvatar(userinfo.headimgurl);
      } catch (error) {
        // setAvatar(xd);
      }
    };
    getData();
  }, []);

  const getImage = async () => {
    if (place === "default") {
      alert("请选择所在地点");
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
      var imgUrl = canvas.toDataURL("image/jpeg");
      imgArr.push(imgUrl);
    });
    console.log("imgArr", imgArr);
    props.history.push({
      pathname: "/poster",
      state: { place, imgArr },
      query: {
        code: 22
      }
    });
  };

  const handlePlace = (e: any) => {
    setPlace(e.target.value);
    Cookie.set("place", e.target.value);
  };

  return (
    <div className="app">
      <img className="bg" src={bg} />
      <select value={place} className="place" onChange={e => handlePlace(e)}>
        <option value="default">选择</option>
        {placeArr.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <Loading loading={loading}></Loading>
      <div className="target">
        <Target avatar={avatar} place={place}></Target>
      </div>
      <img src={arrow} alt="" className="arrow" onClick={getImage} />
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
    font-size: 1.3rem;
    position: absolute;
    top: 83%;
    left: 26%;
  }
  .target {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  .arrow {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0px;
    top: calc(50% - 30px);
  }
`;
