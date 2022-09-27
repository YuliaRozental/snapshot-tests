import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text Mermaid', () => {
  render(<App />)
  const nameElement = screen.getByText(/Mermaid/i);
  expect(nameElement).toBeInTheDocument();
});
