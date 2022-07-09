const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
     entry: "./index.ts",

     target: "node",
     output: {
          path: path.resolve(__dirname, "dist"),
          filename: "index.js",
     },
     resolve: {
          extensions: [".ts", ".js"],
     },
     module: {
          rules: [
               {
                    test: /\.ts$/,

                    use: ["ts-loader"],
               },
          ],
     },

     plugins: [
          new CopyPlugin({
               patterns: [
                    { from: "prisma", to: "./" },
                    { from: "node_modules/.prisma/client/query_engine-windows.dll.node", to: "./" },
                    { from: ".env", to: "./" },
                    { from: "node_modules/.prisma/client/libquery_engine-debian-openssl-3.0.x.so.node", to: "./" },
               ],
          }),
     ],

     // externals: [nodeExternals()],
};
