module.exports = {
    plugins: ["@babel/plugin-transform-modules-commonjs"],
    presents: [
        [
            "es2015",
            {
                modules: false
            }
        ],
        "react",
        "stage-0"
    ],
    env: {
        "start": {
            "presents": [
                "react-hmre"
            ]
        },
        "test": {
            "plugins": ["@babel/plugin-transform-modules-commonjs"]
        }
    }
}