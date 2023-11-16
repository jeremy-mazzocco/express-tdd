module.exports = function (slug, id = 1) {
    let toConvert = slug.toLowerCase();
    toConvert = toConvert.trim().replace(/\s+/g, '-');

    let newId = id + 1;

    return {
        slug: toConvert,
        id: newId
    };
};
