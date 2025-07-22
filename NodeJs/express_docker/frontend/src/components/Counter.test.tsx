import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';
import { describe, expect, test } from 'vitest';


describe('Counter component', () => {
  test('renders counter', () => {
    render(<Counter initialCount={5} max={0} min={0} />);
    expect(screen.getByText('Count: 5')).toBeInTheDocument();
  });


  test('increments when + clicked and below max', async () => {
    const user = userEvent.setup()
    render(<Counter initialCount={5} min={0} max={10} />)

    await user.click(screen.getByText('+'))
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 6')
  });

  test('discrement when - clicked and below min', async () => {
    const user = userEvent.setup()
    render(<Counter initialCount={5} min={0} max={10} />)

    await user.click(screen.getByText('-'))
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 4')
  });

  test('does not increment when counter > max', async () => {
    const user = userEvent.setup()
    render(<Counter initialCount={10} min={0} max={10} />)

    await user.click(screen.getByText('+'))
    expect(screen.getByText('Count: 10')).toBeInTheDocument() 
  });

   test('does not discrement when counter < min', async () => {
    const user = userEvent.setup()
    render(<Counter initialCount={10} min={10} max={15} />)

    await user.click(screen.getByText('-'))
    expect(screen.getByText('Count: 10')).toBeInTheDocument() 
  })
})