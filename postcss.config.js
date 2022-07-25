const sortCSSmq = require('sort-css-media-queries')
const autoprefixer = require('autoprefixer')
const postcssSortMediaQueries = require('postcss-sort-media-queries')
const cssNano = require('cssnano')

module.exports = () => ({
  plugins: [
    autoprefixer({
      grid: true,
    }),
    postcssSortMediaQueries({
      sort: sortCSSmq,
    }),
    cssNano({
      preset: [
        'default',



        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
})
