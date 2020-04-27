const Names = {
    'd': 'depth',
    's': 'subject',
    't': 'task'
};

const read = () => {
    let args = {};
    process.argv.slice(2).forEach(arg => {
        let [k, v] = arg.split('=');
        let name = k.replace(/^-*/, '');
        if (v === undefined) {
            v = true;
        }
        name = Names[name] || name;
        args[name] = v;
    });
    return args;
};


module.exports = {
    read
};
