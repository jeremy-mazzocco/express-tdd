module.exports = function (slug, id = 1) {

    if (typeof slug !== "string") {
        throw new Error("input must be a string");
    }


    let toConvert = slug.toLowerCase();
    toConvert = toConvert.trim().replace(/\s+/g, '-');

    let newId = id + 1;

    return {
        slug: toConvert,
        id: newId
    };
};
