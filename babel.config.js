module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver', {
          alias: {
            rdx: "./src/application/redux",
            store: "./src/application/store",
            navigator: "./src/presentation/navigator",
            screens: "./src/presentation/screens",
            api: "./src/infrastructure/api"
          }
        },
      ],
      [
        'module:react-native-dotenv',{
          "moduleName": "@env",
          "path": ".env",
        }
      ]
    ]
  };
};
