export const Sort_Log_by_date =(RawData) =>{

    const Data =  RawData.data
    const uniqueDates = getAllUniqueDates(Data);
    const FilterData = []

    uniqueDates.forEach(element => {
        const obj = {}
        obj["date"] = element
        Data.forEach(element2 => {
            if (element2.fields.date_created === element){
                obj[`${element2.fields.parameter}`] = element2.fields.value
            }
        });
        FilterData.push(obj)
    });

    console.log(FilterData);
      
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