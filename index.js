module.exports = (req, res) => {
  res.writeHead(302, {
    Location: 'https://www.youtube.com/watch?v=LO1Z8HOGeWo'
  })
  res.end()
}
