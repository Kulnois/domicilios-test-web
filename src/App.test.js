import { render, screen } from '@testing-library/react';
import App from './App';

test('renders domicilios test to navbar', () => {
  render(<App />);
  const linkElement = screen.getByText(/domicilios test/i);
  expect(linkElement).toBeInTheDocument();
});
