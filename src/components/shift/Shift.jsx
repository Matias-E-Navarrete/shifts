import React from 'react';
import PropTypes from 'prop-types';

export const Shift = ({ shift, deleteShift }) => {
  return (
    <div className="shift" qa-data="shift">
      {shift ? (
        <React.Fragment>
          <p>
            Paciente:{' '}
            <span>
              {shift.lastName}, {shift.firstName}
            </span>
          </p>
          <br />
          <p>
            Horario:{' '}
            <span>
              {shift.shiftDate} {shift.shiftHour}
            </span>
          </p>
          <br />
          <p>
            Motivo: <span>{shift.consultationMotive}</span>
          </p>
          <button
            className="delete button u-full-width"
            onClick={() => deleteShift(shift.uuid)}
          >
            Elimiar turno
          </button>
        </React.Fragment>
      ) : (
        <p qa-data="no-shifts" className="center">NO QUEDAN TURNOS PARA HOY</p>
      )}
    </div>
  );
};

Shift.propTypes = {
    shift: PropTypes.object,
    deleteShift: PropTypes.func
}

