export function MergeAssetandProductLog(info, ProductsTodayLog) {

    const log = []
    const data = ProductsTodayLog.data

    data.forEach(element => {
        const obj = {};
        obj['Asset'] = element.fields.asset
        obj['date'] = formatDate(element.fields.date_created)
        obj['parameter'] = element.fields.parameter.split('(')[1].split(')')[0]
        obj['value'] = element.fields.value
        log.push(obj)
    });
    // console.log(log);

    info.forEach(element => {
        const Asset = element.Asset
        const filteredData = log.filter(item => {
            const asset = item.Asset;
            return Asset === asset;
        })
        // console.log(filteredData);
        element['Today Produced'] = filteredData
    });
    // console.log(info);
    return info

    function formatDate(dateString) {
        // Convert date string to MM/DD/YYYY format
        const date = new Date(dateString);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        return `${month}/${day}/${year}`;
    }
}



export function MergeOrderandProduct(info, Products) {

    info.forEach(element => {
        const Asset = element.Asset
        const filteredData = Products.filter(item => {
            const asset = item.Asset;
            return Asset === asset;
        })
        // console.log(filteredData);
        element['Todate Produced'] = filteredData
    });
    // console.log(info);
    return info
}


export function MergeProductProgress(todate, product) {
    const mergedData = [];

    // console.log(todate);
    // console.log(product);

    product.forEach(element => {
        const Asset = element.Asset
        const Productname = element.product
        // console.log(element);
        todate.forEach(element2 => {
            // console.log(element2);
            const Asset2 = element2.Asset
            const productpropertyName = Object.keys(element2)[1]

            if (Asset === Asset2 && Productname == productpropertyName) {
                const obj = {};
                obj["product"] = Productname
                obj["produced"] = element2[productpropertyName];
                obj["Target"] = element.producttarget;
                obj["Asset"] = element.Asset;
                obj["remaining"] = element.producttarget - element2[productpropertyName];
                // console.log(obj);
                mergedData.push(obj);
            }
        });
    });
    // console.log(mergedData);

    return mergedData;
}

export function MergeProducttoAsset(rawdata) {
    let resultArray = [];
    const data = rawdata.data;
    // console.log(rawdata);

    data.forEach(product => {
        const obj = {};
        obj["Asset"] = product.fields.asset;
        const regexResult = product.fields.parameter.split('(')[1].split(')')[0]
        obj[regexResult] = product.fields.value;
        obj["date"] = product.fields.date_created
        resultArray.push(obj);
    });

    const latestDateMap = new Map();

    // Iterate through the data to find the latest date for each asset
    resultArray.forEach(item => {
        const asset = item.Asset;
        const date = new Date(item.date);

        if (!latestDateMap.has(asset) || date > latestDateMap.get(asset)) {
            latestDateMap.set(asset, date);
        }
    });

    // Filter the data based on the latest date for each asset
    const filteredData = resultArray.filter(item => {
        const asset = item.Asset;
        const date = new Date(item.date);
        const latestDate = latestDateMap.get(asset);

        return date.getTime() === latestDate.getTime();
    });

    // console.log(filteredData);

    // console.log(resultArray);
    return filteredData;
}


export function Individual_Product(rawdata) {
    // console.log(rawdata);
    let resultArray = [];

    rawdata.forEach(order => {
        order.Products.forEach(product => {
            resultArray.push({
                Asset: order.Asset,
                product: product,
                producttarget: order[`Quantity (${product})`]
            });
        });
    });

    console.log(resultArray);

    return resultArray;
}

export function getNext10DaysRange() {
    // Get current date
    const currentDate = new Date();

    // Calculate 10 days before
    const tenDaysBefore = new Date(currentDate);
    tenDaysBefore.setDate(currentDate.getDate() - 5);

    // Calculate 10 days after
    const tenDaysAfter = new Date(currentDate);
    tenDaysAfter.setDate(currentDate.getDate() + 5);

    // Format dates to ISO string (UTC)
    const isoDateString = (date) => date.toISOString();

    // Return the range in the desired format
    return [isoDateString(tenDaysBefore).split('.')[0] + 'Z', isoDateString(tenDaysAfter).split('.')[0] + 'Z'];
}

export function TenDaysbeforesRange() {
    // Get current date
    const currentDate = new Date();

    // Calculate 10 days before
    const tenDaysBefore = new Date(currentDate);
    tenDaysBefore.setDate(currentDate.getDate() - 10);

    // Calculate 10 days after
    const tenDaysAfter = new Date(currentDate);
    tenDaysAfter.setDate(currentDate.getDate() + 5);

    // Format dates to ISO string (UTC)
    const isoDateString = (date) => date.toISOString();

    // Return the range in the desired format
    return [isoDateString(tenDaysBefore).split('.')[0] + 'Z', isoDateString(currentDate).split('.')[0] + 'Z'];
}


