import React, { useState, useContext } from 'react';
import { Button, FormControl, FormLabel, Input, Stack, Text, Box } from '@chakra-ui/react'; // Importar Box para el contenedor del formulario
import { ReservationContext } from './ReservationContext';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [error, setError] = useState('');

  const { dispatch } = useContext(ReservationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar si numberOfPeople es mayor a 1
    if (parseInt(numberOfPeople) <= 1) {
      setError('El número de personas debe ser mayor a 1');
      return;
    }

    // Crear la nueva reserva
    const newReservation = {
      id: Date.now(),
      name,
      date,
      place,
      numberOfPeople: parseInt(numberOfPeople)
    };
    dispatch({ type: 'ADD_RESERVATION', payload: newReservation });
    setName('');
    setDate('');
    setPlace('');
    setNumberOfPeople('');
    setError('');
  };

  return (
    <Box
      bg="white"
      boxShadow="md"
      p="6"
      borderRadius="md"
      w="100%"
      maxW="lg"
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl id="name" isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="date" isRequired>
            <FormLabel>Fecha</FormLabel>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </FormControl>
          <FormControl id="place" isRequired>
            <FormLabel>Lugar</FormLabel>
            <Input type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
          </FormControl>
          <FormControl id="numberOfPeople" isRequired>
            <FormLabel>Número de personas</FormLabel>
            <Input type="number" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue">Reservar</Button>
        </Stack>
      </form>
      {error && <Text mt={2} color="red">{error}</Text>}
    </Box>
  );
};

export default ReservationForm;
