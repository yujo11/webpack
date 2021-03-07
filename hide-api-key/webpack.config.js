const path = require('path');
// const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
// const { web } = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new Dotenv(),
    // new webpack.DelegatedPlugin({
    //   'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    // }),
    // new webpack.EnvironmentPlugin(['API_KEY']),
  ],

  // new webpack().def

  // new webpack.DelegatedPlugin({
  //   'process.env.API_URL': JSON.stringify(process.env.API_URL)
  // })

  // webpack.d .DefinePlugin({
  //   'process.env.API_URL': JSON.stringify(process.env.API_URL)
  // }),
  // // EnvironmentPlugin 이 뒤에 []에 해당하는 환경변수를 클라이언트로 전달해 준답니다.
  // new webpack.EnvironmentPlugin(['API_URL'])
};
