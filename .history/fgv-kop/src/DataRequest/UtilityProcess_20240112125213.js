export const Find_Latest_data_CPO = (data) => {
  // Filter out objects where the values are not zero
  const nonZeroData = data.filter(item => (
    parseFloat(item["CPO RCV"]) !== 0 ||
    parseFloat(item["CPO PROCESS"]) !== 0 ||
    parseFloat(item["CPO C/S"]) !== 0
  ));

  // Sort the non-zero data array based on the 'date' field in descending order
  const sortedData = nonZeroData.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get the latest non-zero values for "CPO RCV," "CPO PROCESS," and "CPO C/S" along with their dates
  const latestNonZeroValues = {
    "CPO RCV": sortedData[0]["CPO RCV"],
    "CPO RCV Date": sortedData[0].date,
    "CPO PROCESS": sortedData[0]["CPO PROCESS"],
    "CPO PROCESS Date": sortedData[0].date,
    "CPO C/S": sortedData[0]["CPO C/S"],
    "CPO C/S Date": sortedData[0].date,
  };

  // console.log(latestNonZeroValues);
  return latestNonZeroValues
}

export const Find_Latest_data_CPKO = (data) => {
  // Filter out objects where the values are not zero
  const nonZeroData = data.filter(item => (
    parseFloat(item["CPKO RCV"]) !== 0 ||
    parseFloat(item["CPKO PROCESS"]) !== 0 ||
    parseFloat(item["CPKO C/S"]) !== 0
  ));

  // Sort the non-zero data array based on the 'date' field in descending order
  const sortedData = nonZeroData.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get the latest non-zero values for "CPO RCV," "CPO PROCESS," and "CPO C/S" along with their dates
  const latestNonZeroValues = {
    "CPKO RCV": sortedData[0]["CPKO RCV"],
    "CPKO RCV Date": sortedData[0].date,
    "CPKO PROCESS": sortedData[0]["CPKO PROCESS"],
    "CPKO PROCESS Date": sortedData[0].date,
    "CPKO C/S": sortedData[0]["CPKO C/S"],
    "CPKO C/S Date": sortedData[0].date,
  };

  // console.log(latestNonZeroValues);
  return latestNonZeroValues
}

export const Find_Latest_data_RBDPO = (data) => {
  // console.log(data);
  // Filter out objects where the values are not zero
  const nonZeroData = data.filter(item => (
    parseFloat(item["Total Cost (RBDPO)"]) !== 0 ||
    parseFloat(item["UF (ANALISIS HARIAN FRACTIONATION)"]) !== 0 ||
    parseFloat(item["RBDPO C/S"]) !== 0
  ));

  // Sort the non-zero data array based on the 'date' field in descending order
  const sortedData = nonZeroData.sort((a, b) => new Date(b.date) - new Date(a.date));
// console.log(sortedData);
  // Get the latest non-zero values for "CPO RCV," "CPO PROCESS," and "CPO C/S" along with their dates
  const latestNonZeroValues = {
    "Total Cost (RBDPO)": sortedData[0]["Total Cost (RBDPO)"],
    "Total Cost (RBDPO) Date": sortedData[0].date,
    "UF (ANALISIS HARIAN FRACTIONATION)": sortedData[0]["UF (ANALISIS HARIAN FRACTIONATION)"],
    "UF (ANALISIS HARIAN FRACTIONATION) Date": sortedData[0].date,
    "RBDPO C/S": sortedData[0]["RBDPO C/S"],
    "RBDPO C/S Date": sortedData[0].date,
  };

  // console.log(latestNonZeroValues);
  return latestNonZeroValues
}

export const Caculate_ShipmentCompletion = (data) => {
  // Initialize objects to store total target and total produced for each product
  const shipmentinfo = {
    'Todate Quantity': 0,
    'Total Quantity': 0,
    'Ratio': 0
  };

  data.forEach(entry => {
    const todateQuantity = parseFloat(entry['Todate Quantity']);
    const targetQuantity = parseFloat(entry['Quantity']);
    shipmentinfo['Todate Quantity'] += isNaN(todateQuantity) ? 0 : todateQuantity;
    shipmentinfo['Total Quantity'] += isNaN(targetQuantity) ? 0 : targetQuantity;
  });

  const ratio = parseFloat(shipmentinfo['Todate Quantity'] / shipmentinfo['Total Quantity']);
  shipmentinfo['Ratio'] = isFinite(ratio) ? ratio : 0;

  // console.log(shipmentinfo['Ratio']);
  return shipmentinfo;
};

// export const Caculate_ShipmentCompletion = (data) => {
//   console.log(data);
//   // Initialize objects to store total target and total produced for each product
//   const totalTarget = {};
//   const totalProduced = {};

