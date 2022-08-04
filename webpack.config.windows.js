const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");
const mode = process.env.NODE_ENV || "production";

module.exports = {
     mode: mode,
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
                    { from: "production.env", to: "./" },
                    { from: "develop.env", to: "./" },
               ],
          }),
     ],

     externals: {
          sqlite3: "commonjs sqlite3",
     },
};
