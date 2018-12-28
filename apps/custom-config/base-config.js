'use strict'
var CloudGW = require('@yoda/cloudgw')
var flora = require('./singleton-flora')()
/**
 * base config class
 */
class BaseConfig {
  constructor (activity) {
    this.activity = activity
    this.floraAgent = flora
    this.cloudgw = null
  }

  /**
   * url map getter
   * @returns {null} return null by default
   */
  getUrlMap () {
    return null
  }

  /**
   * intent map getter
   * @returns {null} return null by default
   */
  getIntentMap () {
    return null
  }

  /**
   * ready for cloudgw
   * @param {object} cloudgwConfig
   */
  ready (cloudgwConfig) {
    this.cloudgw = new CloudGW(cloudgwConfig)
  }
}

module.exports = BaseConfig
