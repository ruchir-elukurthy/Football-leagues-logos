const axios = require("axios");
const Path = require("path");
const Fs = require("fs");

function fetch_player(url, filename) {
  let path = Path.resolve(__dirname, "Players", filename);

  return new Promise((resolve, reject) => {
    axios({
      url,
      method: "get",
      responseType: "stream",
    })
      .then(function (response) {
        let writer = Fs.createWriteStream(path);
        response.data.pipe(writer);
        resolve();
      })
      .catch(function (error) {
        reject(`filename ${filename} was incorrect`);
      });
  });
}

Promise.all([
  fetch_player(
    "https://images.daznservices.com/di/library/GOAL/e2/82/axel-tuanzebe-man-utd-2019-20_15l7nsm715acy14rlprwldrh2v.jpg",
    "tuanzebe.jpg"
  ),
  fetch_player(
    "https://d3nfwcxd527z59.cloudfront.net/content/uploads/2020/03/06081624/Odion-Ighalo-celebrates-goal-Manchester-United-Derby.jpg",
    "ighalo.jpg"
  ),
  fetch_player(
    "https://i2-prod.manchestereveningnews.co.uk/incoming/article17602478.ece/ALTERNATES/s615/0_GettyImages-1198855234.jpg",
    "martial.jpg"
  ),
  fetch_player(
    "https://cdn.vox-cdn.com/thumbor/aL5AhhT_j-z35NgvXdcMvC_QUGw=/0x0:2400x3000/1200x800/filters:focal(1438x317:1822x701)/cdn.vox-cdn.com/uploads/chorus_image/image/67024646/1254242454.jpg.0.jpg",
    "greenwood.jpg"
  ),
  fetch_player(
    "https://i0.wp.com/metro.co.uk/wp-content/uploads/2020/03/GettyImages-1211338990.jpg",
    "james.jpg"
  ),
  fetch_player(
    "https://en.as.com/en/imagenes/2020/06/16/football/1592327308_835474_noticia_normal.jpg",
    "rashford.jpg"
  ),
  fetch_player(
    "https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2020/05/18153514/Jesse-Lingard-Man-Utd-F365.jpg",
    "lingard.jpg"
  ),
  fetch_player(
    "https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/09/GettyImages-1159285335.jpg",
    "periera.jpg"
  ),
  fetch_player(
    "https://en.as.com/en/imagenes/2019/09/29/football/1569768293_459719_noticia_normal.jpg",
    "mata.jpg"
  ),
  fetch_player(
    "https://tmssl.akamaized.net/images/foto/normal/bruno-fernandes-manchester-united-1584088715-33631.jpg",
    "fernandes.jpg"
  ),
  fetch_player(
    "https://en.as.com/en/imagenes/2020/02/18/football/1582055018_528691_noticia_normal.jpg",
    "pogba.jpg"
  ),
  fetch_player(
    "https://images.daznservices.com/di/library/GOAL/b6/81/fred-manchester-united-2019-20_qvb84p65cx5l1pdsnvv8biufr.jpg",
    "fred.jpg"
  ),
  fetch_player(
    "https://tmssl.akamaized.net/images/foto/normal/scott-mctominay-von-manchester-united-1568285359-25675.jpg",
    "mctominay.jpg"
  ),
  fetch_player(
    "https://specials-images.forbesimg.com/imageserve/1170683769/960x0.jpg",
    "matic.jpg"
  ),
  fetch_player(
    "https://images.daznservices.com/di/library/GOAL/cf/b5/diogo-dalot-man-utd_1gnbe7ja51qwz1m011z5ngl4va.jpg",
    "dalot.jpg"
  ),
  fetch_player(
    "https://cdn.vox-cdn.com/thumbor/Tylx6l9ILwQbng2sOCuHu_q1NYI=/107x146:2483x3000/1200x800/filters:focal(810x648:1206x1044)/cdn.vox-cdn.com/uploads/chorus_image/image/64701572/1159014097.jpg.0.jpg",
    "bissaka.jpg"
  ),
  fetch_player(
    "https://images.daznservices.com/di/library/GOAL/23/8/eric-bailly-manchester-united-2018-19_lr1rbwc6mjp1160gfsj1u5zhh.jpg",
    "bailly.jpg"
  ),
  fetch_player(
    "https://images.daznservices.com/di/library/omnisport/6d/2a/victorlindelof-cropped_1hsag75l52xnp1d5jg0wi8j4y0.jpg",
    "lindelof.jpg"
  ),
  fetch_player(
    "https://i.pinimg.com/originals/a8/ae/cf/a8aecf09b8e92e5b3b2366f760a134c0.jpg",
    "jones.jpg"
  ),
  fetch_player(
    "https://s.yimg.com/ny/api/res/1.2/GVorWvq2VLMroOnPenu1Lw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NzY4O2g9NTExO2lsPXBsYW5l/http://media.zenfs.com/en_us/News/afp.com/2ccacccad67196e2cd7a1de69f9397d7381df35b.jpg",
    "maguire.jpg"
  ),
  fetch_player(
    "https://i.dailymail.co.uk/1s/2020/02/20/14/24981236-0-image-m-69_1582210705495.jpg",
    "williams.jpg"
  ),
  fetch_player(
    "https://assets.manutd.com/AssetPicker/images/0/0/12/30/794364/Player-Profiles-Square-Shaw1558452095123.jpg",
    "shaw.jpg"
  ),
  fetch_player(
    "https://i2-prod.manchestereveningnews.co.uk/incoming/article17554555.ece/ALTERNATES/s615/0_GettyImages-1198829932.jpg",
    "mensah.jpg"
  ),
  fetch_player("https://pbs.twimg.com/media/DihqmQAXkAA0c2z.jpg", "grant.jpg"),
  fetch_player(
    "https://c8.alamy.com/comp/HP780J/manchester-united-goalkeeper-sergio-romero-during-the-emirates-fa-HP780J.jpg",
    "romero.jpg"
  ),
  fetch_player(
    "https://images.daznservices.com/di/library/GOAL/31/d7/david-de-gea-manchester-united-2019-20_1pl4a0ujyb0uc1a8ca03kh1z0i.jpg",
    "degea.jpg"
  ),
])
  .then(() => {
    console.log("Players added");
  })
  .catch((error) => {
    console.log(error);
  });
