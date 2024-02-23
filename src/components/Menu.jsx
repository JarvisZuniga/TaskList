import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Flex bg="gray.900" p={4} color="white" flexDirection="column" alignItems="flex-start"> {/* Cambia la dirección de los elementos a columna y alinea el contenido a la izquierda */}
      <Flex flex={1} maxW="1200px" mx="auto" alignItems="center" flexDirection="column"> {/* Alinea los elementos horizontalmente y cambia la dirección a columna */}
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={4}>Logo</Text> {/* Añade margen inferior */}
        </Box>
        <Flex flexDirection="column"> {/* Cambia la dirección de los elementos a columna */}
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/about">Sobre Nosotros</MenuItem>
          <MenuItem to="/tasks">Reservaciones</MenuItem>
        </Flex>
      </Flex>
    </Flex>
  );
};

const MenuItem = ({ to, children }) => {
  return (
    <Link to={to}>
      <Text my={2} cursor="pointer" _hover={{ textDecoration: 'underline' }}>{children}</Text> {/* Añade margen vertical */}
    </Link>
  );
};

export default Menu;
