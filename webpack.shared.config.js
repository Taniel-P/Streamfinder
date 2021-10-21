module.exports = {
  mode: process.env.NODE_ENV === 'production'
    ? 'production'
    : 'development',

    module: {
      rules: [
        // {
        //   test: /\.js?$/,
        //   loader: 'babel-loader',
        //   exclude: /node_modules/,
        // },
        {
          test: /\.jsx?$/,
          resolve: {
            extensions: ['.js', '.jsx'],
          },
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },

};
