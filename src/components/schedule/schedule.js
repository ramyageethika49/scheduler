import "./schedule.css";
function Schedule(props) {
  const { schedule } = props;
  const checkHandler = (event, key, day) =>{
    props.scheduleChange(event.target.checked, key,day);
  }
  return (
    <div>
      <div className="title"> Schedule</div>
      <div className="schedule-item">
        <div className="label"> </div>
        <div className="day"> Monday </div>
        <div className="day"> Tuesday </div>
        <div className="day"> Wednesday </div>
        <div className="day"> Thrusday </div>
        <div className="day"> Friday </div>
      </div>
      {Object.keys(schedule).map((key, index) => {
        return (
          <div className="schedule-item" key={key}>
            <div className="label"> {schedule[key].label} </div>
            <div className="day">
              <input type="checkbox" checked={schedule[key].monday} onChange={(event)=> checkHandler(event, key, 'monday')}/>
            </div>
            <div className="day">
              <input type="checkbox" checked={schedule[key].tuesday} onChange={(event)=> checkHandler(event,key, 'tuesday')} />
            </div>
            <div className="day">
              <input type="checkbox" checked={schedule[key].wednesday} onChange={(event)=> checkHandler(event,key, 'wednesday')} />
            </div>
            <div className="day">
              <input type="checkbox" checked={schedule[key].thursday} onChange={(event)=> checkHandler(event,key, 'thursday')}/>
            </div>
            <div className="day">
              <input type="checkbox" checked={schedule[key].friday} onChange={(event)=> checkHandler(event,key, 'friday')} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Schedule;
