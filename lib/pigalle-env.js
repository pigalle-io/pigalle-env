// /* --------------------------------------------------------------------- *
//  * This file is part of pigalle.core.env                                 *
//  *                                                                       *
//  * Copyright (c) 2018 SAS 9 Février.                                     *
//  *                                                                       *
//  * Distributed under the MIT License                                     *
//  * (license terms are at http://opensource.org/licenses/MIT).            *
//  *                                                                       *
//  * --------------------------------------------------------------------- */

const crypto = require('crypto')
const process = require('process')
const zlib = require('zlib')
const _ = require('lodash')
const yaml = require('js-yaml')

const {PigalleBaseClass} = require('@pigalle/core.base.class')

const PIGALLE_KEYS = {
  VALUE: 'value',
  COMPRESSED_VALUE: 'compressed',
  CHECKSUM: 'checksum'
}

class PigalleEnv extends PigalleBaseClass {
  constructor (value) {
    super()
    if ((!value) && (process.env.PIGALLE_ENV)) {
      this.import(process.env.PIGALLE_ENV)
    } else {
      this.setValue(value)
    }
  }

  setValue (value = {}) {
    return this.set(PIGALLE_KEYS.VALUE, value).updateChecksum()
  }

  getValue () {
    return this.get(PIGALLE_KEYS.VALUE)
  }

  value () {
    return this.getValue()
  }

  merge (obj = {}) {
    return this.setValue(_.merge(this.value(), obj))
  }

  /**
  setCompressedValue(value) {
    return this.set(PIGALLE_KEYS.COMPRESSED_VALUE, value)
  }

  getCompressedValue() {
    return this.get(PIGALLE_KEYS.COMPRESSED_VALUE)
  }

  compressed() {
    return this.getCompressedValue()
  }
   */

  fromYAML (data) {
    return this.setValue(yaml.safeLoad(data))
  }

  fromJSON (data) {
    return this.setValue(JSON.parse(data))
  }

  toYAML () {
    return yaml.safeDump(this.getValue())
  }

  toJSON () {
    return JSON.stringify(this.getValue())
  }

  getChecksum () {
    return this.get(PIGALLE_KEYS.CHECKSUM)
  }

  checksum () {
    return this.getChecksum()
  }

  updateChecksum () {
    return this.set(PIGALLE_KEYS.CHECKSUM, PigalleEnv.getChecksum(this.toJSON()))
  }

  static getChecksum (s) {
    return crypto.createHash('sha1').update(s).digest('hex')
  }

  static inflate (data, level = 9) {
    return zlib.gzipSync(Buffer.from(data), {level: level})
  }

  static deflate (data) {
    return zlib.gunzipSync(data)
  }

  /*
  compress() {
    return this.setCompressedValue(PigalleEnv.inflate(this.toJSON()))
  }

  uncompress() {
    return this.setValue(PigalleEnv.deflate(this.getCompressedValue()))
  }
  */

  toBase64 () {
    return Buffer.from(this.toJSON()).toString('base64')
  }

  export () {
    return `${this.checksum()}${this.toBase64()}`
  }

  import (s) {
    const checksum = s.substring(0, 40)
    const data = Buffer.from(s.substring(40, s.length), 'base64').toString()
    if (checksum !== PigalleEnv.getChecksum(data)) {
      throw new Error('Checksum validation error')
    }
    this.fromJSON(data)
    return PigalleEnv.factory(data)
  }
}

module.exports = {}
module.exports.PigalleEnv = PigalleEnv
