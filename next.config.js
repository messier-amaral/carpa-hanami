/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
    webpack: (config) => {
        config.resolve.alias['@png'] = path.join(__dirname, 'public/png');
        config.resolve.alias['@svg'] = path.join(__dirname, 'public/svg');

        config.resolve.alias['@ramen'] = path.join(__dirname, 'public/png/ramen');
        config.resolve.alias['@sushi'] = path.join(__dirname, 'public/png/sushi');

        config.resolve.alias['@specialty'] = path.join(__dirname, 'public/png/specialty');
        config.resolve.alias['@chefs'] = path.join(__dirname, 'public/png/chefs')
    }
}
