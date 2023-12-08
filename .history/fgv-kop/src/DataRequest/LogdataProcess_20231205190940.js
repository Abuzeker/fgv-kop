export function MergeProductProgress(product, todate) {
    const mergedData = [];

    console.log(product);
    console.log(todate);




    console.log(mergedData);

    return mergedData;
}

export function MergeProducttoAsset(rawdata) {
    let resultArray = [];
    const data = rawdata.data;

    data.forEach(product => {
        const obj = {};
        obj["Asset"] = product.fields.asset;
        const regexResult = product.fields.parameter.split('(')[1].split(')')[0]
        obj[regexResult] = product.fields.value;
        resultArray.push(obj);
    });

    // console.log(resultArray);
    return resultArray;
}


export function Individual_Product(rawdata) {
    let resultArray = [];

    rawdata.forEach(order => {
        order.Products.forEach(product => {
            resultArray.push({
                Asset: order.Asset,
                product: product,
                todaytarget: order[`Quantity (${product})`]
            });
        });
    });

    console.log(resultArray);

    return resultArray;
}




export function getSixMonthsRange() {
    // Get current date
    const currentDate = new Date();

    // Calculate 6 months before
    const sixMonthsBefore = new Date(currentDate);
    sixMonthsBefore.setMonth(currentDate.getMonth() - 6);

    // Calculate 6 months after
    const sixMonthsAfter = new Date(currentDate);
    sixMonthsAfter.setMonth(currentDate.getMonth() + 6);

    // Format dates to ISO string (UTC)
    const isoDateString = (date) => date.toISOString();


    // Return the range in the desired format
    return [isoDateString(sixMonthsBefore).split('.')[0] + 'Z', isoDateString(sixMonthsAfter).split('.')[0] + 'Z'];
}


export const LineGraphDataProcess = (data) => {
    let Graph_data = []
    data.map((element) => {
        // console.log(element["Daily Quantity"])
        const dailydata = element["Daily Quantity"]
        dailydata.map((element2) => {
            element2["Asset"] = element["Asset"]
            Graph_data.push(element2)
        })
    })
    return Graph_data
}

export const BarGraphDataProcess = (data) => {
    let Graph_data = []
    data.map((element) => {
        // console.log(element["Daily Quantity"])
        const dailydata = element["Daily Quantity"]
        dailydata.map((element2) => {
            element2["Asset"] = element["Asset"]
            element2["Efficiency"] = element2["Today Quantity"] / element2["Today Targeted Quantity"]
            Graph_data.push(element2)
        })
    })
    return Graph_data
}

export const merge_log_and_order = (OrderDetails, QuantityLog) => {
    // console.log(QuantityLog);

    const processed_data = OrderDetails.map(OrderDetail => {
        const enrichedData = { ...OrderDetail };

        enrichedData["Daily Quantity"] = Sort_log_with_asset(QuantityLog, OrderDetail['Asset'])

        enrichedData["Daily Quantity"].forEach(element => {

            element['Today Quantity'] = element['Today Quantity'] ? element['Today Quantity'] : 0
            element['Todate Quantity'] = element['Todate Quantity'] ? element['Todate Quantity'] : 0
            element['Today Targeted Quantity'] = element['Today Targeted Quantity'] ? element['Today Targeted Quantity'] : 0
        });

        return enrichedData
    })

    // console.log(processed_data);
    return processed_data
}

export const Sort_log_with_asset = (OriginalData, Asseet) => {
    // console.log(OriginalData);

    const transformedData = transformData(OriginalData, Asseet);
    // console.log(transformedData);

    return transformedData

    function transformData(originalData, inputAsset) {
        const transformedData = [];
        originalData.data.forEach(item => {

            const assetInfo = item.fields.asset;
            const date = formatDate(item.fields.date_created);
            const parameter = item.fields.parameter;
            // console.log(parameter);
            // Check if the asset matches the input asset
            if (assetInfo === inputAsset) {
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
        // console.log(enrichedData);

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
                    enrichedData["Attainment Rate"] = parseFloat(item.fields.value * 100).toFixed(2);
                }
            }
        });

        return enrichedData;
    });
};


export function OrderInfoRawDataProcess(responseData) {
    console.log(responseData);

    const convertToMalaysiaTime = (utcDateString) => {
        const utcDate = new Date(utcDateString);
        const malaysiaDate = utcDate.toLocaleDateString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' });
        return malaysiaDate;
    };

    const extractedDataArray = [];

    if (responseData.success) {
        const logData = responseData.data;
        // Extracting assets and transforming 'value' into an array of objects

        logData.map(entry => {
            const { fields } = entry;
            // const assetInfo = JSON.parse(asset);
            const valueInfo = fields.value
            const valueInfoList = JSON.parse(valueInfo.replace(/'/g, '"'));

            // valueInfo.map(originalData => {
            //     console.log(originalData);
            // })

            const extractedData = {};

            extractedData['Asset'] = fields.asset;

            valueInfoList.forEach(item => {
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




////daily report

function convertToMalaysiaTimeAndFormat(originalDate) {
    const dateObj = new Date(originalDate);
    const malaysiaTime = new Date(dateObj.toLocaleString('en-US', { timeZone: 'Asia/Kuala_Lumpur' }));

    const day = malaysiaTime.getDate().toString().padStart(2, '0');
    const month = (malaysiaTime.getMonth() + 1).toString().padStart(2, '0');
    const year = malaysiaTime.getFullYear();

    return `${day}/${month}/${year}`;
}

function mergeParameterAndLine(parameter, line) {
    // If line is not null, merge parameter and line
    return line ? `${parameter}${line}` : parameter;
}

export function aggregateAndSortData(originalData) {
    const aggregatedData = {};

    // Aggregate data by date
    originalData.data.forEach(item => {
        const date = convertToMalaysiaTimeAndFormat(item.fields.date_created);
        if (!aggregatedData[date]) {
            aggregatedData[date] = {};
        }

        const combinedKey = mergeParameterAndLine(item.fields.parameter, item.fields.line);

        aggregatedData[date][combinedKey] = item.fields.value;
    });

    // Transform aggregated data into the desired output format
    const result = Object.keys(aggregatedData).map(date => {
        const dataObject = {
            date,
        };

        // Assign parameters and values to the data object
        originalData.data.forEach(item => {
            const combinedKey = mergeParameterAndLine(item.fields.parameter, item.fields.line);
            dataObject[combinedKey] = aggregatedData[date][combinedKey];
        });

        return dataObject;
    });

    return result;
}
