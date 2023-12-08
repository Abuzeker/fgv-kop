export const Sort_Log_by_date =(RawData) =>{

    const Data =  RawData.data

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
      
      
      const uniqueDates = getAllUniqueDates(Data);
      console.log(uniqueDates);
      
}