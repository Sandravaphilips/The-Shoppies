import React from 'react';
import { Box, Heading, InputGroup, InputLeftElement, Icon, Input } from '@chakra-ui/core';

export default ({searchTerm, onChange}) => {
    return(
        <Box className='tab'>
            <Heading as='h5' size='sm'>Movie title</Heading>
            <InputGroup className='search'>
                <InputLeftElement children={<Icon id='left-icon' name="search" color="gray.300" />} />
                <Input type='text' placeholder='Start typing...' value={searchTerm} onChange={onChange} />
            </InputGroup>
        </Box>
    )
}