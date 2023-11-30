

export const Order_detail_process = (data) => {

}


export function OrderInfoRawDataProcess(responseData) {

    const convertToMalaysiaTime = (utcDateString) => {
        const utcDate = new Date(utcDateString);
        const malaysiaDate = utcDate.toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' });
        return malaysiaDate;
      };

    const extractedDataArray = [];

    if (responseData.success) {
        const logData = responseData.data;
        // Extracting assets and transforming 'value' into an array of objects
        logData.map(entry => {
            const { fields } = entry;
            // const assetInfo = JSON.parse(asset);
            const valueInfo = JSON.parse(fields.value.replace(/'/g, '"'));

            const extractedData = {};

            valueInfo.forEach(item => {
                extractedData[item.parameter] = item.value;
            });

            // console.log(extractedData);
            extractedDataArray.push(extractedData)
        });

        const updatedDataArray = extractedDataArray.map(data => ({
            ...data,
            Laycan: data.Laycan.map(date => convertToMalaysiaTime(date)),
          }));



        return updatedDataArray;
    } else {
        console.error('Error in processing log data:', responseData.message);
        return null;
    }
}


export function OrderProgressRawDataProcess(responseData) {

    const convertToMalaysiaTime = (utcDateString) => {
        const utcDate = new Date(utcDateString);
        const malaysiaDate = utcDate.toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' });
        return malaysiaDate;
      };

    const extractedDataArray = [];

    if (responseData.success) {
        const logData = responseData.data;
        // Extracting assets and transforming 'value' into an array of objects
        logData.map(entry => {
            const { fields } = entry;
            // const assetInfo = JSON.parse(asset);
            const valueInfo = JSON.parse(fields.value.replace(/'/g, '"'));

            const extractedData = {};

            valueInfo.forEach(item => {
                extractedData[item.parameter] = item.value;
            });

            // console.log(extractedData);
            extractedDataArray.push(extractedData)
        });

        const updatedDataArray = extractedDataArray.map(data => ({
            ...data,
            Laycan: data.Laycan.map(date => convertToMalaysiaTime(date)),
          }));



        return updatedDataArray;
    } else {
        console.error('Error in processing log data:', responseData.message);
        return null;
    }
}