import { render, screen } from '@testing-library/svelte';
import { expect, describe, test } from 'vitest';
import LoadingModal from './LoadingModal.svelte';

function setupTest(args) {
  return render(LoadingModal, { ...args });
}

describe('LoadingModal Component Tests', () => {
  test('Renders LoadingModal when show is true', () => {
    setupTest({ show: true });
    expect(screen.getByText('Please wait..')).toBeInTheDocument();
    expect(screen.getByText('Checking database')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /checking/i })).toBeInTheDocument();
    expect(screen.getByAltText('')).toBeInTheDocument(); // Adjusted to query by alt text
  });

  test('Does not render LoadingModal when show is false', () => {
    setupTest({ show: false });
    expect(screen.queryByText('Please wait..')).not.toBeInTheDocument();
    expect(screen.queryByText('Checking database')).not.toBeInTheDocument();
  });

  test('Displays the correct text and loading icon', () => {
    setupTest({ show: true });
    expect(screen.getByText('Please wait..')).toBeInTheDocument();
    expect(screen.getByText('Checking database')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /checking/i })).toBeInTheDocument();
    expect(screen.getByAltText('')).toHaveAttribute('src', expect.stringContaining('loading-03.svg')); // Adjusted to query by alt text
  });
});