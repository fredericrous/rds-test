const reactStrictPreset = require('react-strict-dom/babel-preset');

function getIsDev(caller) {
  // This information is populated by Expo
  if (caller?.isDev != null) return caller.isDev;
  // https://babeljs.io/docs/options#envname
  return (
    process.env.BABEL_ENV === 'development' ||
    process.env.NODE_ENV === 'development'
  );
}

module.exports = function (api) {
  const dev = api.caller(getIsDev);

  return {
    plugins: [],
    presets: [
      // Expo's babel preset
      'babel-preset-expo',
      // React Strict DOM's babel preset
      [
        reactStrictPreset,
        {
          dev,
          platform: 'native',
        },
      ],
    ],
  };
};
