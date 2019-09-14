module.exports = function(api) {
  console.log(api)
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // plugins: new webpack.IgnorePlugin(/^\.\/(?!english)/, /bip39\/src\/wordlists$/),
    // sourceType: 'unambiguous'
  };
};
