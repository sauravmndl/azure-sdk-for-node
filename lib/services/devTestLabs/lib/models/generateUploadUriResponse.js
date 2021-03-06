/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the GenerateUploadUriResponse class.
 * @constructor
 * Reponse body for generating an upload URI.
 *
 * @member {string} [uploadUri] The upload URI for the VHD.
 *
 */
class GenerateUploadUriResponse {
  constructor() {
  }

  /**
   * Defines the metadata of GenerateUploadUriResponse
   *
   * @returns {object} metadata of GenerateUploadUriResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GenerateUploadUriResponse',
      type: {
        name: 'Composite',
        className: 'GenerateUploadUriResponse',
        modelProperties: {
          uploadUri: {
            required: false,
            serializedName: 'uploadUri',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GenerateUploadUriResponse;
