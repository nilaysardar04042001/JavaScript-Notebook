import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('renders the application title and version', () => {
    render(<App />);

    expect(screen.getByText(/javascript notepad/i)).toBeInTheDocument();
    expect(screen.getByText(/version/i)).toBeInTheDocument();
  });
});
