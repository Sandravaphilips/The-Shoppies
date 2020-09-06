import React from 'react';
import * as rtl  from '@testing-library/react';
import SearchResultsTab from '../SearchResultsTab';
import { ThemeProvider } from '@chakra-ui/core';

let tools;

beforeEach(() => {
  rtl.cleanup();
});

describe('<SearchResultsTab />', () => {
    let searchResult = {}; 
    const movie = {Title: 'random title', Year: '1997'}; 

    const setSearchResult = jest.fn()
        .mockImplementation(() =>
            Promise.resolve({ entity: { success: true, data: ['hello', 'adios'] } })
        );

    test('it renders a "start by searching" message without any input', () => {        
        tools = rtl.render(<SearchResultsTab setSearchResult={setSearchResult} />);
        const message = tools.getByText(/Start by searching/i);
        expect(message).toBeInTheDocument();
    });

    test('it renders an "oops" message without no matches', () => {        
        tools = rtl.render(<SearchResultsTab searchTerm='z' searchResult={searchResult} setSearchResult={setSearchResult} movie={{Title: 'random title', Year: '1997'}} />);
        const message = tools.getByText(/oops/i);
        expect(message).toBeInTheDocument();
    });

    test('it renders a movie with a match', () => { 
        tools = rtl.render(
            <ThemeProvider>
                <SearchResultsTab searchTerm={'ra'} searchResult={movie} setSearchResult={setSearchResult} movie={movie} />
            </ThemeProvider>
        );
        const message = tools.getByText(/random/i);
        expect(message).toBeInTheDocument();

        const button = tools.getByTestId('searchResultsButton');
        expect(button).toBeInTheDocument();
    });    
})