//   // Loop through each entry in the array
//   data.forEach(entry => {
//     const todateProduced = entry && entry["Todate Produced"];

//     // Check if todateProduced is an array before trying to iterate over it
//     if (Array.isArray(todateProduced)) {
//       // Loop through each entry in the "Todate Produced" array for the current entry
//       todateProduced.forEach(prodEntry => {
//         const product = prodEntry.product;
//         const target = parseFloat(prodEntry.Target);
//         const produced = parseFloat(prodEntry.produced);

//         // Update total target for the product
//         totalTarget[product] = (totalTarget[product] || 0) + target;

//         // Update total produced for the product
//         totalProduced[product] = (totalProduced[product] || 0) + produced;
//       });
//     }
//   });

//   // Create the final result in the desired format
//   const result = {};
//   Object.keys(totalTarget).forEach(product => {
//     result[`${product} Total Target`] = totalTarget[product];
//     result[`${product} Total Produced`] = totalProduced[product];
//   });

//   console.log(result);
//   return result;
// };


export const Sort_Log_by_date = (RawData) => {
  // console.log(RawData);

  const Data = RawData.data
  const uniqueDates = getAllUniqueDates(Data);
  const FilterData = []

  uniqueDates.forEach(element => {
    const obj = {}
    obj["date"] = convertToMalaysiaTimeAndFormat(element)
    Data.forEach(element2 => {
      if (element2.fields.date_created === element) {
        obj[`${element2.fields.parameter}`] = element2.fields.value
      }
    });
    FilterData.push(obj)
  });

  // console.log(FilterData);
  return (FilterData)

}

export function findHighestTodateCPO(data) {
  // console.log(data);

  let highestValueCPO = -Infinity;
  let objWithHighestValueCPO = null;
  let highestValueCPKO = -Infinity;
  let objWithHighestValueCPKO = null;
  let highestValueRBDPO = -Infinity;
  let objWithHighestValueRBDPO = null;

  data.forEach(obj => {
    let todateCPOValue = 0
    let todateCPKOValue = 0
    let todateRBDPOValue = 0
    console.log(data);
    try {
      todateCPOValue = parseFloat(obj["Todate (CPO)"]).toFixed(1);
    } catch (error) { todateCPOValue = 0 }
    try {

      todateCPKOValue = parseFloat(obj["Todate (CPKO)"]).toFixed(1);
    } catch (error) {
      todateCPKOValue = 0
    }
    try {
      todateRBDPOValue = parseFloat(obj["Todate (RBDPO)"]).toFixed(1);
      const sds = parseFloat(highestValueRBDPO).toFixed(1);
      console.log(todateRBDPOValue);
      console.log(highestValueRBDPO);
      if(todateRBDPOValue > sds){console.log('bigger');}

    } catch (error) {
      todateRBDPOValue = 0
    }


    if (!isNaN(todateCPOValue) && todateCPOValue > highestValueCPO) {
      highestValueCPO = todateCPOValue;
      objWithHighestValueCPO = obj;
    }

    if (!isNaN(todateCPKOValue) && todateCPKOValue > highestValueCPKO) {
      highestValueCPKO = todateCPKOValue;
      objWithHighestValueCPKO = obj;
    }

    if (!isNaN(todateRBDPOValue) && todateRBDPOValue > highestValueRBDPO) {
      highestValueRBDPO = todateRBDPOValue;
      console.log(todateRBDPOValue,highestValueRBDPO);
      objWithHighestValueRBDPO = obj;
    }
  });
  console.log(highestValueRBDPO);

console.log(objWithHighestValueRBDPO);
  return [objWithHighestValueCPO, objWithHighestValueCPKO, objWithHighestValueRBDPO];
}


export function convertToMalaysiaTimeAndFormat(originalDate) {
  const dateObj = new Date(originalDate);
  const malaysiaTime = new Date(dateObj.toLocaleString('en-US', { timeZone: 'Asia/Kuala_Lumpur' }));

  const day = malaysiaTime.getDate().toString().padStart(2, '0');
  const month = (malaysiaTime.getMonth() + 1).toString().padStart(2, '0');
  const year = malaysiaTime.getFullYear();

  return `${day}/${month}/${year}`;
}

function getAllUniqueDates(data) {
  const uniqueDates = new Set();

  data.forEach(item => {
    const dateCreated = item.fields.date_created;
    if (dateCreated) {
      uniqueDates.add(dateCreated);
    }
  });

  return Array.from(uniqueDates);
}

export const extractData = (inputArray, keyword) => {
  const result = [];
  inputArray.forEach(item => {
    const date = item.date;
    const newData = { date };

    Object.keys(item).forEach(key => {
      if (key.includes(keyword)) {
        newData[key] = parseFloat(item[key]);
      }
    });

    result.push(newData);
  });
  return result;
};
