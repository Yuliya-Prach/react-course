const { merge } = require('webpack-merge');

const commonConfig = require('./config/webpack.common.js');

module.exports = (env) => {
    const config = (env.hasOwnProperty('development')) ?
        require('./config/webpack.development.js')
    :
        require('./config/webpack.production.js');

    return merge(commonConfig, config);
};