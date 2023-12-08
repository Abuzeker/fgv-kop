export const Sort_Log_by_date =(RawData) =>{

    const Data =  RawData.data
    const uniqueDates = getAllUniqueDates(Data);
    const FilterData = []

    uniqueDates.forEach(element => {
        const obj = {}
        obj["date"] = convertToMalaysiaTimeAndFormat(element)
        Data.forEach(element2 => {
            if (element2.fields.date_created === element){
                obj[`${element2.fields.parameter}`] = element2.fields.value
            }
        });
        FilterData.push(obj)
    });

    // console.log(FilterData);
    return(FilterData)
      
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