import React from 'react';
import * as rtl  from '@testing-library/react';
import NominationsTab from '../NominationsTab';
import { ThemeProvider } from '@chakra-ui/core';

let tools;

beforeEach(() => {
  rtl.cleanup();
});

describe('<NominationsTab />', () => {
    const movie = {Title: 'random title', Year: '1997', isNominated: false};
    
    test('shows "no nominations" message when there are none', () => {
        tools = rtl.render(<NominationsTab movie={movie} />);
        const message = tools.getByText(/yet to nominate/i);
        expect(message).toBeInTheDocument();
    });

    test('shows nominations when there are', () => {
        tools = rtl.render(
            <ThemeProvider>
                <NominationsTab movie={{...movie, isNominated: true}} />
            </ThemeProvider>
        );
        const nominations = tools.getByText(/random/i);
        expect(nominations).toBeInTheDocument();

        const button = tools.getByTestId('nominationsButton');
        expect(button).toBeInTheDocument();
    });
})