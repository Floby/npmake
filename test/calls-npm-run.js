'use strict'
const util = require('util');
const expect = require('chai').expect
const exec = require('child_process').execFile
const Server = require('./lib/server')
const sink = require('stream-sink')
const path = require('path')

const NPMAKE_PATH = path.join(__dirname, '../bin/npmake')
const TEST_BIN_PATH = path.join(__dirname, 'bin')
const FAKE_NPM_BIN_PATH = path.join(TEST_BIN_PATH, 'npm')
const NODE_PATH = process.argv[0]

describe('npmake', () => {
  let env, recorder
  beforeEach(() => env = Object.assign({}, process.env))
  beforeEach(() => env.PATH = TEST_BIN_PATH + ':' + process.env.PATH)
  beforeEach(done => {
    recorder = new StubRecorder()
    recorder.start(err => {
      if (err) return done(err)
      env.NPMAKE_STUB_RECORDER_URL = 'http://localhost:' + recorder.port + '/'
      done()
    })
  })

  describe('called without args', () => {
    it('calls `npm run env -- make`', (done) => {
      exec(NPMAKE_PATH, {env}, (err, stdout, stderr) => {
        if (err) return done(err)
        let calls = recorder.calls()
        expect(calls).to.have.length(1)
        let call = calls.pop()
        expect(call).to.exist
        expect(call.argv).to.deep.equal([NODE_PATH, FAKE_NPM_BIN_PATH, 'run', 'env', '--', 'make'])
        done()
      })
    })
  })

  util.inherits(StubRecorder, Server);
  function StubRecorder () {
    let calls = []
    Server.call(this, 0, (req, res) => {
      if (req.method !== 'POST') {
        res.statusCode = 405
        return res.end()
      }

      req.pipe(sink()).on('data', (payload) => {
        try {
          let body = JSON.parse(payload)
          calls.push(body)
          return res.end()
        } catch(e) {
          console.error(e.stack)
          res.statusCode = 400
          res.end()
        }
      });
    })

    this.calls = () => [].concat(calls)
  }
})
