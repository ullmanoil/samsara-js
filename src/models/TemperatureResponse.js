/**
 * Samsara API
 * # Introduction The Samsara REST API lets you interact with the Samsara Cloud from anything that can send an HTTP request. With the Samsara API you can build powerful applications and custom solutions with sensor data.  Samsara has endpoints available to track and analyze sensors, vehicles, and entire fleets. If you’re familiar with what you can build with a REST API, the following API reference guide will be your go-to resource.  API access to the Samsara cloud is available to all Samsara administrators. If you’d like to try the API, [contact us](https://www.samsara.com/free-trial). The API is currently in beta and may be subject to frequent changes.  # Connecting to the API There are two ways to connect to the API. If you prefer to use the API in Javascript or Python, we supply SDKs which you can download here: [Javascript SDK](https://github.com/samsarahq/samsara-js), [Python SDK](https://github.com/samsarahq/samsara-python).  If you’d rather use another language to interact with the Samsara API, the endpoints and examples are in the reference guide below.  
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
    define(['ApiClient', 'models/TemperatureResponseSensors'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TemperatureResponseSensors'));
  } else {
    // Browser globals (root is window)
    if (!root.SamsaraApi) {
      root.SamsaraApi = {};
    }
    root.SamsaraApi.TemperatureResponse = factory(root.SamsaraApi.ApiClient, root.SamsaraApi.TemperatureResponseSensors);
  }
}(this, function(ApiClient, TemperatureResponseSensors) {
  'use strict';




  /**
   * The TemperatureResponse model module.
   * @module models/TemperatureResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TemperatureResponse</code>.
   * Contains the current temperatures of a sensor.
   * @alias module:models/TemperatureResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TemperatureResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/TemperatureResponse} obj Optional instance to populate.
   * @return {module:models/TemperatureResponse} The populated <code>TemperatureResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('groupId')) {
        obj['groupId'] = ApiClient.convertToType(data['groupId'], 'Integer');
      }
      if (data.hasOwnProperty('sensors')) {
        obj['sensors'] = ApiClient.convertToType(data['sensors'], [TemperatureResponseSensors]);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} groupId
   */
  exports.prototype['groupId'] = undefined;
  /**
   * @member {Array.<module:models/TemperatureResponseSensors>} sensors
   */
  exports.prototype['sensors'] = undefined;



  return exports;
}));


