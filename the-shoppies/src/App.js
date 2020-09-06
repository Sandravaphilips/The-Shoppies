import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Heading, Flex, ThemeProvider, CSSReset, Spinner } from '@chakra-ui/core';
import SearchTab from './components/SearchTab';
import SearchResultsTab from './components/SearchResultsTab';
import NominationsTab from './components/NominationsTab';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState({});
  const [movie, setMovie] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [storedValue, setStoredValue] = useLocalStorage('isNominated', false)

  useEffect(() => {
    Axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=cfb96976')
    .then(({data}) => {
      if(storedValue) {
        setMovie({...data, isNominated: true})
        setIsDisabled(true)
      } else setMovie({...data, isNominated: false})
    })
    .catch(err => console.log(err))
  }, [])

  const onChange = e => {
    setSearchTerm(e.target.value)
  }

  const onNominate = e => {
      e.preventDefault()
      movie.isNominated =  true
      setIsDisabled(!isDisabled)
      setStoredValue(true)
  }

  const onRemove = e => {
      e.preventDefault()
      movie.isNominated = false;
      setIsDisabled(!isDisabled)
      setStoredValue(false)
  }

  return (    
    <ThemeProvider>
      <CSSReset />
      <div className="App">
        <Heading>The Shoppies</Heading>
        <SearchTab onChange={onChange} searchTerm={searchTerm} />
        {
          movie.Title ? (
            <Flex className='flex' justify='space-between'>
              <SearchResultsTab isDisabled={isDisabled} onNominate={onNominate} movie={movie} setSearchResult={setSearchResult} searchTerm={searchTerm} searchResult={searchResult} />
              <NominationsTab movie={movie} onRemove={onRemove} />
            </Flex>
          ) : <Flex justify='center' marginTop='50px'>
                <Spinner thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    size="xl" 
                    justifySelf='center'
                  />
              </Flex>
        }
      </div>
    </ThemeProvider>
    
  );
}

export default App;
