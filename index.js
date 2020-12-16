const express = require('express')
const { getAllAuthors, getAuthorByIdOrName } = require('./controllers/authors')
const { getAllGenres, getGenreById } = require('./controllers/genres')
const { getAllNovels, getNovelByIdOrTitle } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:identifier', getAuthorByIdOrName)

app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenreById)

app.get('/novels', getAllNovels)
app.get('/novels/:identifier', getNovelByIdOrTitle)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
