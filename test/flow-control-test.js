const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')

describe('flow-control', () => {

  before(done => {
    const src = path.resolve(__dirname, '..', 'flow-control.js')

    jsdom.env('<div></div>', [src], (err, window) => {
      if (err) {
        return done(err)
      }

      Object.keys(window).forEach(key => {
        global[key] = window[key]
      })

      return done()
    })
  })

  
  })
})
