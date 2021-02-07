/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EchaloasuerteJsSdk);
  }
}(this, function(expect, EchaloasuerteJsSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EchaloasuerteJsSdk.SecretSantaParticipants();
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

  describe('SecretSantaParticipants', function() {
    it('should create an instance of SecretSantaParticipants', function() {
      // uncomment below and update the code to test SecretSantaParticipants
      //var instane = new EchaloasuerteJsSdk.SecretSantaParticipants();
      //expect(instance).to.be.a(EchaloasuerteJsSdk.SecretSantaParticipants);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new EchaloasuerteJsSdk.SecretSantaParticipants();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new EchaloasuerteJsSdk.SecretSantaParticipants();
      //expect(instance).to.be();
    });

    it('should have the property exclusions (base name: "exclusions")', function() {
      // uncomment below and update the code to test the property exclusions
      //var instane = new EchaloasuerteJsSdk.SecretSantaParticipants();
      //expect(instance).to.be();
    });

  });

}));
