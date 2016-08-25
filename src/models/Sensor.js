/**
 * Samsara API
 * 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SamsaraApi) {
      root.SamsaraApi = {};
    }
    root.SamsaraApi.Sensor = factory(root.SamsaraApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Sensor model module.
   * @module models/Sensor
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Sensor</code>.
   * Contains information about a sensor.
   * @alias module:models/Sensor
   * @class
   * @param id {Integer} ID of the sensor.
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;


  };

  /**
   * Constructs a <code>Sensor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/Sensor} obj Optional instance to populate.
   * @return {module:models/Sensor} The populated <code>Sensor</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('macAddress')) {
        obj['macAddress'] = ApiClient.convertToType(data['macAddress'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the sensor.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Name of the sensor.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * MAC address of the sensor.
   * @member {String} macAddress
   */
  exports.prototype['macAddress'] = undefined;



  return exports;
}));


