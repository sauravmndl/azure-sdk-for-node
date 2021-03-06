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
 * Initializes a new instance of the StorageAccountCreateParameters class.
 * @constructor
 * The parameters used when creating a storage account.
 *
 * @member {object} sku Required. Gets or sets the sku name.
 *
 * @member {string} [sku.name] Gets or sets the sku name. Required for account
 * creation; optional for update. Note that in older versions, sku name was
 * called accountType. Possible values include: 'Standard_LRS', 'Standard_GRS',
 * 'Standard_RAGRS', 'Standard_ZRS', 'Premium_LRS'
 *
 * @member {string} [sku.tier] Gets the sku tier. This is based on the SKU
 * name. Possible values include: 'Standard', 'Premium'
 *
 * @member {string} kind Required. Indicates the type of storage account.
 * Possible values include: 'Storage', 'BlobStorage'
 *
 * @member {string} location Required. Gets or sets the location of the
 * resource. This will be one of the supported and registered Azure Geo Regions
 * (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource
 * cannot be changed once it is created, but if an identical geo region is
 * specified on update, the request will succeed.
 *
 * @member {object} [tags] Gets or sets a list of key value pairs that describe
 * the resource. These tags can be used for viewing and grouping this resource
 * (across resource groups). A maximum of 15 tags can be provided for a
 * resource. Each tag must have a key with a length no greater than 128
 * characters and a value with a length no greater than 256 characters.
 *
 * @member {object} [identity] The identity of the resource.
 *
 * @member {string} [identity.principalId] The principal ID of resource
 * identity.
 *
 * @member {string} [identity.tenantId] The tenant ID of resource.
 *
 * @member {object} [customDomain] User domain assigned to the storage account.
 * Name is the CNAME source. Only one custom domain is supported per storage
 * account at this time. To clear the existing custom domain, use an empty
 * string for the custom domain name property.
 *
 * @member {string} [customDomain.name] Gets or sets the custom domain name
 * assigned to the storage account. Name is the CNAME source.
 *
 * @member {boolean} [customDomain.useSubDomain] Indicates whether indirect
 * CName validation is enabled. Default value is false. This should only be set
 * on updates.
 *
 * @member {object} [encryption] Provides the encryption settings on the
 * account. If left unspecified the account encryption settings will remain the
 * same. The default setting is unencrypted.
 *
 * @member {object} [encryption.services] List of services which support
 * encryption.
 *
 * @member {object} [encryption.services.blob] The encryption function of the
 * blob storage service.
 *
 * @member {boolean} [encryption.services.blob.enabled] A boolean indicating
 * whether or not the service encrypts the data as it is stored.
 *
 * @member {date} [encryption.services.blob.lastEnabledTime] Gets a rough
 * estimate of the date/time when the encryption was last enabled by the user.
 * Only returned when encryption is enabled. There might be some unencrypted
 * blobs which were written after this time, as it is just a rough estimate.
 *
 * @member {object} [encryption.services.file] The encryption function of the
 * file storage service.
 *
 * @member {boolean} [encryption.services.file.enabled] A boolean indicating
 * whether or not the service encrypts the data as it is stored.
 *
 * @member {date} [encryption.services.file.lastEnabledTime] Gets a rough
 * estimate of the date/time when the encryption was last enabled by the user.
 * Only returned when encryption is enabled. There might be some unencrypted
 * blobs which were written after this time, as it is just a rough estimate.
 *
 * @member {object} [encryption.services.table] The encryption function of the
 * table storage service.
 *
 * @member {boolean} [encryption.services.table.enabled] A boolean indicating
 * whether or not the service encrypts the data as it is stored.
 *
 * @member {date} [encryption.services.table.lastEnabledTime] Gets a rough
 * estimate of the date/time when the encryption was last enabled by the user.
 * Only returned when encryption is enabled. There might be some unencrypted
 * blobs which were written after this time, as it is just a rough estimate.
 *
 * @member {object} [encryption.services.queue] The encryption function of the
 * queue storage service.
 *
 * @member {boolean} [encryption.services.queue.enabled] A boolean indicating
 * whether or not the service encrypts the data as it is stored.
 *
 * @member {date} [encryption.services.queue.lastEnabledTime] Gets a rough
 * estimate of the date/time when the encryption was last enabled by the user.
 * Only returned when encryption is enabled. There might be some unencrypted
 * blobs which were written after this time, as it is just a rough estimate.
 *
 * @member {string} [encryption.keySource] The encryption keySource (provider).
 * Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault.
 * Possible values include: 'Microsoft.Storage', 'Microsoft.Keyvault'
 *
 * @member {object} [encryption.keyVaultProperties] Properties provided by key
 * vault.
 *
 * @member {string} [encryption.keyVaultProperties.keyName] The name of
 * KeyVault key.
 *
 * @member {string} [encryption.keyVaultProperties.keyVersion] The version of
 * KeyVault key.
 *
 * @member {string} [encryption.keyVaultProperties.keyVaultUri] The Uri of
 * KeyVault.
 *
 * @member {object} [networkAcls] Network ACL
 *
 * @member {string} [networkAcls.bypass] Specifies whether traffic is bypassed
 * for Logging/Metrics/AzureServices. Possible values are any combination of
 * Logging|Metrics|AzureServices (For example, "Logging, Metrics"), or None to
 * bypass none of those traffics. Possible values include: 'None', 'Logging',
 * 'Metrics', 'AzureServices'
 *
 * @member {array} [networkAcls.virtualNetworkRules] Sets the virtual network
 * ACL rules
 *
 * @member {array} [networkAcls.ipRules] Sets the IP ACL rules
 *
 * @member {string} [networkAcls.defaultAction] Specifies the default action of
 * allow or deny when no other rules match. Possible values include: 'Allow',
 * 'Deny'
 *
 * @member {string} [accessTier] Required for storage accounts where kind =
 * BlobStorage. The access tier used for billing. Possible values include:
 * 'Hot', 'Cool'
 *
 * @member {boolean} [enableHttpsTrafficOnly] Allows https traffic only to
 * storage service if sets to true. Default value: false .
 *
 */
class StorageAccountCreateParameters {
  constructor() {
  }

  /**
   * Defines the metadata of StorageAccountCreateParameters
   *
   * @returns {object} metadata of StorageAccountCreateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageAccountCreateParameters',
      type: {
        name: 'Composite',
        className: 'StorageAccountCreateParameters',
        modelProperties: {
          sku: {
            required: true,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'Sku'
            }
          },
          kind: {
            required: true,
            serializedName: 'kind',
            type: {
              name: 'Enum',
              allowedValues: [ 'Storage', 'BlobStorage' ]
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          identity: {
            required: false,
            serializedName: 'identity',
            type: {
              name: 'Composite',
              className: 'Identity'
            }
          },
          customDomain: {
            required: false,
            serializedName: 'properties.customDomain',
            type: {
              name: 'Composite',
              className: 'CustomDomain'
            }
          },
          encryption: {
            required: false,
            serializedName: 'properties.encryption',
            type: {
              name: 'Composite',
              className: 'Encryption'
            }
          },
          networkAcls: {
            required: false,
            serializedName: 'properties.networkAcls',
            type: {
              name: 'Composite',
              className: 'StorageNetworkAcls'
            }
          },
          accessTier: {
            required: false,
            serializedName: 'properties.accessTier',
            type: {
              name: 'Enum',
              allowedValues: [ 'Hot', 'Cool' ]
            }
          },
          enableHttpsTrafficOnly: {
            required: false,
            serializedName: 'properties.supportsHttpsTrafficOnly',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = StorageAccountCreateParameters;
