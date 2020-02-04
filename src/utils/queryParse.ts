interface Data {
  [key: string]: string;
}

export default function queryParse(search: string): Data {
  let codeStr = search.slice(1);
  let items = codeStr.split("&");
  let data: Data = {};
  for (let i = 0; i < items.length; i++) {
    let [key, value] = items[i].split("=");
    data[key] = value;
  }
  return data;
}
