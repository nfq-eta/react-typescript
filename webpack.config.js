require("ts-node").register(
    {filename: "config/webpack.dev.ts"},
    {filename: "config/webpack.prod.ts"},
    );

module.exports = env => require(`./config/webpack.${env}`).default;
