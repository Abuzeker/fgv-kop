

export const Order_detail_process = (data) => {

}


export function processLogData(responseData) {
    if (responseData.success) {
        const logData = responseData.data;
        // Extracting assets and transforming 'value' into an array of objects
        const result = logData.map(entry => {
            const { fields } = entry;
            // const assetInfo = JSON.parse(asset);
            const valueInfo = JSON.parse(fields.value.replace(/'/g, '"'));

            // Extracted data array
            const extractedDataArray = [];

            valueInfo.forEach(item => {
                // Create an object for each parameter and push it to the array
                const extractedData = {
                    parameter: item.parameter,
                    value: item.value,
                };

                extractedDataArray.push(extractedData);
            });

            console.log(extractedDataArray);

            return {
                //   asset: assetInfo,
                extractedDataArray
            };
        });

        return result;
    } else {
        console.error('Error in processing log data:', responseData.message);
        return null;
    }
}