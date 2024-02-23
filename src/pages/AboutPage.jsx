import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const AboutPage = () => {
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
      >
        <Heading as="h1" size="xl" textAlign="center" mb="4">
          ¡Bienvenido App Reservation!
        </Heading>
        <Text fontSize="lg" textAlign="center" mb="4">
          Somos una empresa dedicada a brindar un excelente servicio de reservaciones para satisfacer las necesidades de nuestros clientes.
        </Text>
        <Text fontSize="lg" textAlign="center" mb="4">
          Nuestro objetivo es ofrecer una experiencia de reserva fácil, rápida y segura, garantizando la satisfacción de cada cliente.
        </Text>
        <Text fontSize="lg" textAlign="center" mb="4">
          Gracias por confiar en nosotros para gestionar tus reservaciones.
        </Text>
      </Box>
    </Flex>
  );
};

export default AboutPage;
