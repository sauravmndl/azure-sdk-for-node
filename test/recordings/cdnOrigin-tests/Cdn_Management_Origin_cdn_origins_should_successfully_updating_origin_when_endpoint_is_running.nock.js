// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4182/providers/Microsoft.Cdn/profiles/cdnTestProfile8537/endpoints/cdnTestEndpoint5782/start?api-version=2016-04-02')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint5782.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Starting\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4182/providers/Microsoft.Cdn/operationresults/58467f78-cec5-4606-98e1-23fb08493c8b/profileresults/cdnTestProfile8537/endpointresults/cdnTestEndpoint5782?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': 'd3f8377c-759f-4a08-bada-d782cf957ead',
  'x-ms-client-request-id': 'e9de8c07-bed2-4bdd-9ce4-074397e7121d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4182/providers/Microsoft.Cdn/operationresults/58467f78-cec5-4606-98e1-23fb08493c8b?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '0d013c1e-164f-487a-bacb-33984342bd65',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T225257Z:0d013c1e-164f-487a-bacb-33984342bd65',
  date: 'Wed, 11 May 2016 22:52:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4182/providers/Microsoft.Cdn/profiles/cdnTestProfile8537/endpoints/cdnTestEndpoint5782/start?api-version=2016-04-02')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint5782.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Starting\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4182/providers/Microsoft.Cdn/operationresults/58467f78-cec5-4606-98e1-23fb08493c8b/profileresults/cdnTestProfile8537/endpointresults/cdnTestEndpoint5782?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': 'd3f8377c-759f-4a08-bada-d782cf957ead',
  'x-ms-client-request-id': 'e9de8c07-bed2-4bdd-9ce4-074397e7121d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4182/providers/Microsoft.Cdn/operationresults/58467f78-cec5-4606-98e1-23fb08493c8b?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '0d013c1e-164f-487a-bacb-33984342bd65',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T225257Z:0d013c1e-164f-487a-bacb-33984342bd65',
  date: 'Wed, 11 May 2016 22:52:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4182/providers/Microsoft.Cdn/operationresults/58467f78-cec5-4606-98e1-23fb08493c8b?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '119df825-b91d-4605-8ca0-a0c2864de474',
  'x-ms-client-request-id': 'cbf4562d-66f1-46be-8468-76cb7a0f01c0',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '5376b96e-d34b-4c61-b0ee-4b128a4a3ae0',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T225328Z:5376b96e-d34b-4c61-b0ee-4b128a4a3ae0',
  date: 'Wed, 11 May 2016 22:53:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4182/providers/Microsoft.Cdn/operationresults/58467f78-cec5-4606-98e1-23fb08493c8b?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '119df825-b91d-4605-8ca0-a0c2864de474',
  'x-ms-client-request-id': 'cbf4562d-66f1-46be-8468-76cb7a0f01c0',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '5376b96e-d34b-4c61-b0ee-4b128a4a3ae0',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T225328Z:5376b96e-d34b-4c61-b0ee-4b128a4a3ae0',
  date: 'Wed, 11 May 2016 22:53:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4182/providers/Microsoft.Cdn/profiles/cdnTestProfile8537/endpoints/cdnTestEndpoint5782/origins/newname?api-version=2016-04-02', '*')
  .reply(200, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4182/providers/Microsoft.Cdn/profiles/cdnTestProfile8537/endpoints/cdnTestEndpoint5782/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '412',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'fe65e4da-4f16-4cba-b8de-b6b91f25349c',
  'x-ms-client-request-id': '42cd08d8-e895-4a4a-bbce-b13dd601e6dd',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b1999a84-a345-44eb-9ec6-97c8e7b565d3',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T225329Z:b1999a84-a345-44eb-9ec6-97c8e7b565d3',
  date: 'Wed, 11 May 2016 22:53:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4182/providers/Microsoft.Cdn/profiles/cdnTestProfile8537/endpoints/cdnTestEndpoint5782/origins/newname?api-version=2016-04-02', '*')
  .reply(200, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4182/providers/Microsoft.Cdn/profiles/cdnTestProfile8537/endpoints/cdnTestEndpoint5782/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '412',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'fe65e4da-4f16-4cba-b8de-b6b91f25349c',
  'x-ms-client-request-id': '42cd08d8-e895-4a4a-bbce-b13dd601e6dd',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b1999a84-a345-44eb-9ec6-97c8e7b565d3',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T225329Z:b1999a84-a345-44eb-9ec6-97c8e7b565d3',
  date: 'Wed, 11 May 2016 22:53:28 GMT',
  connection: 'close' });
 return result; }]];