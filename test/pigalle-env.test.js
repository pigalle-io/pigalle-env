// /* --------------------------------------------------------------------- *
//  * This file is part of pigalle.core.env                                 *
//  *                                                                       *
//  * Copyright (c) 2018 SAS 9 Février.                                     *
//  *                                                                       *
//  * Distributed under the MIT License                                     *
//  * (license terms are at http://opensource.org/licenses/MIT).            *
//  *                                                                       *
//  * --------------------------------------------------------------------- */

/* eslint-env mocha */

require('should')

const process = require('process')
const {PigalleEnv} = require('../lib/pigalle-env')

const EXAMPLE = {
  OBJECT: {
    NODE_ENV: 'test',
    SECRET_KEY: 'test_secret_key'
  },
  EXPORT: 'dc04db40c946410e3186792437e92f59b3aab830eyJOT0RFX0VOViI6InRlc3QiLCJTRUNSRVRfS0VZIjoidGVzdF9zZWNyZXRfa2V5In0='
}

describe('Class {PigalleEnv}', () => {
  it('should be a function', () => {
    (PigalleEnv).should.be.a.Function()
  })
})

describe('Create a instance of {PigalleEnv} using <factory> method', () => {
  it('should be an object', () => {
    (PigalleEnv.factory()).should.be.an.Object()
  })

  it('should be an instance of {PigalleBaseClass}', () => {
    (PigalleEnv.factory()).should.be.an.instanceOf(PigalleEnv)
  })
})

describe('Create a instance of {PigalleEnv} with arguments', () => {
  it('should be an object', () => {
    (PigalleEnv.factory(EXAMPLE.OBJECT)).should.be.an.Object()
  })
})

describe('{PigalleEnv} with arguments', () => {
  const env = PigalleEnv.factory(EXAMPLE.OBJECT)

  it('getValue() should be an object', () => {
    (env.getValue()).should.be.an.Object()
  })

  it('getValue().NODE_ENV should be a string', () => {
    (env.getValue().NODE_ENV).should.be.a.String()
  })

  it('getValue().SECRET_KEY should be equal to "test_secret_key"', () => {
    (env.getValue().SECRET_KEY).should.be.equal('test_secret_key')
  })

  it('checksum() should be a string', () => {
    (env.checksum()).should.be.a.String()
  })

  it('checksum() should have a length === 40', () => {
    (env.checksum().length).should.be.equal(40)
  })

  /*
  it('compressed() should be a Buffer', () => {
    (env.compressed()).should.be.an.instanceOf(Buffer)
  })
  */

  it(`export() should have a length === ${EXAMPLE.EXPORT.length}`, () => {
    (env.export().length).should.be.equal(EXAMPLE.EXPORT.length)
  })

  it(`export() should be equal to ${EXAMPLE.EXPORT}`, () => {
    (env.export()).should.be.equal(EXAMPLE.EXPORT)
  })
})

describe('{PigalleEnv} from process.env', () => {
  process.env.PIGALLE_ENV = EXAMPLE.EXPORT
  const env = PigalleEnv.factory()

  it('getValue() should be an object', () => {
    (env.getValue()).should.be.an.Object()
  })

  it('getValue().NODE_ENV should be a string', () => {
    (env.getValue().NODE_ENV).should.be.a.String()
  })

  it('getValue().NODE_ENV should be equal to "test"', () => {
    (env.getValue().NODE_ENV).should.be.equal('test')
  })

  it('getValue().SECRET_KEY should be equal to "test_secret_key"', () => {
    (env.getValue().SECRET_KEY).should.be.equal('test_secret_key')
  })

  it('checksum() should be a string', () => {
    (env.checksum()).should.be.a.String()
  })

  it('checksum() should have a length === 40', () => {
    (env.checksum().length).should.be.equal(40)
  })

  /**
  it('compressed() should be a Buffer', () => {
    (env.compressed()).should.be.an.instanceOf(Buffer)
  })
   */

  it(`export() should have a length === ${EXAMPLE.EXPORT.length}`, () => {
    (env.export().length).should.be.equal(EXAMPLE.EXPORT.length)
  })

  it(`export() should be equal to ${EXAMPLE.EXPORT}`, () => {
    (env.export()).should.be.equal(EXAMPLE.EXPORT)
  })
})
