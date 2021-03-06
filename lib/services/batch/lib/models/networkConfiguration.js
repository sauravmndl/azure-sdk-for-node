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
 * Initializes a new instance of the NetworkConfiguration class.
 * @constructor
 * The network configuration for a pool.
 *
 * @member {string} [subnetId] The ARM resource identifier of the virtual
 * network subnet which the compute nodes of the pool will join. This is of the
 * form
 * /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}.
 * The virtual network must be in the same region and subscription as the Azure
 * Batch account. The specified subnet should have enough free IP addresses to
 * accommodate the number of nodes in the pool. If the subnet doesn't have
 * enough free IP addresses, the pool will partially allocate compute nodes,
 * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
 * must have the 'Classic Virtual Machine Contributor' Role-Based Access
 * Control (RBAC) role for the specified VNet. The specified subnet must allow
 * communication from the Azure Batch service to be able to schedule tasks on
 * the compute nodes. This can be verified by checking if the specified VNet
 * has any associated Network Security Groups (NSG). If communication to the
 * compute nodes in the specified subnet is denied by an NSG, then the Batch
 * service will set the state of the compute nodes to unusable. For pools
 * created via virtualMachineConfiguration the Batch account must have
 * poolAllocationMode userSubscription in order to use a VNet.
 *
 * @member {object} [endpointConfiguration] The configuration for endpoints on
 * compute nodes in the Batch pool. Pool endpoint configuration is only
 * supported on pools with the virtualMachineConfiguration property.
 *
 * @member {array} [endpointConfiguration.inboundNATPools] The maximum number
 * of inbound NAT pools per Batch pool is 5. If the maximum number of inbound
 * NAT pools is exceeded the request fails with HTTP status code 400.
 *
 */
class NetworkConfiguration {
  constructor() {
  }

  /**
   * Defines the metadata of NetworkConfiguration
   *
   * @returns {object} metadata of NetworkConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NetworkConfiguration',
      type: {
        name: 'Composite',
        className: 'NetworkConfiguration',
        modelProperties: {
          subnetId: {
            required: false,
            serializedName: 'subnetId',
            type: {
              name: 'String'
            }
          },
          endpointConfiguration: {
            required: false,
            serializedName: 'endpointConfiguration',
            type: {
              name: 'Composite',
              className: 'PoolEndpointConfiguration'
            }
          }
        }
      }
    };
  }
}

module.exports = NetworkConfiguration;
