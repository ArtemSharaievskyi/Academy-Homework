import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserList from './components/UserList';
import { vi } from 'vitest';

beforeEach(() => {
  global.fetch = vi.fn();
});

afterEach(() => {
  vi.restoreAllMocks();
});

test('показується "Завантаження..." при старті', () => {
  fetch.mockResolvedValueOnce({
    json: () => Promise.resolve([]),
  });

  render(<UserList />);
  expect(screen.getByText(/Завантаження/i)).toBeInTheDocument();
});

test('відображає список користувачів після завантаження', async () => {
  fetch.mockResolvedValueOnce({
    json: () => Promise.resolve([
      { id: 1, name: 'Іван' },
      { id: 2, name: 'Марія' },
    ])
  });

  render(<UserList />);
  await waitFor(() => expect(screen.getByText('Іван')).toBeInTheDocument());
  expect(screen.getByText('Марія')).toBeInTheDocument();
});

test('додає нового користувача в список', async () => {
  fetch
    .mockResolvedValueOnce({
      json: () => Promise.resolve([]),
    })
    .mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ id: 3, name: 'Олег' }),
    });

  render(<UserList />);
  await waitFor(() => expect(screen.queryByText(/Завантаження/i)).not.toBeInTheDocument());

  fireEvent.change(screen.getByPlaceholderText('Введіть ім’я'), {
    target: { value: 'Олег' },
  });
  fireEvent.click(screen.getByText('Додати'));

  await waitFor(() => expect(screen.getByText('Олег')).toBeInTheDocument());
});

test('показує помилку, якщо ім’я не введено', async () => {
  fetch.mockResolvedValueOnce({
    json: () => Promise.resolve([]),
  });

  render(<UserList />);
  await waitFor(() => expect(screen.queryByText(/Завантаження/i)).not.toBeInTheDocument());

  fireEvent.click(screen.getByText('Додати'));

  expect(await screen.findByText(/Ім’я не може бути порожнім/)).toBeInTheDocument();
});
