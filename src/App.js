import React, { useState, useEffect } from "react";
import { Form } from "./components/form/Form";
import { Shift } from "./components/shift/Shift";


function App() {

  let shiftsDB = JSON.parse(localStorage.getItem('shifts'));
  if (!shiftsDB) {
    shiftsDB = [];
  }

  // APP Shift State
  const [shifts, setShifts] = useState(shiftsDB);
  useEffect(() => {
    if (shiftsDB) {
      localStorage.setItem('shifts', JSON.stringify(shifts))
    } else {
      localStorage.setItem('shifts', JSON.stringify([]));
    }

  }, [shifts, shiftsDB]);

  const createShift = shift => {
    setShifts([
      ...shifts,
      shift
    ]);
  }

  const deleteShift = uuid => {
    const newShifts = shifts.filter(shift => shift.uuid !== uuid);
    setShifts(newShifts);
  }

  return (
    <div className="App">
      <h1>Administración de turnos</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createShift={createShift}
            />
          </div>
          <div className="one-half column">
            <h2>Listado de turnos</h2>
            {shifts.length > 0 ?
              shifts.map(shift => (
                <Shift
                  key={shift.uuid}
                  shift={shift}
                  deleteShift={deleteShift}
                />
              ))
              :
              <Shift
                shift={null}
                deleteShift={null}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