export function getMonthsRange(months) {
    // Get current date
    const currentDate = new Date();

    // Calculate 6 months before
    const sixMonthsBefore = new Date(currentDate);
    sixMonthsBefore.setMonth(currentDate.getMonth() - months);

    // Calculate 6 months after
    const sixMonthsAfter = new Date(currentDate);
    sixMonthsAfter.setMonth(currentDate.getMonth() + months);

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
            element2["Efficiency"] = element2["Today Quantity"] / element2["Today Targeted Quantity"] * 100
            element2["Efficiency"] = isNaN(element2["Efficiency"]) ? 0 : element2["Efficiency"];
            element2["Efficiency"] = !isFinite(element2["Efficiency"]) ? 100 : element2["Efficiency"];
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
    // console.log(responseData);

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

        // Check if the value is a number and format accordingly
        const formattedValue = Number.isNaN(parseFloat(item.fields.value)) ? item.fields.value : parseFloat(item.fields.value).toFixed(1);

        aggregatedData[date][combinedKey] = formattedValue;
    });

    // Transform aggregated data into the desired output format
    const result = Object.keys(aggregatedData).map(date => {
        const dataObject = {
            date,
        };

        // Assign parameters and values to the data object
        originalData.data.forEach(item => {
            const combinedKey = mergeParameterAndLine(item.fields.parameter, item.fields.line);

            // Check if the value is a number and format accordingly
            const formattedValue = Number.isNaN(parseFloat(aggregatedData[date][combinedKey])) ? aggregatedData[date][combinedKey] : parseFloat(aggregatedData[date][combinedKey]).toFixed(1);

            dataObject[combinedKey] = formattedValue;
        });

        return dataObject;
    });

    return result;
}



export const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
};


export const filter_unfinish_order = (Oridata) => {
    let filtered_asset = [], unfinish_order = [];

    if (Oridata.length < 5) {
        return Oridata; // Return all data if the array has less than 5 elements
    } else {
        // Sort the array by some timestamp or order attribute (assuming there is one)
        Oridata.sort((a, b) => b.timestamp - a.timestamp || b.order - a.order);

        for (let i = 0; i < 5; i++) {
            let element = Oridata[i];
            element['Attainment Rate'] = isNaN(element['Attainment Rate']) ? 0 : element['Attainment Rate'];
            const FRN = element['Attainment Rate'];

            if (FRN < 100) {
                filtered_asset.push(element.Asset);
                unfinish_order.push(element);
            }
        }
        return unfinish_order;
    }
};


export const filter_unfinish_order_name = (Oridata) => {
    let filtered_asset = [], unfinish_order = []
    //  console.log(Oridata);
    Oridata.map((element) => {

        element['Attainment Rate'] = element['Attainment Rate'] ? element['Attainment Rate'] : 0
        const FRN = element['Attainment Rate']

        if (FRN < 100) {
            filtered_asset.push(element.Asset)
            unfinish_order.push(element)
            // console.log(element.fields.value);
        }
    })
    // console.log(filtered_asset);
    // console.log(unfinish_order);

    return filtered_asset
}


export const Merge_parameter_name_and_value = (response) => {

    const transformedData = response.data.reduce((acc, item) => {
        const { parameter, value } = item.fields;
        acc[parameter] = value;
        return acc;
    }, {});

    //   console.log(transformedData);
    return transformedData
}


///dashboard 3

export const Dashboar3_DateMerge = (RawResponse, Line, parameter, Linename) => {
    const data = RawResponse.data
    const Result = []

    const lineL1500 = data.filter(item => item.fields.line === Line);
    const L1500_Line_Status = lineL1500.filter(item => item.fields.parameter === parameter);

  
    const obj = {}
    console.log(L1500_Line_Status);
    L1500_Line_Status.forEach(element => {
        // Convert UTC timestamp to Date object
        // console.log(element.fields['date_created']);
        const utcDate = new Date(element.fields['date_created']);

        // Create a date formatter for Malaysia time
        const malaysiaDateFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Asia/Kuala_Lumpur',
            day: 'numeric',
        });
        const day = malaysiaDateFormatter.format(utcDate);

        if(element.fields['value'] === '#FFD32F2F'){
            obj[`day${day}`] = '#d32f2f' //red
        }

        if(element.fields['value'] === '#FFEEFF41'){
            obj[`day${day}`] = '#eeff41'  //yellow
        }

        if(element.fields['value'] === '#FF00C853'){
            obj[`day${day}`] = '#00c853' //green
        }

        if(element.fields['value'] === '#FFFFCC80'){
            obj[`day${day}`] = '#ffcc80' //orange
        }
    });
    obj['Plant'] = Linename


    console.log(Result);
    console.log(L1500_Line_Status);
    
    return obj
}
