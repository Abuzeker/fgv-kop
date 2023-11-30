import { getFromLocalStorage } from '../Memorystorage/localstorage';
import ajax from './ajax'

////////KOP//////////
export const Subscrition_request = () => ajax('http://kopiot.iotcs.com/auth/signin/',
    {
        "username": "node",
        "password": "node-123"
    },
    'POST')


export const Request_order_log = (datetime) => {

        const token = getFromLocalStorage("KOP-Token")

        const headers = {
            'Authorization': `Token ${token}`, // Replace YOUR_ACCESS_TOKEN with the actual access token
            'Content-Type': 'application/json', // Assuming you are sending JSON data
        };
    
        const body = {
            "projectID": "KOPIOT",
            "lines": ["Stock Vs Shipment"],
            "parameters": ["Order Info"],
            "datetime": datetime
        };
    
        return ajax.post('http://kopiot.iotcs.com/api/read_logdata/', body, headers);
    }
    

export const Request_Realtime = (line, parameters) => ajax('http://kopiot.iotcs.com/api/read_realtime/',
    {
        "projectID": "KOPIOT",
        "lines": line,
    },
    'POST'
)