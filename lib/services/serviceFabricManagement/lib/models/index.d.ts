/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the ClusterVersionDetails class.
 * @constructor
 * The detail of the ServiceFabric runtime version result
 *
 * @member {string} [codeVersion] The ServiceFabric runtime version of the
 * cluster
 * @member {string} [supportExpiryUtc] The date of expiry of support of the
 * version
 * @member {string} [environment] Cluster operating system. Possible values
 * include: 'Windows', 'Linux'
 */
export interface ClusterVersionDetails {
  codeVersion?: string;
  supportExpiryUtc?: string;
  environment?: string;
}

/**
 * @class
 * Initializes a new instance of the ClusterCodeVersionsResult class.
 * @constructor
 * The result of the ServiceFabric runtime versions
 *
 * @member {string} [id] The identification of the result
 * @member {string} [name] The name of the result
 * @member {string} [type] The result resource type
 * @member {string} [codeVersion] The ServiceFabric runtime version of the
 * cluster
 * @member {string} [supportExpiryUtc] The date of expiry of support of the
 * version
 * @member {string} [environment] Cluster operating system. Possible values
 * include: 'Windows', 'Linux'
 */
export interface ClusterCodeVersionsResult {
  id?: string;
  name?: string;
  type?: string;
  codeVersion?: string;
  supportExpiryUtc?: string;
  environment?: string;
}

/**
 * @class
 * Initializes a new instance of the ClusterCodeVersionsListResult class.
 * @constructor
 * The list results of the ServiceFabric runtime versions
 *
 * @member {array} [value]
 * @member {string} [nextLink] The URL to use for getting the next set of
 * results.
 */
