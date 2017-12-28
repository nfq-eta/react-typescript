module.exports = env => {
    require("ts-node").register(
        {
            project: "tsconfig.json",
            filename: `config/webpack.${env}.ts`,
        },
    );
    return require(`./config/webpack.${env}`).config;
};
