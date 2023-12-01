

export const Sort_log_with_asset = (OriginalData, Asseet) => {
    console.log(OriginalData);

    const transformedData = transformData(OriginalData, Asseet);
    console.log(transformedData);

    function transformData(originalData, inputAsset) {
        const transformedData = [];
        originalData.data.forEach(item => {
            const assetInfo = item.fields.asset;
            const date = formatDate(item.fields.last_updated);
            const parameter = item.fields.parameter;
            // console.log(parameter);
            // Check if the asset matches the input asset
            if (assetInfo.name === inputAsset) {
                // Find or create an entry for the date
                let dateEntry = transformedData.find(entry => entry.date === date);
                if (!dateEntry) {
                    dateEntry = { date };
                    transformedData.push(dateEntry);
                }

                // Add or update the parameter value
                dateEntry[parameter] = parseFloat(item.fields.value);
            }
        });

        return transformedData;
    }

    function parseAssetInfo(asset) {
        // Extract relevant information from the asset field
        const [, , , products, laycan, quantity] = asset.split(':');
        const [buyer, vessel] = asset.split(':')[0].split(',');

        return { buyer, vessel, products, laycan, quantity };
    }

    function formatDate(dateString) {
        // Convert date string to MM/DD/YYYY format
        const date = new Date(dateString);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        return `${month}/${day}/${year}`;
    }



}



export const Merge_quatity = (originalDataArray, responseData) => {
    return originalDataArray.map(originalData => {
        const enrichedData = { ...originalData };
        const assetToMatch = originalData.Asset;
        const latestDates = {}; // Keep track of the latest date for each parameter

        responseData.data.forEach(item => {
            if (item.fields.asset === assetToMatch) {
                const itemDate = new Date(item.fields.value);

                // Check if the item date is later than the current latest date for the parameter
                if (!latestDates[item.fields.parameter] || itemDate > latestDates[item.fields.parameter]) {
                    latestDates[item.fields.parameter] = itemDate;

                    if (item.fields.parameter === "Today Quantity") {
                        enrichedData["Today Quantity"] = item.fields.value;
                    } else if (item.fields.parameter === "Todate Quantity") {
                        enrichedData["Todate Quantity"] = item.fields.value;
                    } else if (item.fields.parameter === "Today Targeted Quantity") {
                        enrichedData["Today Targeted Quantity"] = item.fields.value;
                    }
                }
            }
        });

        return enrichedData;
    });
};




export const Merge_attainment_to_details = (originalDataArray, responseData) => {

    const convertToMalaysiaTime = (utcDateString) => {
        const utcDate = new Date(utcDateString);
        // console.log(utcDate);

        if (utcDate == "Invalid Date") {
            const malaysiaDate = "Lack Of Data"
            return malaysiaDate;
        }

        else {
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
                    enrichedData["Attainment Rate"] = parseFloat(item.fields.value).toFixed(1);
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