import React from 'react';
import * as rtl  from '@testing-library/react';
import SearchTab from '../SearchTab';
import { ThemeProvider } from '@chakra-ui/core';

beforeEach(rtl.cleanup)

test('<SearchTab />', () => {
    const { getByRole, debug } = rtl.render(
        <ThemeProvider>
            <SearchTab />
        </ThemeProvider>
    );
  
    const input = getByRole('textbox');
    expect(input).toHaveValue('');
  
    rtl.fireEvent.change(input, { target: { value: 'gua' } });
    expect(input).toHaveValue('gua');
    debug();
})