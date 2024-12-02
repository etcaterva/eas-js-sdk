/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
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
    instance = new EchaloasuerteJsSdk.InstagramFields();
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

  describe('InstagramFields', function() {
    it('should create an instance of InstagramFields', function() {
      // uncomment below and update the code to test InstagramFields
      //var instance = new EchaloasuerteJsSdk.InstagramFields();
      //expect(instance).to.be.a(EchaloasuerteJsSdk.InstagramFields);
    });

    it('should have the property prizes (base name: "prizes")', function() {
      // uncomment below and update the code to test the property prizes
      //var instance = new EchaloasuerteJsSdk.InstagramFields();
      //expect(instance).to.be();
    });

    it('should have the property useLikes (base name: "use_likes")', function() {
      // uncomment below and update the code to test the property useLikes
      //var instance = new EchaloasuerteJsSdk.InstagramFields();
      //expect(instance).to.be();
    });

    it('should have the property minMentions (base name: "min_mentions")', function() {
      // uncomment below and update the code to test the property minMentions
      //var instance = new EchaloasuerteJsSdk.InstagramFields();
      //expect(instance).to.be();
    });

    it('should have the property postUrl (base name: "post_url")', function() {
      // uncomment below and update the code to test the property postUrl
      //var instance = new EchaloasuerteJsSdk.InstagramFields();
      //expect(instance).to.be();
    });

  });

}));
