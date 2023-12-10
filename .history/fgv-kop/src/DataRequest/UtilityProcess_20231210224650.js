export const Sort_Log_by_date = (RawData) => {

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
      todateCPKOValue = parseFloat(obj["Todate (CPKO)"]).toFixed(1);
      todateRBDPOValue = parseFloat(obj["Todate (RBD PO)"]).toFixed(1);

    } catch (error) {
      todateCPOValue = 0
      todateCPKOValue = 0
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

  return [objWithHighestValueCPO,objWithHighestValueCPKO,objWithHighestValueRBDPO];
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
