/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the PolicyAssignmentListResult class.
 * @constructor
 * Policy assignment list operation result.
 * @member {array} [value] Policy assignment list.
 * 
 * @member {string} [nextLink] Gets or sets the URL to get the next set of
 * policy assignment results.
 * 
 */
function PolicyAssignmentListResult() {
}

util.inherits(PolicyAssignmentListResult, Array);

/**
 * Defines the metadata of PolicyAssignmentListResult
 *
 * @returns {object} metadata of PolicyAssignmentListResult
 *
 */
PolicyAssignmentListResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PolicyAssignmentListResult',
    type: {
      name: 'Composite',
      className: 'PolicyAssignmentListResult',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'PolicyAssignmentElementType',
                type: {
                  name: 'Composite',
                  className: 'PolicyAssignment'
                }
            }
          }
        },
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PolicyAssignmentListResult;