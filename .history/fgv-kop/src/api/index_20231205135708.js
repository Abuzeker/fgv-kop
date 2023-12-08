import { getFromLocalStorage } from '../Memorystorage/localstorage';
import ajax from './ajax'

////////KOP//////////
export const Subscrition_request = () => ajax('http://kopiot.iotcs.com/auth/signin/',
    {
        "username": "node",
        "password": "node-123"
    },
    'POST')
    


    // import { getToken } from 'path-to-your-authentication-utils'; // Import a function to retrieve the token

    export const Request_data_log = (datetime, parameters, assets) => {
      const token = getFromLocalStorage("KOP-Token"); // Retrieve the token using your authentication utility
    
      const headers = {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      };
    
      const requestData = {
        "projectID": "KOPIOT",
        "lines": ["Stock Vs Shipment"],
        "parameters": parameters,
        "datetime": datetime,
        "assets": assets

      };
    
      return ajax('http://kopiot.iotcs.com/api/read_logdata/', requestData, 'POST', headers);
    };

    export const Request_order_log = (datetime, assets) => {
      const token = getFromLocalStorage("KOP-Token"); // Retrieve the token using your authentication utility
    
      const headers = {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      };
    
      const requestData = {
        "projectID": "KOPIOT",
        "lines": ["Stock Vs Shipment"],
        "parameters": ["Order Info"],
        "datetime": datetime,
        "assets": assets
      };
    
      return ajax('http://kopiot.iotcs.com/api/read_logdata/', requestData, 'POST', headers);
    };

    export const Request_Realtime = (line, parameters) => {
      const token = getFromLocalStorage("KOP-Token"); // Retrieve the token using your authentication utility
    
      const headers = {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      };
    
      const requestData = {
        "projectID": "KOPIOT",
        "lines": line,
        "parameters": parameters
      };
    
      return ajax('http://kopiot.iotcs.com/api/read_realtime/', requestData, 'POST', headers);
    };
    // import { getToken } from 'path-to-your-authentication-utils'; // Import a function to retrieve the token

    export const Request_dailydata_log = (datetime, parameters) => {
      const token = getFromLocalStorage("KOP-Token"); // Retrieve the token using your authentication utility
    
      const headers = {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      };
    
      const requestData = {
        "projectID": "KOPIOT",
        "parameters": parameters,
        "datetime": datetime,
      };
    
      return ajax('http://kopiot.iotcs.com/api/read_logdata/', requestData, 'POST', headers);
    };