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
 * Initializes a new instance of the Resource class.
 * @constructor
 * @member {string} [id] Resource Id
 * @member {string} [name] Resource name
 * @member {string} [type] Resource type
 * @member {object} [tags] Resource Tags
 * @member {string} [location] Resource Location
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  tags?: { [propertyName: string]: string };
  location?: string;
}

/**
 * @class
 * Initializes a new instance of the Location class.
 * @constructor
 * Location entity for given tenant.
 *
 * @member {string} hostName
 */
export interface Location extends Resource {
  hostName: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * @member {string} code
 * @member {string} message
 */
export interface ErrorModel {
  code: string;
  message: string;
}

/**
 * @class
 * Initializes a new instance of the LocationCollection class.
 * @constructor
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface LocationCollection {
  value: Location[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the GroupItem class.
 * @constructor
 * Group entity for Intune MAM.
 *
 * @member {string} friendlyName
 */
export interface GroupItem extends Resource {
  friendlyName: string;
}

/**
 * @class
 * Initializes a new instance of the GroupsCollection class.
 * @constructor
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface GroupsCollection {
  value: GroupItem[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the Application class.
 * @constructor
 * Application entity for Intune MAM.
 *
 * @member {string} friendlyName
 * @member {string} platform Possible values include: 'ios', 'android',
 * 'windows'. Default value: 'ios' .
 * @member {string} [appId]
 */
export interface Application extends Resource {
  friendlyName: string;
  platform: string;
  appId?: string;
}

/**
 * @class
 * Initializes a new instance of the ApplicationCollection class.
 * @constructor
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface ApplicationCollection {
  value: Application[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the IOSMAMPolicy class.
 * @constructor
 * iOS Policy entity for Intune MAM.
 *
 * @member {string} friendlyName
 * @member {string} [description]
 * @member {string} [appSharingFromLevel] Possible values include: 'none',
 * 'policyManagedApps', 'allApps'. Default value: 'none' .
 * @member {string} [appSharingToLevel] Possible values include: 'none',
 * 'policyManagedApps', 'allApps'. Default value: 'none' .
 * @member {string} [authentication] Possible values include: 'required',
 * 'notRequired'. Default value: 'required' .
 * @member {string} [clipboardSharingLevel] Possible values include: 'blocked',
 * 'policyManagedApps', 'policyManagedAppsWithPasteIn', 'allApps'. Default
 * value: 'blocked' .
 * @member {string} [dataBackup] Possible values include: 'allow', 'block'.
 * Default value: 'allow' .
 * @member {string} [fileSharingSaveAs] Possible values include: 'allow',
 * 'block'. Default value: 'allow' .
 * @member {string} [pin] Possible values include: 'required', 'notRequired'.
 * Default value: 'required' .
 * @member {number} [pinNumRetry]
 * @member {string} [deviceCompliance] Possible values include: 'enable',
 * 'disable'. Default value: 'enable' .
 * @member {string} [managedBrowser] Possible values include: 'required',
 * 'notRequired'. Default value: 'required' .
 * @member {moment.duration} [accessRecheckOfflineTimeout]
 * @member {moment.duration} [accessRecheckOnlineTimeout]
 * @member {moment.duration} [offlineWipeTimeout]
 * @member {number} [numOfApps]
 * @member {string} [groupStatus] Possible values include: 'notTargeted',
 * 'targeted'. Default value: 'notTargeted' .
 * @member {date} [lastModifiedTime]
 * @member {string} [fileEncryptionLevel] Possible values include:
 * 'deviceLocked', 'deviceLockedExceptFilesOpen', 'afterDeviceRestart',
 * 'useDeviceSettings'. Default value: 'deviceLocked' .
 * @member {string} [touchId] Possible values include: 'enable', 'disable'.
 * Default value: 'enable' .
 */
export interface IOSMAMPolicy extends Resource {
  friendlyName: string;
  description?: string;
  appSharingFromLevel?: string;
  appSharingToLevel?: string;
  authentication?: string;
  clipboardSharingLevel?: string;
  dataBackup?: string;
  fileSharingSaveAs?: string;
  pin?: string;
  pinNumRetry?: number;
  deviceCompliance?: string;
  managedBrowser?: string;
  accessRecheckOfflineTimeout?: moment.Duration;
  accessRecheckOnlineTimeout?: moment.Duration;
  offlineWipeTimeout?: moment.Duration;
  readonly numOfApps?: number;
  readonly groupStatus?: string;
  readonly lastModifiedTime?: Date;
  fileEncryptionLevel?: string;
  touchId?: string;
}

/**
 * @class
 * Initializes a new instance of the IOSMAMPolicyCollection class.
 * @constructor
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface IOSMAMPolicyCollection {
  value: IOSMAMPolicy[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the AndroidMAMPolicy class.
 * @constructor
 * Android Policy entity for Intune MAM.
 *
 * @member {string} friendlyName
 * @member {string} [description]
 * @member {string} [appSharingFromLevel] Possible values include: 'none',
 * 'policyManagedApps', 'allApps'. Default value: 'none' .
 * @member {string} [appSharingToLevel] Possible values include: 'none',
 * 'policyManagedApps', 'allApps'. Default value: 'none' .
 * @member {string} [authentication] Possible values include: 'required',
 * 'notRequired'. Default value: 'required' .
 * @member {string} [clipboardSharingLevel] Possible values include: 'blocked',
 * 'policyManagedApps', 'policyManagedAppsWithPasteIn', 'allApps'. Default
 * value: 'blocked' .
 * @member {string} [dataBackup] Possible values include: 'allow', 'block'.
 * Default value: 'allow' .
 * @member {string} [fileSharingSaveAs] Possible values include: 'allow',
 * 'block'. Default value: 'allow' .
 * @member {string} [pin] Possible values include: 'required', 'notRequired'.
 * Default value: 'required' .
 * @member {number} [pinNumRetry]
 * @member {string} [deviceCompliance] Possible values include: 'enable',
 * 'disable'. Default value: 'enable' .
 * @member {string} [managedBrowser] Possible values include: 'required',
 * 'notRequired'. Default value: 'required' .
 * @member {moment.duration} [accessRecheckOfflineTimeout]
 * @member {moment.duration} [accessRecheckOnlineTimeout]
 * @member {moment.duration} [offlineWipeTimeout]
 * @member {number} [numOfApps]
 * @member {string} [groupStatus] Possible values include: 'notTargeted',
 * 'targeted'. Default value: 'notTargeted' .
 * @member {date} [lastModifiedTime]
 * @member {string} [screenCapture] Possible values include: 'allow', 'block'.
 * Default value: 'allow' .
 * @member {string} [fileEncryption] Possible values include: 'required',
 * 'notRequired'. Default value: 'required' .
 */
export interface AndroidMAMPolicy extends Resource {
  friendlyName: string;
  description?: string;
  appSharingFromLevel?: string;
  appSharingToLevel?: string;
  authentication?: string;
  clipboardSharingLevel?: string;
  dataBackup?: string;
  fileSharingSaveAs?: string;
  pin?: string;
  pinNumRetry?: number;
  deviceCompliance?: string;
  managedBrowser?: string;
  accessRecheckOfflineTimeout?: moment.Duration;
  accessRecheckOnlineTimeout?: moment.Duration;
  offlineWipeTimeout?: moment.Duration;
  readonly numOfApps?: number;
  readonly groupStatus?: string;
  readonly lastModifiedTime?: Date;
  screenCapture?: string;
  fileEncryption?: string;
}

/**
 * @class
 * Initializes a new instance of the AndroidMAMPolicyCollection class.
 * @constructor
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface AndroidMAMPolicyCollection {
  value: AndroidMAMPolicy[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the MAMPolicyAppOrGroupIdProperties class.
 * @constructor
 * Android Policy request body for Intune MAM.
 *
 * @member {string} url
 */
export interface MAMPolicyAppOrGroupIdProperties {
  url: string;
}

/**
 * @class
 * Initializes a new instance of the MAMPolicyAppIdOrGroupIdPayload class.
 * @constructor
 * MAM Policy request body for properties Intune MAM.
 *
 * @member {object} [properties]
 * @member {string} [properties.url]
 */
export interface MAMPolicyAppIdOrGroupIdPayload {
  properties?: MAMPolicyAppOrGroupIdProperties;
}

/**
 * @class
 * Initializes a new instance of the MAMPolicyProperties class.
 * @constructor
 * @member {string} friendlyName
 * @member {string} [description]
 * @member {string} [appSharingFromLevel] Possible values include: 'none',
 * 'policyManagedApps', 'allApps'. Default value: 'none' .
 * @member {string} [appSharingToLevel] Possible values include: 'none',
 * 'policyManagedApps', 'allApps'. Default value: 'none' .
 * @member {string} [authentication] Possible values include: 'required',
 * 'notRequired'. Default value: 'required' .
 * @member {string} [clipboardSharingLevel] Possible values include: 'blocked',
 * 'policyManagedApps', 'policyManagedAppsWithPasteIn', 'allApps'. Default
 * value: 'blocked' .
 * @member {string} [dataBackup] Possible values include: 'allow', 'block'.
 * Default value: 'allow' .
 * @member {string} [fileSharingSaveAs] Possible values include: 'allow',
 * 'block'. Default value: 'allow' .
 * @member {string} [pin] Possible values include: 'required', 'notRequired'.
 * Default value: 'required' .
 * @member {number} [pinNumRetry]
 * @member {string} [deviceCompliance] Possible values include: 'enable',
 * 'disable'. Default value: 'enable' .
 * @member {string} [managedBrowser] Possible values include: 'required',
 * 'notRequired'. Default value: 'required' .
 * @member {moment.duration} [accessRecheckOfflineTimeout]
 * @member {moment.duration} [accessRecheckOnlineTimeout]
 * @member {moment.duration} [offlineWipeTimeout]
 * @member {number} [numOfApps]
 * @member {string} [groupStatus] Possible values include: 'notTargeted',
 * 'targeted'. Default value: 'notTargeted' .
 * @member {date} [lastModifiedTime]
 */
export interface MAMPolicyProperties {
  friendlyName: string;
  description?: string;
  appSharingFromLevel?: string;
  appSharingToLevel?: string;
  authentication?: string;
  clipboardSharingLevel?: string;
  dataBackup?: string;
  fileSharingSaveAs?: string;
  pin?: string;
  pinNumRetry?: number;
  deviceCompliance?: string;
  managedBrowser?: string;
  accessRecheckOfflineTimeout?: moment.Duration;
  accessRecheckOnlineTimeout?: moment.Duration;
  offlineWipeTimeout?: moment.Duration;
  readonly numOfApps?: number;
  readonly groupStatus?: string;
  readonly lastModifiedTime?: Date;
}

/**
 * @class
 * Initializes a new instance of the Device class.
 * @constructor
 * Device entity for Intune.
 *
 * @member {string} userId
 * @member {string} friendlyName
 * @member {string} platform
 * @member {string} platformVersion
 * @member {string} deviceType
 */
export interface Device extends Resource {
  userId: string;
  friendlyName: string;
  platform: string;
  platformVersion: string;
  deviceType: string;
}

/**
 * @class
 * Initializes a new instance of the DeviceCollection class.
 * @constructor
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface DeviceCollection {
  value: Device[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the WipeDeviceOperationResult class.
 * @constructor
 * Device entity for Intune.
 *
 * @member {string} value
 */
export interface WipeDeviceOperationResult extends Resource {
  value: string;
}

/**
 * @class
 * Initializes a new instance of the OperationMetadataProperties class.
 * @constructor
 * @member {string} name
 * @member {string} value
 */
export interface OperationMetadataProperties {
  name: string;
  value: string;
}

/**
 * @class
 * Initializes a new instance of the OperationResult class.
 * @constructor
 * OperationResult entity for Intune.
 *
 * @member {string} friendlyName
 * @member {string} [category]
 * @member {string} [lastModifiedTime]
 * @member {string} [state]
 * @member {array} operationMetadata
 */
export interface OperationResult extends Resource {
  friendlyName: string;
  category?: string;
  lastModifiedTime?: string;
  state?: string;
  operationMetadata: OperationMetadataProperties[];
}

/**
 * @class
 * Initializes a new instance of the OperationResultCollection class.
 * @constructor
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface OperationResultCollection {
  value: OperationResult[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the StatusesDefault class.
 * @constructor
 * Default Statuses entity for the given tenant.
 *
 * @member {number} [deployedPolicies]
 * @member {number} [enrolledUsers]
 * @member {number} [flaggedUsers]
 * @member {date} [lastModifiedTime]
 * @member {number} [policyAppliedUsers]
 * @member {string} [status]
 * @member {number} [wipeFailedApps]
 * @member {number} [wipePendingApps]
 * @member {number} [wipeSucceededApps]
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface StatusesDefault extends Resource {
  readonly deployedPolicies?: number;
  readonly enrolledUsers?: number;
  readonly flaggedUsers?: number;
  readonly lastModifiedTime?: Date;
  readonly policyAppliedUsers?: number;
  readonly status?: string;
  readonly wipeFailedApps?: number;
  readonly wipePendingApps?: number;
  readonly wipeSucceededApps?: number;
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the FlaggedUser class.
 * @constructor
 * Flagged user for the given tenant.
 *
 * @member {number} [errorCount]
 * @member {string} [friendlyName]
 */
export interface FlaggedUser extends Resource {
  readonly errorCount?: number;
  readonly friendlyName?: string;
}

/**
 * @class
 * Initializes a new instance of the FlaggedUserCollection class.
 * @constructor
 * Flagged user collection for the given tenant.
 *
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface FlaggedUserCollection {
  value: FlaggedUser[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the FlaggedEnrolledAppError class.
 * @constructor
 * @member {string} [errorCode]
 * @member {string} [severity]
 */
export interface FlaggedEnrolledAppError {
  readonly errorCode?: string;
  readonly severity?: string;
}

/**
 * @class
 * Initializes a new instance of the FlaggedEnrolledApp class.
 * @constructor
 * Flagged Enrolled App for the given tenant.
 *
 * @member {string} [deviceType]
 * @member {string} [friendlyName]
 * @member {string} [lastModifiedTime]
 * @member {string} [platform]
 * @member {array} [errors]
 */
export interface FlaggedEnrolledApp extends Resource {
  readonly deviceType?: string;
  readonly friendlyName?: string;
  readonly lastModifiedTime?: string;
  readonly platform?: string;
  errors?: FlaggedEnrolledAppError[];
}

/**
 * @class
 * Initializes a new instance of the FlaggedEnrolledAppCollection class.
 * @constructor
 * Flagged Enrolled App collection for the given tenant.
 *
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface FlaggedEnrolledAppCollection {
  value: FlaggedEnrolledApp[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the LocationCollection class.
 * @constructor
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface LocationCollection {
  value: Location[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the ApplicationCollection class.
 * @constructor
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface ApplicationCollection {
  value: Application[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the DeviceCollection class.
 * @constructor
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface DeviceCollection {
  value: Device[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationResultCollection class.
 * @constructor
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface OperationResultCollection {
  value: OperationResult[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the FlaggedUserCollection class.
 * @constructor
 * Flagged user collection for the given tenant.
 *
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface FlaggedUserCollection {
  value: FlaggedUser[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the FlaggedEnrolledAppCollection class.
 * @constructor
 * Flagged Enrolled App collection for the given tenant.
 *
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface FlaggedEnrolledAppCollection {
  value: FlaggedEnrolledApp[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the IOSMAMPolicyCollection class.
 * @constructor
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface IOSMAMPolicyCollection {
  value: IOSMAMPolicy[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the GroupsCollection class.
 * @constructor
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface GroupsCollection {
  value: GroupItem[];
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the AndroidMAMPolicyCollection class.
 * @constructor
 * @member {array} value
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface AndroidMAMPolicyCollection {
  value: AndroidMAMPolicy[];
  readonly nextlink?: string;
}


/**
 * @class
 * Initializes a new instance of the LocationCollection class.
 * @constructor
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface LocationCollection extends Array<Location> {
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the ApplicationCollection class.
 * @constructor
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface ApplicationCollection extends Array<Application> {
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the DeviceCollection class.
 * @constructor
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface DeviceCollection extends Array<Device> {
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationResultCollection class.
 * @constructor
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface OperationResultCollection extends Array<OperationResult> {
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the FlaggedUserCollection class.
 * @constructor
 * Flagged user collection for the given tenant.
 *
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface FlaggedUserCollection extends Array<FlaggedUser> {
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the FlaggedEnrolledAppCollection class.
 * @constructor
 * Flagged Enrolled App collection for the given tenant.
 *
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface FlaggedEnrolledAppCollection extends Array<FlaggedEnrolledApp> {
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the IOSMAMPolicyCollection class.
 * @constructor
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface IOSMAMPolicyCollection extends Array<IOSMAMPolicy> {
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the GroupsCollection class.
 * @constructor
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface GroupsCollection extends Array<GroupItem> {
  readonly nextlink?: string;
}

/**
 * @class
 * Initializes a new instance of the AndroidMAMPolicyCollection class.
 * @constructor
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 */
export interface AndroidMAMPolicyCollection extends Array<AndroidMAMPolicy> {
  readonly nextlink?: string;
}
