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
 * Initializes a new instance of the JobPipelineRunInformation class.
 * @constructor
 * Run info for a specific job pipeline.
 *
 * @member {uuid} [runId] the run identifier of an instance of pipeline
 * executions (a GUID).
 *
 * @member {date} [lastSubmitTime] the time this instance was last submitted.
 *
 */
class JobPipelineRunInformation {
  constructor() {
  }

  /**
   * Defines the metadata of JobPipelineRunInformation
   *
   * @returns {object} metadata of JobPipelineRunInformation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobPipelineRunInformation',
      type: {
        name: 'Composite',
        className: 'JobPipelineRunInformation',
        modelProperties: {
          runId: {
            required: false,
            readOnly: true,
            serializedName: 'runId',
            type: {
              name: 'String'
            }
          },
          lastSubmitTime: {
            required: false,
            readOnly: true,
            serializedName: 'lastSubmitTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = JobPipelineRunInformation;
