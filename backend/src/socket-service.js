const io = require('socket.io')()

io.on('connect', socket => {
  socket.emit('connection established') // execution

  // setInterval(() => {
  //   socket.emit('hello world!')
  // }, 2000) this is how you build interractivity in your web application

  //  socket.on('new message', (number, cb) => {
  //    console.log('a new message received with number', number)
  //    console.log('replying with', number + 1)
  //   cb(number + 1)
  // })  // this to log to console and respond with this is a response
  // socket.on('another api', cb => {
  //    cb('another api response')
  //  })

  socket.on('new message', (streamId, message) => {
    socket.to(streamId).emit('new live stream message', message)
  }) // if there is a new messge, broadcat it to the room

  socket.on('join stream', streamId => {
    socket.join(streamId)
  })

  socket.on('go live', (clientId, cb) => {
    console.log(`${clientId} is going live`)

    socket.broadcast.emit('new live stream', clientId) // broadcast:sends notifications to other in the socket space except yourself that you are live
    socket.join(clientId) // the person who is going live needs to be able to join to send messages in the room
    cb(true)
  })
})

module.exports = io // exporting the socket.io server
