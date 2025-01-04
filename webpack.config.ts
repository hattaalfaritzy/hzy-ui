module.exports = {
  cache: false,
  module: {
    rules: [
      {
        test: /\.mdx$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
          "@mdx-js/loader",
        ],
      },
    ],
  },
};
