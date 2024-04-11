const path = require("path");
module.exports = {
  enable: true,
  config: {
    batch: [
      {
        spreadsheetId: "1n03xk2y8YNW-XhHN7JpgrcwgtLpFee8OI2XT4VUGu6c",
        range: "H5榜单活动3!D147:P234",
      },
    ],
    lang: {
      zh: 1,
      en: 2,
      ar: 3,
      vi: 4,
      fil: 5,
      zht: 6,
      ms: 7,
      es: 8,
      pt: 9,
      tr: 10,
      th: 11,
      ru: 12,
    },
    ouput: {
      path: path.resolve(__dirname, "./lang"),
      module: "json", // support 'json' 'common' 'es6'
      ext: ".json",
    },
  },
};
