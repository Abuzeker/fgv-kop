import ajax from './ajax'

import request from './request'

const BASE = ''

export const reqLogin = (username, password) => ajax(BASE + '/login', { username, password }, 'POST')


export const RealtimeData_Request = (label, site, page, line) => ajax('https://iotcs.app/read_realtime/',
    {
        "csrfmiddlewaretoken": "csrftoken",
        "Site": site,
        "Line": line,
        "Page": page,
        "Parameters": label
    },
    'POST')

export const graph_request = (parameter, datetimeStart, datetimeEnd, line) => ajax('https://iotcs.app/read_logdata/',
    {
        "csrfmiddlewaretoken": "csrftoken",
        "Site": "Polymerlink",
        "Line": line,
        "Parameters": parameter,
        "DateTime": [datetimeStart, datetimeEnd],
    },
    'POST')

export const logdata_request = (parameter, datetimeStart, datetimeEnd, site, line, page) => ajax('https://iotcs.app/read_logdata/',
    {
        "csrfmiddlewaretoken": "csrftoken",
        "Site": site,
        "Line": line,
        "Parameters": parameter,
        "DateTime": [datetimeStart, datetimeEnd],
        "Page": page
    },
    'POST')

export const logdata_Write = (parameter, site, line, page) => ajax('https://iotcs.app/write_logdata/',
    {
        "csrfmiddlewaretoken": "csrftoken",
        "Site": site,
        "Page": page,
        "Line": line,
        "Data": parameter
    },
    'POST')

export const downtime_request = (datetimeStart, datetimeEnd, site, line) => ajax('https://iotcs.app/read_downtime/',
    {
        "csrfmiddlewaretoken": "csrftoken",
        "Site": site,
        "Line": line,
        "DateTime": [datetimeStart, datetimeEnd],
    },
    'POST')

export const downtime_Write = (parameter, site, line) => ajax('https://iotcs.app/write_downtime/',
    {
        "csrfmiddlewaretoken": "csrftoken",
        "Site": site,
        "Line": line,
        "Data": parameter
    },
    'POST')

export const periodiclog_request = (parameter, datetimeStart, datetimeEnd, site, line, page) => ajax('https://iotcs.app/read_periodiclog/',
    {
        "csrfmiddlewaretoken": "csrftoken",
        "Site": site,
        "Line": line,
        "Parameter": parameter,
        "DateTime": [datetimeStart, datetimeEnd],
        "Page": page
    },
    'POST')

export const periodiclog_Write = (parameter, site, line, page) => ajax('https://iotcs.app/write_periodiclog/',
    {
        "csrfmiddlewaretoken": "csrftoken",
        "Site": site,
        "Line": line,
        "Page": page,
        "Data": parameter
    },
    'POST')

export const write_setting = (parameter, side, line, page) => ajax('https://iotcs.app/write_setting/',
    {
        "csrfmiddlewaretoken": "csrftoken",
        "Site": side,
        "Line": line,
        "Page":page,
        "Data": parameter
    },
    'POST')

export const delete_logdata = (parameter, Datetime, site, line, page) => ajax('https://iotcs.app/delete_logdata/',
    {
        "csrfmiddlewaretoken": "csrftoken",
        "Site": site,
        "Line": line,
        "Parameters": parameter,
        "DateTime": Datetime,
        "Page": page
    },
    'POST')

export const delete_downtime = (Shift, Datetime, site, line) => ajax('https://iotcs.app/delete_downtime/',
    {
        "csrfmiddlewaretoken": "csrftoken",
        "Site": site,
        "Line": line,
        "Shift": Shift,
        "DateTime": Datetime
    },
    'POST')

export const delete_periodiclog = (Parameter, Datetime, site, line) => ajax('https://iotcs.app/delete_periodiclog/',
    {
        "csrfmiddlewaretoken": "csrftoken",
        "Site": site,
        "Line": line,
        "Parameter": Parameter,
        "DateTime": Datetime
    },
    'POST')

export const ReadJob = (info, datetimeStart, datetimeEnd, site, line, page) => ajax('https://iotcs.app/read_report/',
    {
        "Site": site,
        "Line": line,
        "Info1": info.info1,
        "DateTime": [datetimeStart, datetimeEnd]
    },
    'POST')

export const WriteJob = (info, datetimeStart, datetimeEnd, site, line, page) => ajax('https://iotcs.app/write_report/',
    {
        "csrfmiddlewaretoken": "csrftoken",
        "Site": site,
        "Line": line,
        "Info1": info.info1,
        "Info2": info.info2,
        "Info3": info.info3,
        "DateTime": [datetimeStart, datetimeEnd]
    },
    'POST')

export const DeleteJob = (jobnumber, line, page) => ajax('https://iotcs.app/delete_report/',
    {
        "csrfmiddlewaretoken": "csrftoken",
        "Site": "Polymerlink",
        "Line": line,
        "Page": page,
        "Info1": jobnumber,
    },
    'POST')



export const LoginBackend = (username, password) => request('https://www.iotcs.app/api/login/',
    {
        "username": username,
        "password": password
    },
    'POST')

export const LogoutBackend = () => request('https://www.iotcs.app/api/logout/',
    {

    },
    'POST')

export const testapi = () => request('https://www.iotscs.app/api/test2/',
    {

    },
    'POST')

export const Subscrition_request = () => ajax('https://www.iotcs.app/read_user_subscription/',
    {
        "username":"SuperVisor"
    },
    'POST')