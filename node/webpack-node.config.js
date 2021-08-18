const path = require("path")

module.exports = {
    target: "node",
    entry: "../src/nid.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                // type: 'javascript/esm',
                use: [
                    {
                        loader: 'ts-loader',
                        options: { configFile: "tsconfig.json" }
                    }
                ],
                exclude: /node_modules/,
            },

            // {
            //     test: /\.(js)$/,
            //     use: "babel-loader"
            // }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "nid.js",
        globalObject: 'this',
        libraryTarget: "commonjs"
    },
    plugins: [],
    mode: 'production'
}