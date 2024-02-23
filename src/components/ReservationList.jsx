import React, { useContext, useState } from 'react';
import { Button, Flex, Text, Input, Stack } from '@chakra-ui/react';
import { ReservationContext } from './ReservationContext';

const ReservationList = () => {
  const { state, dispatch } = useContext(ReservationContext);
  const [editingReservationId, setEditingReservationId] = useState(null);
  const [editedReservation, setEditedReservation] = useState({});

  const handleEdit = (reservation) => {
    setEditingReservationId(reservation.id);
    setEditedReservation(reservation);
  };

  const handleSaveEdit = () => {
    dispatch({ type: 'EDIT_RESERVATION', payload: editedReservation });
    setEditingReservationId(null);
    setEditedReservation({});
  };

  const handleCancelEdit = () => {
    setEditingReservationId(null);
    setEditedReservation({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedReservation(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Stack spacing={4} mt={4}>
      <Text fontSize="xl" fontWeight="bold">Reservaciones</Text>
      {state.map(reservation => (
        <Flex key={reservation.id} justify="space-between" alignItems="center" p={2} border="1px solid #ccc" borderRadius="md">
          {editingReservationId === reservation.id ? (
            <>
              <Input name="name" value={editedReservation.name || reservation.name} onChange={handleChange} />
              <Input name="date" type="date" value={editedReservation.date || reservation.date} onChange={handleChange} />
              <Input name="place" value={editedReservation.place || reservation.place} onChange={handleChange} />
              <Input name="numberOfPeople" type="number" value={editedReservation.numberOfPeople || reservation.numberOfPeople} onChange={handleChange} />
              <Button onClick={handleSaveEdit} colorScheme="blue" size="sm" ml={2}>Guardar</Button>
              <Button onClick={handleCancelEdit} colorScheme="gray" size="sm" ml={2}>Cancelar</Button>
            </>
          ) : (
            <>
              <Text mx={2}>{reservation.name}</Text>
              <Text mx={2}>{reservation.date}</Text>
              <Text mx={2}>{reservation.place}</Text>
              <Text mx={2}>{reservation.numberOfPeople}</Text>
              <Button onClick={() => handleEdit(reservation)} colorScheme="blue" size="sm" ml={2}>Editar</Button>
              <Button onClick={() => dispatch({ type: 'DELETE_RESERVATION', payload: reservation.id })} colorScheme="red" size="sm" ml={2}>Eliminar</Button>
            </>
          )}
        </Flex>
      ))}
    </Stack>
  );
};

export default ReservationList;