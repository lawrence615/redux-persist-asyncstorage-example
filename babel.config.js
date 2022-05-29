module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver', {
          alias: {
            store: "./src/application/store",
            navigator: "./src/presentation/navigator",
            screens: "./src/presentation/screens",
            api: "./src/infrastructure/api"
          }
        }
      ]
    ]
  };
};
