module.exports = env => {
    require("ts-node").register(
        {filename: `config/webpack.${env}.ts`}
    );
    return require(`./config/webpack.${env}`).config;
};