export interface ClusterCodeVersionsListResult {
  value?: ClusterCodeVersionsResult[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the CertificateDescription class.
 * @constructor
 * Certificate details
 *
 * @member {string} thumbprint Thumbprint of the primary certificate
 * @member {string} [thumbprintSecondary] Thumbprint of the secondary
 * certificate
 * @member {string} [x509StoreName] The local certificate store location.
 * Possible values include: 'AddressBook', 'AuthRoot', 'CertificateAuthority',
 * 'Disallowed', 'My', 'Root', 'TrustedPeople', 'TrustedPublisher'
 */
export interface CertificateDescription {
  thumbprint: string;
  thumbprintSecondary?: string;
  x509StoreName?: string;
}

/**
 * @class
 * Initializes a new instance of the SettingsParameterDescription class.
 * @constructor
 * ServiceFabric settings under sections
 *
 * @member {string} name The name of settings property
 * @member {string} value The value of the property
 */
export interface SettingsParameterDescription {
  name: string;
  value: string;
}

/**
 * @class
 * Initializes a new instance of the SettingsSectionDescription class.
 * @constructor
 * ServiceFabric section settings
 *
 * @member {string} name The name of settings section
 * @member {array} parameters Collection of settings in the section, each
 * setting is a tuple consisting of setting name and value
 */
export interface SettingsSectionDescription {
  name: string;
  parameters: SettingsParameterDescription[];
}

/**
 * @class
 * Initializes a new instance of the EndpointRangeDescription class.
 * @constructor
 * Port range details
 *
 * @member {number} startPort Starting port of a range of ports
 * @member {number} endPort End port of a range of ports
 */
export interface EndpointRangeDescription {
  startPort: number;
  endPort: number;
}

/**
 * @class
 * Initializes a new instance of the NodeTypeDescription class.
 * @constructor
 * Describes a node type in the cluster, each node type represents sub set of
 * nodes in the cluster
 *
 * @member {string} name Name of the node type
 * @member {object} [placementProperties] The placement tags applied to nodes
 * in the node type, which can be used to indicate where certain services
 * (workload) should run
 * @member {object} [capacities] The capacity tags applied to the nodes in the
 * node type, the cluster resource manager uses these tags to understand how
 * much of a resource a node has
 * @member {number} clientConnectionEndpointPort The TCP cluster management
 * endpoint port
 * @member {number} httpGatewayEndpointPort The HTTP cluster management
 * endpoint port
 * @member {string} [durabilityLevel] Nodetype durability Level. Possible
 * values include: 'Bronze', 'Silver', 'Gold'
 * @member {object} [applicationPorts] Ports used by applications
 * @member {number} [applicationPorts.startPort] Starting port of a range of
 * ports
 * @member {number} [applicationPorts.endPort] End port of a range of ports
 * @member {object} [ephemeralPorts] System assgined application ports
 * @member {number} [ephemeralPorts.startPort] Starting port of a range of
 * ports
 * @member {number} [ephemeralPorts.endPort] End port of a range of ports
 * @member {boolean} isPrimary Mark this as the primary node type
 * @member {number} vmInstanceCount The number of node instances in the node
 * type
 * @member {number} [reverseProxyEndpointPort] Endpoint used by reverse proxy
 */
export interface NodeTypeDescription {
  name: string;
  placementProperties?: { [propertyName: string]: string };
  capacities?: { [propertyName: string]: string };
  clientConnectionEndpointPort: number;
  httpGatewayEndpointPort: number;
  durabilityLevel?: string;
  applicationPorts?: EndpointRangeDescription;
  ephemeralPorts?: EndpointRangeDescription;
  isPrimary: boolean;
  vmInstanceCount: number;
  reverseProxyEndpointPort?: number;
}

/**
 * @class
 * Initializes a new instance of the ClientCertificateThumbprint class.
 * @constructor
 * Client certificate details using thumbprint
 *
 * @member {boolean} isAdmin Is this certificate used for admin access from the
 * client, if false, it is used or query only access
 * @member {string} certificateThumbprint Certificate thumbprint
 */
export interface ClientCertificateThumbprint {
  isAdmin: boolean;
  certificateThumbprint: string;
}

/**
 * @class
 * Initializes a new instance of the ClientCertificateCommonName class.
 * @constructor
 * Client certificate details using common name
 *
 * @member {boolean} isAdmin Is this certificate used for admin access from the
 * client, if false , it is used or query only access
 * @member {string} certificateCommonName Certificate common name to be granted
 * access; be carefull using wild card common names
 * @member {string} certificateIssuerThumbprint Certificate issuer thumbprint
 */
export interface ClientCertificateCommonName {
  isAdmin: boolean;
  certificateCommonName: string;
  certificateIssuerThumbprint: string;
}

/**
 * @class
 * Initializes a new instance of the ClusterHealthPolicy class.
 * @constructor
 * Defines a health policy used to evaluate the health of the cluster or of a
 * cluster node.
 *
 * @member {number} [maxPercentUnhealthyNodes] The maximum allowed percentage
 * of unhealthy nodes before reporting an error. For example, to allow 10% of
 * nodes to be unhealthy, this value would be 10.
 * @member {number} [maxPercentUnhealthyApplications] The maximum allowed
 * percentage of unhealthy applications before reporting an error. For example,
 * to allow 10% of applications to be unhealthy, this value would be 10.
 */
export interface ClusterHealthPolicy {
  maxPercentUnhealthyNodes?: number;
  maxPercentUnhealthyApplications?: number;
}

/**
 * @class
 * Initializes a new instance of the ClusterUpgradeDeltaHealthPolicy class.
 * @constructor
 * Delta health policy for the cluster
 *
 * @member {number} maxPercentDeltaUnhealthyNodes Additional unhealthy nodes
 * percentage
 * @member {number} maxPercentUpgradeDomainDeltaUnhealthyNodes Additional
 * unhealthy nodes percentage per upgrade domain
 * @member {number} maxPercentDeltaUnhealthyApplications Additional unhealthy
 * applications percentage
 */
export interface ClusterUpgradeDeltaHealthPolicy {
  maxPercentDeltaUnhealthyNodes: number;
  maxPercentUpgradeDomainDeltaUnhealthyNodes: number;
  maxPercentDeltaUnhealthyApplications: number;
}

/**
 * @class
 * Initializes a new instance of the ClusterUpgradePolicy class.
 * @constructor
 * Cluster upgrade policy
 *
 * @member {boolean} [overrideUserUpgradePolicy] Use the user defined upgrade
 * policy or not
 * @member {boolean} [forceRestart] Force node to restart or not
 * @member {string} upgradeReplicaSetCheckTimeout Timeout for replica set
 * upgrade to complete,it represents .Net TimeSpan
 * @member {string} healthCheckWaitDuration The length of time to wait after
 * completing an upgrade domain before performing health checks, it represents
 * .Net TimeSpan
 * @member {string} healthCheckStableDuration The length of time that health
 * checks must pass continuously,it represents .Net TimeSpan
 * @member {string} healthCheckRetryTimeout The length of time that health
 * checks can fail continuously,it represents .Net TimeSpan
 * @member {string} upgradeTimeout The upgrade timeout,it represents .Net
 * TimeSpan
 * @member {string} upgradeDomainTimeout The timeout for any upgrade domain,it
 * represents .Net TimeSpan
 * @member {object} healthPolicy Cluster health Policy
 * @member {number} [healthPolicy.maxPercentUnhealthyNodes] The maximum allowed
 * percentage of unhealthy nodes before reporting an error. For example, to
 * allow 10% of nodes to be unhealthy, this value would be 10.
 * @member {number} [healthPolicy.maxPercentUnhealthyApplications] The maximum
 * allowed percentage of unhealthy applications before reporting an error. For
 * example, to allow 10% of applications to be unhealthy, this value would be
 * 10.
 * @member {object} [deltaHealthPolicy] Delta health policy
 * @member {number} [deltaHealthPolicy.maxPercentDeltaUnhealthyNodes]
 * Additional unhealthy nodes percentage
 * @member {number}
 * [deltaHealthPolicy.maxPercentUpgradeDomainDeltaUnhealthyNodes] Additional
 * unhealthy nodes percentage per upgrade domain
 * @member {number} [deltaHealthPolicy.maxPercentDeltaUnhealthyApplications]
 * Additional unhealthy applications percentage
 */
export interface ClusterUpgradePolicy {
  overrideUserUpgradePolicy?: boolean;
  forceRestart?: boolean;
  upgradeReplicaSetCheckTimeout: string;
  healthCheckWaitDuration: string;
  healthCheckStableDuration: string;
  healthCheckRetryTimeout: string;
  upgradeTimeout: string;
  upgradeDomainTimeout: string;
  healthPolicy: ClusterHealthPolicy;
  deltaHealthPolicy?: ClusterUpgradeDeltaHealthPolicy;
}

/**
 * @class
 * Initializes a new instance of the DiagnosticsStorageAccountConfig class.
 * @constructor
 * Diagnostics storage account config
 *
 * @member {string} storageAccountName Diagnostics storage account name
 * @member {string} protectedAccountKeyName Protected Diagnostics storage key
 * name
 * @member {string} blobEndpoint Diagnostics storage account blob endpoint
 * @member {string} queueEndpoint Diagnostics storage account queue endpoint
 * @member {string} tableEndpoint Diagnostics storage account table endpoint
 */
export interface DiagnosticsStorageAccountConfig {
  storageAccountName: string;
  protectedAccountKeyName: string;
  blobEndpoint: string;
  queueEndpoint: string;
  tableEndpoint: string;
}

/**
 * @class
 * Initializes a new instance of the AzureActiveDirectory class.
 * @constructor
 * The settings to enable AAD authentication on the cluster
 *
 * @member {string} [tenantId] Azure active directory tenant id
 * @member {string} [clusterApplication] Azure active directory cluster
 * application id
 * @member {string} [clientApplication] Azure active directory client
 * application id
 */
export interface AzureActiveDirectory {
  tenantId?: string;
  clusterApplication?: string;
  clientApplication?: string;
}

/**
 * @class
 * Initializes a new instance of the ClusterUpdateParameters class.
 * @constructor
 * Cluster update request
 *
 * @member {string} [reliabilityLevel] This level is used to set the number of
 * replicas of the system services. Possible values include: 'Bronze',
 * 'Silver', 'Gold'
 * @member {string} [upgradeMode] Cluster upgrade mode indicates if fabric
 * upgrade is initiated automatically by the system or not. Possible values
 * include: 'Automatic', 'Manual'
 * @member {string} [clusterCodeVersion] The ServiceFabric code version, if set
 * it, please make sure you have set upgradeMode to Manual, otherwise ,it will
 * fail, if you are using PUT new cluster, you can get the version by using
 * ClusterVersions_List, if you are updating existing cluster, you can get the
 * availableClusterVersions from Clusters_Get
 * @member {object} [certificate] This primay certificate will be used as
 * cluster node to node security, SSL certificate for cluster management
 * endpoint and default admin client, the certificate should exist in the
 * virtual machine scale sets or Azure key vault, before you add it. It will
 * override original value
 * @member {string} [certificate.thumbprint] Thumbprint of the primary
 * certificate
 * @member {string} [certificate.thumbprintSecondary] Thumbprint of the
 * secondary certificate
 * @member {string} [certificate.x509StoreName] The local certificate store
 * location. Possible values include: 'AddressBook', 'AuthRoot',
 * 'CertificateAuthority', 'Disallowed', 'My', 'Root', 'TrustedPeople',
 * 'TrustedPublisher'
 * @member {array} [clientCertificateThumbprints] The client thumbprint
 * details, it is used for client access for cluster operation, it will
 * override existing collection
 * @member {array} [clientCertificateCommonNames] List of client certificates
 * to whitelist based on common names.
 * @member {array} [fabricSettings] List of custom fabric settings to configure
 * the cluster, Note, it will overwrite existing collection
 * @member {object} [reverseProxyCertificate] Certificate for the reverse proxy
 * @member {string} [reverseProxyCertificate.thumbprint] Thumbprint of the
 * primary certificate
 * @member {string} [reverseProxyCertificate.thumbprintSecondary] Thumbprint of
 * the secondary certificate
 * @member {string} [reverseProxyCertificate.x509StoreName] The local
 * certificate store location. Possible values include: 'AddressBook',
 * 'AuthRoot', 'CertificateAuthority', 'Disallowed', 'My', 'Root',
 * 'TrustedPeople', 'TrustedPublisher'
 * @member {array} [nodeTypes] The list of nodetypes that make up the cluster,
 * it will override
 * @member {object} [upgradeDescription] The policy to use when upgrading the
 * cluster.
 * @member {boolean} [upgradeDescription.overrideUserUpgradePolicy] Use the
 * user defined upgrade policy or not
 * @member {boolean} [upgradeDescription.forceRestart] Force node to restart or
 * not
 * @member {string} [upgradeDescription.upgradeReplicaSetCheckTimeout] Timeout
 * for replica set upgrade to complete,it represents .Net TimeSpan
 * @member {string} [upgradeDescription.healthCheckWaitDuration] The length of
 * time to wait after completing an upgrade domain before performing health
 * checks, it represents .Net TimeSpan
 * @member {string} [upgradeDescription.healthCheckStableDuration] The length
 * of time that health checks must pass continuously,it represents .Net
 * TimeSpan
 * @member {string} [upgradeDescription.healthCheckRetryTimeout] The length of
 * time that health checks can fail continuously,it represents .Net TimeSpan
 * @member {string} [upgradeDescription.upgradeTimeout] The upgrade timeout,it
 * represents .Net TimeSpan
 * @member {string} [upgradeDescription.upgradeDomainTimeout] The timeout for
 * any upgrade domain,it represents .Net TimeSpan
 * @member {object} [upgradeDescription.healthPolicy] Cluster health Policy
 * @member {number} [upgradeDescription.healthPolicy.maxPercentUnhealthyNodes]
 * The maximum allowed percentage of unhealthy nodes before reporting an error.
 * For example, to allow 10% of nodes to be unhealthy, this value would be 10.
 * @member {number}
 * [upgradeDescription.healthPolicy.maxPercentUnhealthyApplications] The
 * maximum allowed percentage of unhealthy applications before reporting an
 * error. For example, to allow 10% of applications to be unhealthy, this value
 * would be 10.
 * @member {object} [upgradeDescription.deltaHealthPolicy] Delta health policy
 * @member {number}
 * [upgradeDescription.deltaHealthPolicy.maxPercentDeltaUnhealthyNodes]
 * Additional unhealthy nodes percentage
 * @member {number}
 * [upgradeDescription.deltaHealthPolicy.maxPercentUpgradeDomainDeltaUnhealthyNodes]
 * Additional unhealthy nodes percentage per upgrade domain
 * @member {number}
 * [upgradeDescription.deltaHealthPolicy.maxPercentDeltaUnhealthyApplications]
 * Additional unhealthy applications percentage
 * @member {object} [tags] Cluster update parameters
 */
export interface ClusterUpdateParameters {
  reliabilityLevel?: string;
  upgradeMode?: string;
  clusterCodeVersion?: string;
  certificate?: CertificateDescription;
  clientCertificateThumbprints?: ClientCertificateThumbprint[];
  clientCertificateCommonNames?: ClientCertificateCommonName[];
  fabricSettings?: SettingsSectionDescription[];
  reverseProxyCertificate?: CertificateDescription;
  nodeTypes?: NodeTypeDescription[];
  upgradeDescription?: ClusterUpgradePolicy;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * The resource model definition.
 *
 * @member {string} [id] Resource ID.
 * @member {string} [name] Resource name.
 * @member {string} [type] Resource type.
 * @member {string} location Resource location.
 * @member {object} [tags] Resource tags.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Cluster class.
 * @constructor
 * The cluster resource
 *
 * @member {array} [availableClusterVersions] The available cluster code
 * version which the cluster can upgrade to, note that you must choose
 * upgradeMode to manual to upgrade to
 * @member {string} [clusterId] The unique identifier for the cluster resource
 * @member {string} [clusterState] The state for the cluster. Possible values
 * include: 'WaitingForNodes', 'Deploying', 'BaselineUpgrade',
 * 'UpdatingUserConfiguration', 'UpdatingUserCertificate',
 * 'UpdatingInfrastructure', 'EnforcingClusterVersion',
 * 'UpgradeServiceUnreachable', 'AutoScale', 'Ready'
 * @member {string} [clusterEndpoint] The endpoint for the cluster connecting
 * to servicefabric resource provider
 * @member {string} [clusterCodeVersion] The ServiceFabric code version running
 * in your cluster
 * @member {object} [certificate] This primay certificate will be used as
 * cluster node to node security, SSL certificate for cluster management
 * endpoint and default admin client
 * @member {string} [certificate.thumbprint] Thumbprint of the primary
 * certificate
 * @member {string} [certificate.thumbprintSecondary] Thumbprint of the
 * secondary certificate
 * @member {string} [certificate.x509StoreName] The local certificate store
 * location. Possible values include: 'AddressBook', 'AuthRoot',
 * 'CertificateAuthority', 'Disallowed', 'My', 'Root', 'TrustedPeople',
 * 'TrustedPublisher'
 * @member {string} [reliabilityLevel] Cluster reliability level indicates
 * replica set size of system service. Possible values include: 'Bronze',
 * 'Silver', 'Gold', 'Platinum'
 * @member {string} [upgradeMode] Cluster upgrade mode indicates if fabric
 * upgrade is initiated automatically by the system or not. Possible values
 * include: 'Automatic', 'Manual'
 * @member {array} [clientCertificateThumbprints] The client thumbprint details
 * ,it is used for client access for cluster operation
 * @member {array} [clientCertificateCommonNames] List of client certificates
 * to whitelist based on common names
 * @member {array} [fabricSettings] List of custom fabric settings to configure
 * the cluster.
 * @member {object} [reverseProxyCertificate] The server certificate used by
 * reverse proxy
 * @member {string} [reverseProxyCertificate.thumbprint] Thumbprint of the
 * primary certificate
 * @member {string} [reverseProxyCertificate.thumbprintSecondary] Thumbprint of
 * the secondary certificate
 * @member {string} [reverseProxyCertificate.x509StoreName] The local
 * certificate store location. Possible values include: 'AddressBook',
 * 'AuthRoot', 'CertificateAuthority', 'Disallowed', 'My', 'Root',
 * 'TrustedPeople', 'TrustedPublisher'
 * @member {string} managementEndpoint The http management endpoint of the
 * cluster
 * @member {array} nodeTypes The list of nodetypes that make up the cluster
 * @member {object} [azureActiveDirectory] The settings to enable AAD
 * authentication on the cluster
 * @member {string} [azureActiveDirectory.tenantId] Azure active directory
 * tenant id
 * @member {string} [azureActiveDirectory.clusterApplication] Azure active
 * directory cluster application id
 * @member {string} [azureActiveDirectory.clientApplication] Azure active
 * directory client application id
 * @member {string} [provisioningState] The provisioning state of the cluster
 * resource. Possible values include: 'Updating', 'Succeeded', 'Failed',
 * 'Canceled'
 * @member {string} [vmImage] The name of VM image VMSS has been configured
 * with. Generic names such as Windows or Linux can be used.
 * @member {object} [diagnosticsStorageAccountConfig] The storage diagnostics
 * account configuration details
 * @member {string} [diagnosticsStorageAccountConfig.storageAccountName]
 * Diagnostics storage account name
 * @member {string} [diagnosticsStorageAccountConfig.protectedAccountKeyName]
 * Protected Diagnostics storage key name
 * @member {string} [diagnosticsStorageAccountConfig.blobEndpoint] Diagnostics
 * storage account blob endpoint
 * @member {string} [diagnosticsStorageAccountConfig.queueEndpoint] Diagnostics
 * storage account queue endpoint
 * @member {string} [diagnosticsStorageAccountConfig.tableEndpoint] Diagnostics
 * storage account table endpoint
 * @member {object} [upgradeDescription] The policy to use when upgrading the
 * cluster.
 * @member {boolean} [upgradeDescription.overrideUserUpgradePolicy] Use the
 * user defined upgrade policy or not
 * @member {boolean} [upgradeDescription.forceRestart] Force node to restart or
 * not
 * @member {string} [upgradeDescription.upgradeReplicaSetCheckTimeout] Timeout
 * for replica set upgrade to complete,it represents .Net TimeSpan
 * @member {string} [upgradeDescription.healthCheckWaitDuration] The length of
 * time to wait after completing an upgrade domain before performing health
 * checks, it represents .Net TimeSpan
 * @member {string} [upgradeDescription.healthCheckStableDuration] The length
 * of time that health checks must pass continuously,it represents .Net
 * TimeSpan
 * @member {string} [upgradeDescription.healthCheckRetryTimeout] The length of
 * time that health checks can fail continuously,it represents .Net TimeSpan
 * @member {string} [upgradeDescription.upgradeTimeout] The upgrade timeout,it
 * represents .Net TimeSpan
 * @member {string} [upgradeDescription.upgradeDomainTimeout] The timeout for
 * any upgrade domain,it represents .Net TimeSpan
 * @member {object} [upgradeDescription.healthPolicy] Cluster health Policy
 * @member {number} [upgradeDescription.healthPolicy.maxPercentUnhealthyNodes]
 * The maximum allowed percentage of unhealthy nodes before reporting an error.
 * For example, to allow 10% of nodes to be unhealthy, this value would be 10.
 * @member {number}
 * [upgradeDescription.healthPolicy.maxPercentUnhealthyApplications] The
 * maximum allowed percentage of unhealthy applications before reporting an
 * error. For example, to allow 10% of applications to be unhealthy, this value
 * would be 10.
 * @member {object} [upgradeDescription.deltaHealthPolicy] Delta health policy
 * @member {number}
 * [upgradeDescription.deltaHealthPolicy.maxPercentDeltaUnhealthyNodes]
 * Additional unhealthy nodes percentage
 * @member {number}
 * [upgradeDescription.deltaHealthPolicy.maxPercentUpgradeDomainDeltaUnhealthyNodes]
 * Additional unhealthy nodes percentage per upgrade domain
 * @member {number}
 * [upgradeDescription.deltaHealthPolicy.maxPercentDeltaUnhealthyApplications]
 * Additional unhealthy applications percentage
 */
export interface Cluster extends Resource {
  readonly availableClusterVersions?: ClusterVersionDetails[];
  readonly clusterId?: string;
  readonly clusterState?: string;
  readonly clusterEndpoint?: string;
  clusterCodeVersion?: string;
  certificate?: CertificateDescription;
  reliabilityLevel?: string;
  upgradeMode?: string;
  clientCertificateThumbprints?: ClientCertificateThumbprint[];
  clientCertificateCommonNames?: ClientCertificateCommonName[];
  fabricSettings?: SettingsSectionDescription[];
  reverseProxyCertificate?: CertificateDescription;
  managementEndpoint: string;
  nodeTypes: NodeTypeDescription[];
  azureActiveDirectory?: AzureActiveDirectory;
  readonly provisioningState?: string;
  vmImage?: string;
  diagnosticsStorageAccountConfig?: DiagnosticsStorageAccountConfig;
  upgradeDescription?: ClusterUpgradePolicy;
}

/**
 * @class
 * Initializes a new instance of the ClusterListResult class.
 * @constructor
 * Cluster list results
 *
 * @member {array} [value]
 * @member {string} [nextLink] The URL to use for getting the next set of
 * results.
 */
export interface ClusterListResult {
  value?: Cluster[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the AvailableOperationDisplay class.
 * @constructor
 * Operation supported by ServiceFabric resource provider
 *
 * @member {string} [provider] Provider name
 * @member {string} [resource] Resource name
 * @member {string} [operation] Operation name
 * @member {string} [description] Operation description
 */
export interface AvailableOperationDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationResult class.
 * @constructor
 * Available operation list result
 *
 * @member {string} [name] Result name
 * @member {object} [display] Dispaly of the result
 * @member {string} [display.provider] Provider name
 * @member {string} [display.resource] Resource name
 * @member {string} [display.operation] Operation name
 * @member {string} [display.description] Operation description
 * @member {string} [origin] Origin result
 * @member {string} [nextLink] The URL to use for getting the next set of
 * results.
 */
export interface OperationResult {
  name?: string;
  display?: AvailableOperationDisplay;
  origin?: string;
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of the request to list ServiceFabric operations. It contains a list
 * of operations and a URL link to get the next set of results.
 *
 * @member {array} [value] List of ServiceFabric operations supported by the
 * Microsoft.ServiceFabric resource provider.
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 */
export interface OperationListResult {
  readonly value?: OperationResult[];
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorModelError class.
 * @constructor
 * The error detail
 *
 * @member {string} [code] The error code
 * @member {string} [message] The error message
 */
export interface ErrorModelError {
  code?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * The structure of the error
 *
 * @member {object} [error] The error detail
 * @member {string} [error.code] The error code
 * @member {string} [error.message] The error message
 */
export interface ErrorModel {
  error?: ErrorModelError;
}

/**
 * @class
 * Initializes a new instance of the ClusterListResult class.
 * @constructor
 * Cluster list results
 *
 * @member {array} [value]
 * @member {string} [nextLink] The URL to use for getting the next set of
 * results.
 */
export interface ClusterListResult {
  value?: Cluster[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ClusterCodeVersionsListResult class.
 * @constructor
 * The list results of the ServiceFabric runtime versions
 *
 * @member {array} [value]
 * @member {string} [nextLink] The URL to use for getting the next set of
 * results.
 */
export interface ClusterCodeVersionsListResult {
  value?: ClusterCodeVersionsResult[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of the request to list ServiceFabric operations. It contains a list
 * of operations and a URL link to get the next set of results.
 *
 * @member {array} [value] List of ServiceFabric operations supported by the
 * Microsoft.ServiceFabric resource provider.
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 */
export interface OperationListResult {
  readonly value?: OperationResult[];
  readonly nextLink?: string;
}


/**
 * @class
 * Initializes a new instance of the ClusterListResult class.
 * @constructor
 * Cluster list results
 *
 * @member {string} [nextLink] The URL to use for getting the next set of
 * results.
 */
export interface ClusterListResult extends Array<Cluster> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ClusterCodeVersionsListResult class.
 * @constructor
 * The list results of the ServiceFabric runtime versions
 *
 * @member {string} [nextLink] The URL to use for getting the next set of
 * results.
 */
export interface ClusterCodeVersionsListResult extends Array<ClusterCodeVersionsResult> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of the request to list ServiceFabric operations. It contains a list
 * of operations and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 */
export interface OperationListResult extends Array<OperationResult> {
  readonly nextLink?: string;
}
