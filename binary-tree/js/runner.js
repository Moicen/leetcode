const log = require('../../utils/log')
const generate = require('./builder')


const run = (name, recurWalk, iterateWalk) => {
    let tree = generate();
    log('Tree : ')
    log(tree, true);
    log(`${name} travel with recursive: `)
    log(recurWalk(tree))
    log(`${name} travel with iterate: `)
    log(iterateWalk(tree))
};

module.exports = run;
