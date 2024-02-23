import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="gray.500" color="white" py="4">
      <Flex justify="flex-end" px="4">
        <Text fontSize="xl" fontWeight="bold">APP RESERVATION</Text>
      </Flex>
    </Box>
  );
};

export default Header;
