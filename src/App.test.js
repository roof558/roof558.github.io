import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Sidebar from './components/Sidebar';

//Simple text check on the Sidebar
test('renders Sidebar Home on the App', () => {
  render(<App />);
  const sidebarText = screen.getByText(/Home/i);
  expect(sidebarText).toBeInTheDocument();
});

test('renders Sidebar About on the App', () => {
  render(<App />);
  const sidebarText = screen.getByText(/About/i);
  expect(sidebarText).toBeInTheDocument();
});

test('renders Sidebar Project on the App', () => {
  render(<App />);
  const sidebarText = screen.getByText(/Project/i);
  expect(sidebarText).toBeInTheDocument();
});

test('renders Sidebar Contact on the App', () => {
  render(<App />);
  const sidebarText = screen.getByText(/Contact/i);
  expect(sidebarText).toBeInTheDocument();
});

// Button click to change width of sidebar
test('renders Sidebar on the App', () => {
  const { container } = render(<Sidebar />);
  const initialWidth = container.firstChild.style.width;
  fireEvent.click(container.querySelector('button'));
  const updatedWidth = container.firstChild.style.width;
  expect(updatedWidth).not.toBe(initialWidth);
});