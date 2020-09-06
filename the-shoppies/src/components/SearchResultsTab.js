import React, { useEffect } from 'react';
import { Box, Heading, List, ListItem, Button } from '@chakra-ui/core';

export default ({searchTerm, searchResult, setSearchResult, movie, isDisabled, onNominate}) => {
    
    useEffect(() => {
        searchTerm && movie.Title.toLowerCase().includes(searchTerm.toLowerCase()) ? setSearchResult(movie) : setSearchResult({})        
    }, [searchTerm, movie])

    if(!searchTerm) {
        return(
            <Box className='tab box-tab'>
                <Heading as='h4' size='md'>Start by searching for your favourite movie</Heading>
            </Box>
        )
    }

    if(searchTerm && !searchResult.Title) {
        return(
            <Box className='tab box-tab'>
                <Heading as='h4' size='md'>Oops! No movies match your search</Heading>
            </Box>
        )
    }

    return(
        <Box className='tab box-tab'>
            <Heading>Results for "{searchTerm}"</Heading>
            <List>                
                <ListItem>
                    {searchResult.Title} ({searchResult.Year}) 
                    <Button isDisabled={isDisabled} size='xs' onClick={onNominate} >Nominate</Button>
                </ListItem>
                
            </List>
        </Box>
    )
}