module.exports = (env: string) => {
    return require(`./config/webpack.${env}`).config;
};
