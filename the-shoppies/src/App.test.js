import React from 'react';
import * as rtl  from '@testing-library/react';
import App from './App';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<App />);
});

test('renders the header', () => {
  const header = tools.getByText(/The Shoppies/i);
  expect(header).toBeInTheDocument();
});
