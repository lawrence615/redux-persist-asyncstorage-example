module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver', {
          alias: {
            navigator: "./src/presentation/navigator",
            screens: "./src/presentation/screens"
          }
        }
      ]
    ]
  };
};
