import React from 'react';
import { Box, Heading, InputGroup, InputLeftElement, Icon, Input } from '@chakra-ui/core';

export default ({searchTerm, onChange}) => {
    return(
        <Box>
            <Heading as='h5' size='sm'>Movie title</Heading>
            <InputGroup>
                <InputLeftElement children={<Icon name="search" color="gray.300" />} />
                <Input type='text' placeholder='Start typing' value={searchTerm} onChange={onChange} />
            </InputGroup>
        </Box>
    )
}