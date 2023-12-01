

export const Merge_attainment_to_details = (originalDataArray, responseData) => {

    const convertToMalaysiaTime = (utcDateString) => {
        const utcDate = new Date(utcDateString);
        console.log(utcDate);

        if(utcDate == "Invalid Date"){
            const malaysiaDate = "Lack Of Data"
            return malaysiaDate;
        }

        else{
            const malaysiaDate = utcDate.toLocaleDateString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' });
            return malaysiaDate;
        }

    };

    return originalDataArray.map(originalData => {
        const enrichedData = { ...originalData };
        const assetToMatch = originalData.Asset;

        responseData.data.forEach(item => {
            if (item.fields.asset === assetToMatch) {
                if (item.fields.parameter === "Anticipated Fulfillment Date") {
                    enrichedData["Anticipated Fulfillment Date"] = convertToMalaysiaTime(item.fields.value);
                } else if (item.fields.parameter === "Attainment Rate") {
                    enrichedData["Attainment Rate"] = item.fields.value;
                }
            }
        });

        return enrichedData;
    });
};


export function OrderInfoRawDataProcess(responseData) {

    const convertToMalaysiaTime = (utcDateString) => {
        const utcDate = new Date(utcDateString);
        const malaysiaDate = utcDate.toLocaleDateString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' });
        return malaysiaDate;
    };

    const extractedDataArray = [];

    if (responseData.success) {
        const logData = responseData.data;
        // Extracting assets and transforming 'value' into an array of objects

        // console.log(logData);
        logData.map(entry => {
            const { fields } = entry;
            // const assetInfo = JSON.parse(asset);
            const valueInfo = JSON.parse(fields.value.replace(/'/g, '"'));
            const extractedData = {};

            extractedData['Asset'] = fields.asset;

            valueInfo.forEach(item => {
                extractedData[item.parameter] = item.value;
            });

            // console.log(extractedData);
            extractedDataArray.push(extractedData)
        });

        // console.log(extractedDataArray);

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