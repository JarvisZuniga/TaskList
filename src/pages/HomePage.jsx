import React from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Flex
      align="center"
      justify="center"
      h="80vh" // Establece una altura del 80% de la ventana visible
    >
      <Box
        maxW="600px"
        p="4"
        bg="white"
        boxShadow="md"
        borderRadius="md"
        textAlign="center"
      >
        <Heading as="h1" size="xl" mb="4">
          ¡Bienvenido a nuestra plataforma de reservaciones!
        </Heading>
        <Text fontSize="lg" mb="4">
          Gestiona tus reservaciones de forma fácil y eficiente con nuestra aplicación.
        </Text>
        <Text fontSize="lg" mb="8">
          Regístrate ahora para empezar a organizar tus eventos y actividades.
        </Text>
        <Link to="/tasks">
          <Button colorScheme="blue" size="lg">
            Empezar
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default HomePage;
