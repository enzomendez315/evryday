module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // according to the docs, this is required for reanimated and awesome-slider
    // it says it must be listed last
    // https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/
    'react-native-reanimated/plugin',
  ],
};
