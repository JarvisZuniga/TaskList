import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { ReservationProvider } from '../components/ReservationContext';
import ReservationForm from '../components/ReservationForm';
import ReservationList from '../components/ReservationList';

const TaskPage = () => {
  return (
    <ReservationProvider>
      <Flex direction="column" align="center" mt={10}>
        <Text fontSize="2xl" fontWeight="bold">Reservaciones</Text>
        <ReservationForm />
        <ReservationList />
      </Flex>
    </ReservationProvider>
  );
};

export default TaskPage;
