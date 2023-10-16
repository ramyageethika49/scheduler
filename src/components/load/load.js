import "./load.css"
function Load(props){

    const { load } = props;
  const loadHandler = (event, key, day) =>{
    props.loadChange(event.target.value, key,day);
  }
  return (
    <div>
      <div className="title"> load</div>
      <div className="load-item">
        <div className="label"> </div>
        <div className="day"> Monday </div>
        <div className="day"> Tuesday </div>
        <div className="day"> Wednesday </div>
        <div className="day"> Thrusday </div>
        <div className="day"> Friday </div>
        <div className="day"> Total </div>
      </div>
      {Object.keys(load).map((key, index) => {
        return (
          <div className="load-item" key={key}>
            <div className="label"> {load[key].label} </div>
            <div className="day">
              <input type="number" min={0} max={2} value={load[key].monday} onInput={(event)=> loadHandler(event, key, 'monday')}/>
            </div>
            <div className="day">
              <input type="number" min={0} max={2} value={load[key].tuesday} onChange={(event)=> loadHandler(event, key, 'tuesday')} />
            </div>
            <div className="day">
              <input type="number" min={0} max={2}  value={load[key].wednesday} onChange={(event)=> loadHandler(event, key, 'wednesday')} />
            </div>
            <div className="day">
              <input type="number" min={0} max={2}  value={load[key].thursday} onChange={(event)=> loadHandler(event, key, 'thursday')}/>
            </div>
            <div className="day">
              <input type="number" min={0} max={2}  value={load[key].friday} onChange={(event)=> loadHandler(event, key, 'friday')} />
            </div>
            <div className="day"> {load[key].total}</div>
          </div>
        );
      })}
    </div>
  );
}
export default Load;