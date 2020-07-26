//use axios to get data from football api.
//learn how to pass headers using axios.
//download the first 100 images.

let axios = require("axios");
let Fs = require("fs");
let path = require("path");

axios
  .get("https://api-football-v1.p.rapidapi.com/v2/leagues", {
    headers: {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "API-KEY",
      useQueryString: true,
    },
  })
  .then((response) => {
    for (let i = 0; i < 100; ++i) {
      fetch_logo(response.data.api.leagues[i].logo, "league_" + i + ".png");
    }
  })
  .catch((error) => console.error(error));

async function fetch_logo(url, filename) {
  try {
    let response = await axios({
      url,
      method: "get",
      responseType: "stream",
    });
    let Path = path.resolve(__dirname, "League", filename);
    let writer = Fs.createWriteStream(Path);
    response.data.pipe(writer);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
