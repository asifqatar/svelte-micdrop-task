import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import Badge from './Badge.svelte';

function setupTest(args = {}) {
  const user = userEvent.setup();
  const onClick = vi.fn();
  const { component, container } = render(Badge, { props: { ...args } });
  component.$on('click', onClick);
  const badge = container.querySelector('div'); 
  return {
    user,
    badge,
    onClick,
  };
}

describe('Badge Component Tests', () => {
  test('Renders with default props', () => {
    const { badge } = setupTest();
    expect(badge).toBeInTheDocument();
  });

  test('Renders with different sizes', () => {
    const { badge: smallBadge } = setupTest({ size: 'small' });
    expect(smallBadge).toHaveClass('text-[7px]');

    const { badge: mediumBadge } = setupTest({ size: 'medium' });
    expect(mediumBadge).toHaveClass('text-[10px]');

    const { badge: largeBadge } = setupTest({ size: 'large' });
    expect(largeBadge).toHaveClass('text-sm');
  });

  test('Applies correct status styles', () => {
    const { badge: successBadge } = setupTest({ status: 'success' });
    expect(successBadge).toHaveStyle('color: #15A033');
    expect(successBadge).toHaveStyle('background-color: rgba(21, 160, 51, 0.15)');

    const { badge: warningBadge } = setupTest({ status: 'warning' });
    expect(warningBadge).toHaveStyle('color: rgba(255, 146, 46, 1)');
    expect(warningBadge).toHaveStyle('background-color: rgba(255, 146, 46, 0.15)');

    const { badge: dangerBadge } = setupTest({ status: 'danger' });
    expect(dangerBadge).toHaveStyle('color: rgba(255, 102, 102, 1)');
    expect(dangerBadge).toHaveStyle('background-color: rgba(255, 102, 102, 0.15)');
  });

  test('Applies correct tier styles', () => {
    const { badge: tier1Badge } = setupTest({ tier: 1, tierVariation: 'red' });
    expect(tier1Badge).toHaveStyle('color: #f66');
    expect(tier1Badge).toHaveStyle('background-color: rgba(255, 102, 102, 0.15)');

    const { badge: tier2Badge } = setupTest({ tier: 2 });
    expect(tier2Badge).toHaveStyle('color: rgba(255, 146, 46, 1)');
    expect(tier2Badge).toHaveStyle('background-color: rgba(255, 146, 46, 0.15)');

    const { badge: tier3Badge } = setupTest({ tier: 3 });
    expect(tier3Badge).toHaveStyle('color: rgba(2, 132, 254, 1)');
    expect(tier3Badge).toHaveStyle('background-color: rgba(2, 132, 254, 0.15)');
  });

  test('Applies correct event styles', () => {
    const { badge: squareEventBadge } = setupTest({ event: 'squareEvent' });
    expect(squareEventBadge).toHaveStyle('color: rgba(37, 43, 55, 1)');
    expect(squareEventBadge).toHaveStyle('background-color: rgba(2, 132, 254, 0.5)');
    expect(squareEventBadge).toHaveClass('square-event');

    const { badge: circleEventBadge } = setupTest({ event: 'circleEvent' });
    expect(circleEventBadge).toHaveStyle('color: #000000');
    expect(circleEventBadge).toHaveStyle('background-color: #add8e6');
    expect(circleEventBadge).toHaveClass('circle-event');
  });

  test('Handles custom text and background colors', () => {
    const { badge } = setupTest({ textColor: '#000', bgColor: '#fff' });
    expect(badge).toHaveStyle('color: #000');
    expect(badge).toHaveStyle('background-color: #fff');
  });

  test('Handles no border when noBorder prop is true', () => {
    const { badge } = setupTest({ noBorder: true });
  
    expect(badge).toHaveStyle('border: none');
  });
  

  test('Renders with an icon', () => {
    const { badge } = setupTest({ icon: 'icon-url.png' });
    const icon = badge.querySelector('img');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', 'icon-url.png');
  });

  test('Dispatches click event', async () => {
    const { user, badge, onClick } = setupTest();
    await user.click(badge);
    expect(onClick).toHaveBeenCalledOnce();
  });
});
