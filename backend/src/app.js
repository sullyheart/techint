const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session');
const MongoStore = require('connect-mongo')
const passport = require('passport')
const cors = require('cors')

const Client = require('./models/client')
const Translator = require('./models/translator')

const mongoose = require('mongoose')

const mongooseConnection = require('./database-connection')

const clientPromise = mongoose.connection.asPromise().then(connection => connection.getClient())

const socketService = require('./socket-service')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const photosRouter = require('./routes/photos')
const accountRouter = require('./routes/account')
//const { stringify } = require('querystring')

const app = express()

app.use(
  cors({
    origin: true,  //||http frontend server
    credentials: true, // we wont be receiving cookies if we dont have this
}))

if (app.get('env') == 'development') {
  /* eslint-disable-next-line */
  app.use(require('connect-livereload')())
  /* eslint-disable-next-line */
  require('livereload')
    .createServer({ extraExts: ['pug'] })
    .watch([`${__dirname}/public`, `${__dirname}/views`])
}

app.set('trust proxy', 1)

app.set('io', socketService)//making sure my socket service is available to any file that has access to app

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(
  session({
  secret: ['thisisasupersecuresecretsecret', 'thisisanothersupersecuresecretsecret'],//first is for signing an the 2nd is for validating the signature
    store: MongoStore.create({ clientPromise, stringify: false }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,//session expires in 30 days
      path: '/api', //allows to keep it to backend;make sure that cookies are only available for api requests
      sameSite: 'none',
      secure: true, // only runs on https not http
    },
    })
);

app.use(passport.initialize())
app.use(passport.session())

passport.use(Client.createStrategy())

passport.serializeUser(Client.serializeUser())
passport.deserializeUser(Client.deserializeUser())



passport.use(Translator.createStrategy())
passport.serializeUser(Translator.serializeUser())
passport.deserializeUser(Translator.deserializeUser())

app.use(express.static(path.join(__dirname, 'public')))

//middleware so if you use any of our api,store the number of times you visited our api
app.use('/api', (req, res, next) => {
  req.session.viewCount = req.session.viewCount || 0
  req.session.viewCount++
  next()
})

app.use('/api/', indexRouter)
app.use('/api/account', accountRouter)
app.use('/api/users', usersRouter)
app.use('/api/photos', photosRouter)
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res,next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})


module.exports = app
// module.exports = mongoose.connection
