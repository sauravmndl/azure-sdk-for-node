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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ClientGroupMember class.
 * @constructor
 * Represents a member of a client group
 *
 * @member {string} [ipAddress] IP address.
 *
 * @member {object} [port] Port into which this client connected
 *
 * @member {object} [port.machine] Machine hosting the port.
 *
 * @member {string} [port.ipAddress] IP address of the port.
 *
 * @member {number} [port.portNumber] Port number.
 *
 * @member {array} [processes] Processes accepting on the above port that
 * received connections from this client.
 *
 */
class ClientGroupMember extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ClientGroupMember
   *
   * @returns {object} metadata of ClientGroupMember
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ClientGroupMember',
      type: {
        name: 'Composite',
        className: 'ClientGroupMember',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          ipAddress: {
            required: false,
            serializedName: 'properties.ipAddress',
            type: {
              name: 'String'
            }
          },
          port: {
            required: false,
            serializedName: 'properties.port',
            type: {
              name: 'Composite',
              className: 'PortReference'
            }
          },
          processes: {
            required: false,
            serializedName: 'properties.processes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ProcessReferenceElementType',
                  type: {
                    name: 'Composite',
                    className: 'ProcessReference'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ClientGroupMember;