// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobschedules?api-version=2017-06-01.5.1', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 20 Jul 2017 20:12:30 GMT',
  etag: '0x8D4CFABA678970D',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4883c959-5151-4b14-9fa3-b90a640fb27e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule',
  date: 'Thu, 20 Jul 2017 20:12:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobschedules?api-version=2017-06-01.5.1', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 20 Jul 2017 20:12:30 GMT',
  etag: '0x8D4CFABA678970D',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4883c959-5151-4b14-9fa3-b90a640fb27e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule',
  date: 'Thu, 20 Jul 2017 20:12:32 GMT',
  connection: 'close' });
 return result; }]];