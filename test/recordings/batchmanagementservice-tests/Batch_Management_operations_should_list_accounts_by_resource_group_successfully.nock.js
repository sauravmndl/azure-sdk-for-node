// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'jsjapaneast';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts?api-version=2017-01-01')
  .reply(200, "{\"value\":[{\"name\":\"batchtestnodesdk\",\"location\":\"japaneast\",\"properties\":{\"accountEndpoint\":\"batchtestnodesdk.japaneast.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/jsjapaneast\",\"lastKeySync\":\"2017-02-18T00:06:04.4740142Z\"},\"poolAllocationMode\":\"batchservice\"},\"id\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk\",\"type\":\"Microsoft.Batch/batchAccounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '705',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': 'dac6245f-8dae-43a9-b891-347ea5412463',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14915',
  'x-ms-request-id': 'de744a30-3078-48d4-af06-3584cabd9af0',
  'x-ms-correlation-request-id': 'de744a30-3078-48d4-af06-3584cabd9af0',
  'x-ms-routing-request-id': 'WESTUS2:20170218T000732Z:de744a30-3078-48d4-af06-3584cabd9af0',
  date: 'Sat, 18 Feb 2017 00:07:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts?api-version=2017-01-01')
  .reply(200, "{\"value\":[{\"name\":\"batchtestnodesdk\",\"location\":\"japaneast\",\"properties\":{\"accountEndpoint\":\"batchtestnodesdk.japaneast.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/jsjapaneast\",\"lastKeySync\":\"2017-02-18T00:06:04.4740142Z\"},\"poolAllocationMode\":\"batchservice\"},\"id\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk\",\"type\":\"Microsoft.Batch/batchAccounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '705',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': 'dac6245f-8dae-43a9-b891-347ea5412463',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14915',
  'x-ms-request-id': 'de744a30-3078-48d4-af06-3584cabd9af0',
  'x-ms-correlation-request-id': 'de744a30-3078-48d4-af06-3584cabd9af0',
  'x-ms-routing-request-id': 'WESTUS2:20170218T000732Z:de744a30-3078-48d4-af06-3584cabd9af0',
  date: 'Sat, 18 Feb 2017 00:07:32 GMT',
  connection: 'close' });
 return result; }]];