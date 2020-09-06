import React, { useEffect } from 'react';
import { Box, Heading, List, ListItem, Button } from "@chakra-ui/core";

export default ({movie, onRemove}) => {

    useEffect(() => {
        return
    }, [movie.isNominated])
    
    return(
        <Box>
            <Heading>Nominations</Heading>
            {
                !movie.isNominated && (
                    <p>You're yet to nominate a movie!</p>
                )
            }
            {
                movie.isNominated && (
                    <List>
                        <ListItem>
                            {movie.Title} ({movie.Year}) 
                            <Button size='xs' onClick={onRemove}>Remove</Button>
                        </ListItem>
                    </List>
                )
            }
        </Box>
    )
}