require("ts-node").register({
    filename: "config/webpack.config.ts",
});

module.exports = require("./config/webpack.config").default;
