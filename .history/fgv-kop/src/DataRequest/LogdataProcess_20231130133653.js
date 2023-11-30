

export const Order_detail_process = (data) =>{

}


export function processLogData(responseData) {
    if (responseData.success) {
        console.log(responseData);
      const logData = responseData.data;
  
      // Extracting assets and transforming 'value' into an array of objects
      const result = logData.map(entry => {
        const { asset, fields } = entry;
        const assetInfo = JSON.parse(asset);
        const valueInfo = JSON.parse(fields.value.replace(/'/g, '"'));
  
        // Combine 'parameter' and 'value' into an array of objects
        const transformedValue = valueInfo.map(item => ({
          parameter: item.parameter,
          value: item.value,
          unit: item.unit || null,
        }));
  
        return {
          asset: assetInfo,
          data: transformedValue,
        };
      });
  
      return result;
    } else {
      console.error('Error in processing log data:', responseData.message);
      return null;
    }
  }