import Overlay from './overlay/Overlay.svelte';

export const defaultOverlayOptions = {
    overlay_color: 'rgb(11, 11, 11, 0.7)',
    line_color: 'rgba(167, 167, 167, 0.5)',
    show_third_lines: true
};

export const defaultOptions = {
    shape: 'rect',
    crop_window_margin: 10,
    overlay: Overlay,
    overlay_options: defaultOverlayOptions
};

export const defaultValue = {
    position: { x: 0, y: 0 },
    aspect: 1.0,
    rotation: 0,
    scale: 0
};
