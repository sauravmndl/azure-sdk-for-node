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
 * Initializes a new instance of the ResumeApplicationUpgrade class.
 * @constructor
 * The upgrade of the resume application
 *
 * @member {string} [upgradeDomainName]
 *
 */
class ResumeApplicationUpgrade {
  constructor() {
  }

  /**
   * Defines the metadata of ResumeApplicationUpgrade
   *
   * @returns {object} metadata of ResumeApplicationUpgrade
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResumeApplicationUpgrade',
      type: {
        name: 'Composite',
        className: 'ResumeApplicationUpgrade',
        modelProperties: {
          upgradeDomainName: {
            required: false,
            serializedName: 'UpgradeDomainName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ResumeApplicationUpgrade;