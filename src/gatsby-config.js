module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: './utils/typography.js'
            }
        },
        'gatsby-plugin-sass'
    ]
}
