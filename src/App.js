import logo from './logo.svg';
import './App.css';
import Schedule from './components/schedule/schedule';
import Load from './components/load/load';
import { useState } from 'react';

function App() {
  let data = {
    schedule : {
      morningUp : {
        label: 'Morning Up Stairs',
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false
      },
      morningDown : {
        label: 'Morning Down Stairs',
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false
      },
      morningParking : {
        label: 'Morning Parking Lot',
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false
      },
      lunchA : {
        label: 'Lunch A',
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false
      },
      lunchB : {
        label: 'Lunch B',
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false
      },
      lunchC : {
        label: 'Lunch C',
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false
      },
      lunchD : {
        label: 'Lunch D',
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false
      },
      aftUp : {
        label: 'Afternoon Up Stairs',
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false
      },
      aftDown : {
        label: 'Afternoon Down Stairs',
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false
      },
      aftParking : {
        label: 'Afternoon Parking Lot',
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false
      }
    },
    load: {
      x1 : {
        label: 'X1',
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        total: 0
      },
      x2 : {
        label: 'X2',
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        total: 0
      },
      x3 : {
        label: 'X3',
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        total: 0
      },
      x4 : {
        label: 'X4',
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        total: 0
      },
      x5 : {
        label: 'X5',
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        total: 0
      },
      x6 : {
        label: 'X6',
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        total: 0
      },
      x7 : {
        label: 'X7',
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        total: 0
      },
    }
  }

  const [info, setInfo] = useState(data);
  const [errMsg, setErrMsg] = useState('');

  const scheduleChange = (value,key,day) => {
    let obj = {...info};
    obj.schedule[key][day] = value;
    setInfo({...obj});
    validateShifts(value,key,day)
  }

  const loadChange = (value,key,day) => {
    let obj = {...info};
    obj.load[key][day] = value;
    setInfo({...obj});
    validateLoad(value,key,day)
    
  }
  const validateLoad = (value,key,day) => {
    let obj = {...info};
    obj.load[key][day] = value;
    let res = parseInt(obj.load[key].monday) + parseInt(obj.load[key].tuesday) + parseInt(obj.load[key].wednesday) 
            + parseInt(obj.load[key].thursday) + parseInt(obj.load[key].friday)
    res <= 7 ? setErrMsg(''): setErrMsg('Staff cannot have more than 7 shifts.');
    obj.load[key]['total'] = res;
    console.log(obj);
    setInfo({...obj});
  } 

  const validateShifts = (value,key,day) => {
    let obj = {...info};
    obj.schedule[key][day] = value;
    let res = false;

    res = (obj.schedule.lunchA[day] &&  obj.schedule.lunchB[day] )  || (obj.schedule.lunchB[day] &&  obj.schedule.lunchC[day] ) 
     || (obj.schedule.lunchC[day] &&  obj.schedule.lunchD[day] ) || (obj.schedule.lunchD[day] &&  obj.schedule.lunchA[day] )
    res ? setErrMsg('Staff cannot take two consecutive lunch breaks'): setErrMsg('');
  }
  return (
    <div className='app'>
      {errMsg && <div className='error' >{errMsg}</div>}
      <Schedule schedule={info.schedule} scheduleChange={scheduleChange}/>
      <Load load = {info.load} loadChange={loadChange}/>
     </div>
  );
}

export default App;
