const log = (content, raw = false) => {
    if (raw) console.log(content);
    else console.log(JSON.stringify(content, null, 4))
};

module.exports = log;