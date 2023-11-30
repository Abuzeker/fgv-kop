

export const Order_detail_process = (data) => {

}


export function processLogData(responseData) {

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

        

        return extractedDataArray;
    } else {
        console.error('Error in processing log data:', responseData.message);
        return null;
    }
}