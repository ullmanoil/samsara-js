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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SamsaraApi);
  }
}(this, function(expect, SamsaraApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SamsaraApi.FleetApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FleetApi', function() {
    describe('addFleetAddress', function() {
      it('should call addFleetAddress successfully', function(done) {
        //uncomment below and update the code to test addFleetAddress
        //instance.addFleetAddress(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFleetDispatchJobs', function() {
      it('should call createFleetDispatchJobs successfully', function(done) {
        //uncomment below and update the code to test createFleetDispatchJobs
        //instance.createFleetDispatchJobs(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFleet', function() {
      it('should call getFleet successfully', function(done) {
        //uncomment below and update the code to test getFleet
        //instance.getFleet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFleetDispatchJobs', function() {
      it('should call getFleetDispatchJobs successfully', function(done) {
        //uncomment below and update the code to test getFleetDispatchJobs
        //instance.getFleetDispatchJobs(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFleetDrivers', function() {
      it('should call getFleetDrivers successfully', function(done) {
        //uncomment below and update the code to test getFleetDrivers
        //instance.getFleetDrivers(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFleetHosLogs', function() {
      it('should call getFleetHosLogs successfully', function(done) {
        //uncomment below and update the code to test getFleetHosLogs
        //instance.getFleetHosLogs(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFleetLocations', function() {
      it('should call getFleetLocations successfully', function(done) {
        //uncomment below and update the code to test getFleetLocations
        //instance.getFleetLocations(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFleetTrips', function() {
      it('should call getFleetTrips successfully', function(done) {
        //uncomment below and update the code to test getFleetTrips
        //instance.getFleetTrips(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFleetDispatchJobs', function() {
      it('should call updateFleetDispatchJobs successfully', function(done) {
        //uncomment below and update the code to test updateFleetDispatchJobs
        //instance.updateFleetDispatchJobs(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVehicles', function() {
      it('should call updateVehicles successfully', function(done) {
        //uncomment below and update the code to test updateVehicles
        //instance.updateVehicles(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
