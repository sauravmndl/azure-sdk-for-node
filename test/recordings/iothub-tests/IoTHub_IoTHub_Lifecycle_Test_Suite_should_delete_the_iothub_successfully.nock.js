// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e0b81f36-36ba-44f7-b550-7c9344a35893';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub?api-version=2016-02-03')
  .reply(202, "null", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/NTVhMjQ3NWYtNTJkNy00NzIxLWJlMDktYWY4N2NhZTVjZmNi?api-version=2016-02-03',
  'retry-after': '15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/NTVhMjQ3NWYtNTJkNy00NzIxLWJlMDktYWY4N2NhZTVjZmNi?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '485dfb2b-cd2a-431c-aaf1-739ebdc39efd',
  'x-ms-correlation-request-id': '485dfb2b-cd2a-431c-aaf1-739ebdc39efd',
  'x-ms-routing-request-id': 'CENTRALUS:20160920T221338Z:485dfb2b-cd2a-431c-aaf1-739ebdc39efd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 20 Sep 2016 22:13:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub?api-version=2016-02-03')
  .reply(202, "null", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/NTVhMjQ3NWYtNTJkNy00NzIxLWJlMDktYWY4N2NhZTVjZmNi?api-version=2016-02-03',
  'retry-after': '15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/NTVhMjQ3NWYtNTJkNy00NzIxLWJlMDktYWY4N2NhZTVjZmNi?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '485dfb2b-cd2a-431c-aaf1-739ebdc39efd',
  'x-ms-correlation-request-id': '485dfb2b-cd2a-431c-aaf1-739ebdc39efd',
  'x-ms-routing-request-id': 'CENTRALUS:20160920T221338Z:485dfb2b-cd2a-431c-aaf1-739ebdc39efd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 20 Sep 2016 22:13:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/NTVhMjQ3NWYtNTJkNy00NzIxLWJlMDktYWY4N2NhZTVjZmNi?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14891',
  'x-ms-request-id': 'ca79e1c7-235b-4c1d-b5fe-b12a69c8dbdb',
  'x-ms-correlation-request-id': 'ca79e1c7-235b-4c1d-b5fe-b12a69c8dbdb',
  'x-ms-routing-request-id': 'CENTRALUS:20160920T221409Z:ca79e1c7-235b-4c1d-b5fe-b12a69c8dbdb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 20 Sep 2016 22:14:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/NTVhMjQ3NWYtNTJkNy00NzIxLWJlMDktYWY4N2NhZTVjZmNi?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14891',
  'x-ms-request-id': 'ca79e1c7-235b-4c1d-b5fe-b12a69c8dbdb',
  'x-ms-correlation-request-id': 'ca79e1c7-235b-4c1d-b5fe-b12a69c8dbdb',
  'x-ms-routing-request-id': 'CENTRALUS:20160920T221409Z:ca79e1c7-235b-4c1d-b5fe-b12a69c8dbdb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 20 Sep 2016 22:14:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/NTVhMjQ3NWYtNTJkNy00NzIxLWJlMDktYWY4N2NhZTVjZmNi?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-request-id': '9efabe0a-1f98-40d0-9449-c16628f61af7',
  'x-ms-correlation-request-id': '9efabe0a-1f98-40d0-9449-c16628f61af7',
  'x-ms-routing-request-id': 'CENTRALUS:20160920T221439Z:9efabe0a-1f98-40d0-9449-c16628f61af7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 20 Sep 2016 22:14:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/NTVhMjQ3NWYtNTJkNy00NzIxLWJlMDktYWY4N2NhZTVjZmNi?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-request-id': '9efabe0a-1f98-40d0-9449-c16628f61af7',
  'x-ms-correlation-request-id': '9efabe0a-1f98-40d0-9449-c16628f61af7',
  'x-ms-routing-request-id': 'CENTRALUS:20160920T221439Z:9efabe0a-1f98-40d0-9449-c16628f61af7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 20 Sep 2016 22:14:39 GMT',
  connection: 'close' });
 return result; }]];