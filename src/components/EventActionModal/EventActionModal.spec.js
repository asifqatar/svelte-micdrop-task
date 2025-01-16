import { render, screen, waitFor } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { expect, describe, test, vi } from 'vitest';
import EventActionModal from './EventActionModal.svelte';

function setupTest(args) {
  const user = userEvent.setup();
  const onReschedule = vi.fn();
  const onManage = vi.fn();
  const onDelete = vi.fn();
  const { component } = render(EventActionModal, { ...args });
  component.$on('reschedule', onReschedule);
  component.$on('manage', onManage);
  component.$on('delete', onDelete);
  return {
    user,
    component,
    onReschedule,
    onManage,
    onDelete,
    rescheduleButton: () => screen.getByRole('button', { name: /Reschedule/i }),
    manageButton: () => screen.getByRole('button', { name: /Manage/i }),
    deleteButton: () => screen.getByRole('button', { name: /Delete/i }),
  };
}

describe('EventActionModal Component Tests', () => {
  test('Renders EventActionModal when show is true', () => {
    setupTest({ show: true, fromDateTime: '10:30 Tuesday June 20, 2024', toDateTime: '12:30 Wednesday June 21, 2024' });
    expect(screen.getByText('From')).toBeInTheDocument();
    expect(screen.getByText('To')).toBeInTheDocument();
    expect(screen.getByText('10:30 Tuesday June 20, 2024')).toBeInTheDocument();
    expect(screen.getByText('12:30 Wednesday June 21, 2024')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reschedule/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Manage/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Delete/i })).toBeInTheDocument();
  });

  test('Does not render EventActionModal when show is false', () => {
    setupTest({ show: false, fromDateTime: '10:30 Tuesday June 20, 2024', toDateTime: '12:30 Wednesday June 21, 2024' });
    expect(screen.queryByText('From')).not.toBeInTheDocument();
    expect(screen.queryByText('To')).not.toBeInTheDocument();
  });

  test('Displays the correct fromDateTime and toDateTime', () => {
    const fromDateTime = '10:30 Tuesday June 20, 2024';
    const toDateTime = '12:30 Wednesday June 21, 2024';
    setupTest({ show: true, fromDateTime, toDateTime });
    expect(screen.getByText(fromDateTime)).toBeInTheDocument();
    expect(screen.getByText(toDateTime)).toBeInTheDocument();
  });

  test('Calls onReschedule and hides modal when Reschedule button is clicked', async () => {
    const { user, onReschedule, rescheduleButton } = setupTest({ show: true, fromDateTime: '10:30 Tuesday June 20, 2024', toDateTime: '12:30 Wednesday June 21, 2024' });

    await user.click(rescheduleButton());
    expect(onReschedule).toHaveBeenCalledOnce();
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  test('Calls onManage and hides modal when Manage button is clicked', async () => {
    const { user, onManage, manageButton } = setupTest({ show: true, fromDateTime: '10:30 Tuesday June 20, 2024', toDateTime: '12:30 Wednesday June 21, 2024' });

    await user.click(manageButton());
    expect(onManage).toHaveBeenCalledOnce();
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  test('Calls onDelete and hides modal when Delete button is clicked', async () => {
    const { user, onDelete, deleteButton } = setupTest({ show: true, fromDateTime: '10:30 Tuesday June 20, 2024', toDateTime: '12:30 Wednesday June 21, 2024' });

    await user.click(deleteButton());
    expect(onDelete).toHaveBeenCalledOnce();
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});