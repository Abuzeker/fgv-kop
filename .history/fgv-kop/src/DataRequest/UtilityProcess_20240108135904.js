export const Find_Latest_data = (data) => {
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

export const Caculate_ShipmentCompletion = (data) => {
 

  // Initialize objects to store total target and total produced for each product
  const totalTarget = {};
  const totalProduced = {};
  
  // Loop through each entry in the array
  data.forEach(entry => {
    const todateProduced = entry["Todate Produced"];
  
    // Loop through each entry in the "Todate Produced" array for the current entry
    todateProduced.forEach(prodEntry => {
      const product = prodEntry.product;
      const target = parseFloat(prodEntry.Target);
      const produced = parseFloat(prodEntry.produced);
  
      // Update total target for the product
      totalTarget[product] = (totalTarget[product] || 0) + target;
  
      // Update total produced for the product
      totalProduced[product] = (totalProduced[product] || 0) + produced;
    });
  });
  
  console.log("Total Target:", totalTarget);
  console.log("Total Produced:", totalProduced);
  
}



export const Sort_Log_by_date = (RawData) => {
  console.log(RawData);

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
  console.log(data);
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

    try {
      todateCPOValue = parseFloat(obj["Todate (CPO)"]).toFixed(1);
    } catch (error) { todateCPOValue = 0 }
    try {

      todateCPKOValue = parseFloat(obj["Todate (CPKO)"]).toFixed(1);
    } catch (error) {
      todateCPKOValue = 0
    }
    try {
      todateRBDPOValue = parseFloat(obj["Todate (RBD PO)"]).toFixed(1);
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
      objWithHighestValueRBDPO = obj;
    }
  });

  return [objWithHighestValueCPO, objWithHighestValueCPKO, objWithHighestValueRBDPO];
}


function convertToMalaysiaTimeAndFormat(originalDate) {
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
