const faker = require('faker');

module.exports = function (ctx, next) {
    ctx.body = {
        name:faker.name.findName()
    };
};
