import React, { useEffect } from 'react';
import { Box, Heading, List, ListItem, Button } from "@chakra-ui/core";

export default ({movie, onRemove}) => {    
    return(
        <Box className='tab box-tab'>
            <Heading>Nominations</Heading>
            {
                !movie.isNominated && (
                    <p>You're yet to nominate a movie!</p>
                )
            }
            {
                movie.isNominated && (
                    <List styleType="disc">
                        <ListItem>
                            {movie.Title} ({movie.Year}) 
                            <Button data-testid='nominationsButton' size='xs' onClick={onRemove}>Remove</Button>
                        </ListItem>
                    </List>
                )
            }
        </Box>
    )
}