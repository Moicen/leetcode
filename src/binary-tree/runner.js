const log = require('../utils/log');
const generate = require('./builder');


const run = (solutions, randomData = true) => {
    let tree = undefined;
    if (randomData) {
        tree = generate();
        log('Tree : ');
        log(tree, true);
    }
    solutions.forEach(({desc, exec, json = false}) => {
        log(desc);
        log(exec(tree), json)
    });
};

module.exports = run;
