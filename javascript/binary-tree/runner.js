const log = require('../utils/log');
const generate = require('./builder');


const run = (solutions, randomData = true) => {
    let tree = undefined;
    if (randomData) {
        tree = generate();
        log('Tree : ');
        log(tree, true);
    }
    solutions.forEach(({desc, exec}) => {
        log(desc);
        log(exec(tree))
    });
};

module.exports = run;
