(async () => {
  try {
    const { default: Tetiaroa } = await import("tetiaroa");
    const path = require("path");
    const root = process.cwd();
    const fs = require("fs");

    const getPath = (p) => path.resolve(`${root}/views`, p);
    const entrys = fs.readdirSync("views");

    entrys.forEach((entry) => {
      try {
        const dir = getPath(entry instanceof Array ? entry[0] : entry);
        const configFilePath = path.resolve(dir, "config.js");

        const { enable, config } = require(configFilePath);

        enable && new Tetiaroa(config);
      } catch (e) {
        console.log(e);
        console.log("当前未配置多语言生成文件");
      }
    });
  } catch (e) {
    console.log(e);
  }
})();
