import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export const Form = ({ createShift }) => {
  // State
  const [shift, setShift] = useState({
    firstName: '',
    lastName: '',
    shiftDate: '',
    shiftHour: '',
    consultationMotive: '',
  });

  const [error, setError] = useState(false);

  const { firstName, lastName, shiftDate, shiftHour, consultationMotive } =
    shift;

  const updateState = (e) => {
    setShift({
      ...shift,
      [e.target.name]: e.target.value,
    });
  };

  const submitShift = (e) => {
    e.preventDefault();
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      shiftDate.trim() === '' ||
      shiftHour.trim() === '' ||
      consultationMotive.trim() === ''
    ) {
      setError(true);
      return;
    }
    setError(false);

    shift.uuid = uuidv4();
    createShift(shift);

    setShift({
      firstName: '',
      lastName: '',
      shiftDate: '',
      shiftHour: '',
      consultationMotive: '',
    });
  };

  return (
    <React.Fragment>
      <h2>Solicitar turno</h2>
      {error ? (
        <p className="alert-error"> * Debe completar todos los campos</p>
      ) : null}

      <form onSubmit={submitShift}>
        <label>Nombre</label>
        <input
          className="u-full-width"
          type="text"
          name="firstName"
          placeholder="Nombre del paciente"
          onChange={updateState}
          value={firstName}
        />

        <label>Apellido</label>
        <input
          className="u-full-width"
          type="text"
          name="lastName"
          placeholder="Apellido del paciente"
          onChange={updateState}
          value={lastName}
        />
        <label>Fecha</label>
        <input
          className="u-full-width"
          type="date"
          name="shiftDate"
          onChange={updateState}
          value={shiftDate}
        />
        <label>Hora</label>
        <input
          className="u-full-width"
          type="time"
          name="shiftHour"
          onChange={updateState}
          value={shiftHour}
        />
        <label>Motivo de consulta</label>
        <textarea
          className="u-full-width"
          name="consultationMotive"
          onChange={updateState}
          value={consultationMotive}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Crear turno
        </button>
      </form>
    </React.Fragment>
  );
};

Form.propType = {
  createShift: PropTypes.func,
};
