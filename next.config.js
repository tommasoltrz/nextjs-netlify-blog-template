const withMdxEnhanced = require("next-mdx-enhanced");
const rehypePrism = require("@mapbox/rehype-prism");

module.exports = {
  i18n: {
    locales: ["en", "fr", "it"],
    defaultLocale: "en",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
};
