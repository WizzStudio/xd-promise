import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";

const imgUrls: Array<string> = [img1, img2, img3, img4, img5];

const placeArr: Array<string> = [
  "北京",
  "上海",
  "天津",
  "重庆",
  "河北",
  "山西",
  "辽宁",
  "吉林",
  "河南",
  "江苏",
  "浙江",
  "安徽",
  "福建",
  "江西",
  "山东",
  "湖北",
  "湖南",
  "广东",
  "海南",
  "四川",
  "贵州",
  "云南",
  "陕西",
  "甘肃",
  "青海",
  "黑龙江",
  "内蒙古",
  "广西",
  "西藏",
  "宁夏",
  "新疆",
  "台湾",
  "香港",
  "澳门",
  "其它"
];

const REDIRECT_URI =
  "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfde496ddf1d15848&redirect_uri=https%3A%2F%2Fhealth.wizzstudio.com&response_type=code&scope=snsapi_userinfo&state=shit#wechat_redirect";

export { imgUrls, placeArr, REDIRECT_URI };
