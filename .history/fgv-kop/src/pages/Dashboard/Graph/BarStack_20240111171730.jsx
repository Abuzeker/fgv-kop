const BarStack = (props) => {
  const data = props.data && props.data["Today Produced"]; // Add a null check here
  let max = 10 , valuearray = []

  // Check if data is defined before using forEach
  if (data) {
    data.forEach((element) => {
      element.value = parseInt(element.value);
    });

    const annotations = [];
    each(groupBy(data, 'date'), (values, k) => {
      const value = values.reduce((a, b) => a + b.value, 0);
      annotations.push({
        type: 'text',
        position: [k, value],
        content: `${value}`,
        style: { textAlign: 'center', fontSize: 15, fill: 'rgba(255,255,255,1)' },
        offsetY: -10,
      });
      valuearray.push(value)
    });
    max =  Math.max(...valuearray)
    max = max * 0.1 + max

    useEffect(() => {
      const stackedColumnPlot = new Column(props.containername, {
        // ... rest of your code
      });

      stackedColumnPlot.render();

      return () => {
        stackedColumnPlot.destroy();
      };
    }, []);
  }

  return <div id={props.containername}></div>;
};

export default BarStack;
