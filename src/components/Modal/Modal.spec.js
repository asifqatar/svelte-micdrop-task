import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { expect, describe, test, vi } from 'vitest';
import Modal from './Modal.svelte';

function setupTest(args) {
  const user = userEvent.setup();
  const { component } = render(Modal, { ...args });
  return { user, component };
}

describe('Modal Component Tests', () => {
  test('Renders Modal when show is true', () => {
    setupTest({
      show: true,
      title: 'Test Title',
      description: 'Test Description',
      warningText: 'Test Warning',
      actions: [
        { label: 'Cancel', onClick: () => {} },
        { label: 'Confirm', onClick: () => {} },
      ],
    });
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Test Warning')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cancel/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Confirm/i })).toBeInTheDocument();
  });

  test('Does not render Modal when show is false', () => {
    setupTest({
      show: false,
      title: 'Test Title',
      description: 'Test Description',
      warningText: 'Test Warning',
    });
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Description')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Warning')).not.toBeInTheDocument();
  });

  test('Displays the correct title, description, and warning text', () => {
    const title = 'Correct Title';
    const description = 'Correct Description';
    const warningText = 'Correct Warning';
    setupTest({
      show: true,
      title,
      description,
      warningText,
    });
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(warningText)).toBeInTheDocument();
  });

  test('Closes the modal on outside click', async () => {
    const { user, component } = setupTest({
      show: true,
      title: 'Test Title',
    });

    const modal = screen.getByRole('dialog');
    await user.click(modal.parentElement);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('Prevents propagation of click events within modal', async () => {
    const { user } = setupTest({
      show: true,
      title: 'Test Title',
    });

    const modal = screen.getByRole('dialog');
    const clickEvent = new MouseEvent('click', { bubbles: true });
    modal.dispatchEvent(clickEvent);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
