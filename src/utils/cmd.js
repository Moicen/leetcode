const read = require('./arg').read;

const run = () => {
    let { subject, task } = read();
    try {
        require(['..', subject, task].join('/'));
    } catch (e) {
        console.log(`exec ${subject}/${task}.js failed: `, e);
    }
};

run();
