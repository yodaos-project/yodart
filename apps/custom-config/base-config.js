'use strict'
var CloudGW = require('@yoda/cloudgw')
var flora = require('./singleton-flora')
/**
 * base config class
 */
class BaseConfig {
  constructor (activity) {
    this.activity = activity
    this.floraAgent = flora.getInstance()
    this.cloudgw = null
  }

  /**
   * url map getter
   * @returns {null}
   */
  getUrlMap () {
    return null
  }

  /**
   * intent map getter
   * @returns {null}
   */
  getIntentMap () {
    return null
  }

  /**
   * ready for cloudgw
   * @param config
   */
  ready (cloudgwConfig) {
    this.cloudgw = new CloudGW(cloudgwConfig)
  }
}

module.exports = BaseConfig
