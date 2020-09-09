const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  // adding css loader to inject custom UI properties relavant to brand. Example, the font used by appiness, open sans will be explicitly injected by webpack into the project.
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, "src/core/")],
          indentedSyntax: true,
        },
        prependData: '@import "~@/sass/main.scss"',
      },
    },
  },

  // Using vuetify for UI components
  transpileDependencies: ["vuetify"],

  // I prefer run time compilation for templates hence adding this
  runtimeCompiler: true,

  configureWebpack: () => {
    // this is required as I like to use @ alias for my file imports
    return {
      resolve: {
        alias: {
          "@": resolve("src"),
        },
      },
      devtool: "source-map",
    };
  },
};
