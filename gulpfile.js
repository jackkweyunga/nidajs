const nodeJs = require('./node/package.json');
const webJs = require('./package.json');
const fs = require('fs');

function defaultTask(cb) {
    cb();
}

async function updateNode() {
    nodeJs.version = webJs.version;
    fs.writeFileSync('./node/package.json', JSON.stringify(nodeJs));
    // return gulp.src('./node_modules/bfastjs/dist/bfast_js.js')
    //     .pipe(gulp.dest('./src/assets/js'));
}

exports.default = defaultTask;
exports.updateNode = updateNode;