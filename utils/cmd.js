const read = require('./arg').read;

const run = () => {
    try {
        let {subject, task} = read();
        require(['..', subject, 'js', task].join('/'));
    } catch (e) {
        console.log(`exec ${subject}/${task}.js failed: `, e);
    }
};

run();
