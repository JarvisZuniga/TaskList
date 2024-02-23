import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      direction="column"
      py="6"
      bg="gray.800"
      color="white"
    >
      <Text fontSize="lg" fontWeight="bold" mb={4}>APP RESERVATION</Text>
      <Text fontSize="sm" textAlign="center">
        © {new Date().getFullYear()} Jarvis Zuniga. All rights reserved.
      </Text>
      <Flex mt={2}>
        <Link mx={2}>About</Link>
        <Link mx={2}>Contact</Link>
        <Link mx={2}>Privacy Policy</Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
