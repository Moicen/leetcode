const log = (content, json = false) => {
    if (json) console.log(JSON.stringify(content, null, 4));
    else console.log(content);
};

module.exports = log;
