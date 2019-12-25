const log = require('../utils/log');


const run = (solutions) => {
    solutions.forEach(({desc, exec}) => {
        log(desc);
        log(exec());
    });
};

module.exports = run;
