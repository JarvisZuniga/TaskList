import React, { createContext, useReducer, useEffect } from 'react';

export const ReservationContext = createContext();

const actions = {
  ADD_RESERVATION: 'ADD_RESERVATION',
  DELETE_RESERVATION: 'DELETE_RESERVATION',
  EDIT_RESERVATION: 'EDIT_RESERVATION' // Definimos la acción para editar una reservación
};

const reservationReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_RESERVATION:
      return [...state, action.payload];
    case actions.DELETE_RESERVATION:
      return state.filter(reservation => reservation.id !== action.payload);
    case actions.EDIT_RESERVATION: // Manejamos la acción para editar una reservación
      return state.map(reservation =>
        reservation.id === action.payload.id ? action.payload : reservation
      );
    default:
      return state;
  }
};

export const ReservationProvider = ({ children }) => {
  const [reservations, dispatch] = useReducer(reservationReducer, [], () => {
    const storedReservations = localStorage.getItem('reservations');
    return storedReservations ? JSON.parse(storedReservations) : [];
  });

  useEffect(() => {
    localStorage.setItem('reservations', JSON.stringify(reservations));
  }, [reservations]);

  return (
    <ReservationContext.Provider value={{ state: reservations, dispatch }}>
      {children}
    </ReservationContext.Provider>
  );
};

