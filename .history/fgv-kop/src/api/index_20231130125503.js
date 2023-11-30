import ajax from './ajax'

////////KOP//////////
export const Subscrition_request = () => ajax('http://kopiot.iotcs.com/auth/signin/',
    {
        "username": "node",
        "password": "node-123"
    },
    'POST')


export const Request_order_log = (datetime) => ajax('http://kopiot.iotcs.com/api/read_logdata/',
    {

        "projectID": "KOPIOT",
        "lines": ["Stock Vs Shipment"],
        "parameters": ["Order Info"],
        "datetime": datetime
        //["2023-08-30T16:00:00Z", "2023-12-06T00:00:00Z"]
    },
    'POST'
)


export const Request_Realtime = (line, parameters) => ajax('http://kopiot.iotcs.com/api/read_realtime/',
    {
        "projectID": "KOPIOT",
        "lines": line,
    },
    'POST'
)