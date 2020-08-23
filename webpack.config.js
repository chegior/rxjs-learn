const path = require('path');

module.exports = {
    // the entry code would be on the folder below
    entry: './source/code.ts',
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    resolve: {
        extensions:['.ts','.js','.tsx']
    },
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'dist')
    }
};