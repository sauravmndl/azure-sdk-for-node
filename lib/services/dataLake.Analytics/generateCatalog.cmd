::
:: Microsoft Azure SDK for Node - Generate library code
:: Copyright (C) Microsoft Corporation. All Rights Reserved.
::

@echo off
set autoRestVersion=0.15.0-Nightly20160127
if  "%1" == "" (
    ::set specFile="https://raw.githubusercontent.com/begoldsm/azure-rest-api-specs/master/arm-datalake-analytics/catalog/2015-10-01-preview/swagger/catalog.json"
    set specFile="C:\src\AzureSDK\azure-rest-api-specs\arm-datalake-analytics\catalog\2015-10-01-preview\swagger\catalog.json"
) else (
    set specFile="%1"
)
set repoRoot=%~dp0..\..\..\
set generateFolder=%~dp0lib\catalog

if exist %generateFolder% rd /S /Q  %generateFolder%
call "%repoRoot%\tools\autorest.gen.cmd" %specFile% Microsoft.Azure.Management.DataLake.Analytics %autoRestVersion% %generateFolder% 