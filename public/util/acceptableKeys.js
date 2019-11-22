export const acceptableKeys = [
    'ArrowUp',
    'ArrowDown',
    'ArrowRight',
    'ArrowLeft',
    'w',
    's',
    'd',
    'a',
    'j',
    'k',
    'l',
    'i',
];

export function translateKeys(keypress) {
    if (keypress === 'ArrowUp') return 'up';
    if (keypress === 'w') return 'up';
    if (keypress === 'i') return 'up';

    if (keypress === 'ArrowDown') return 'down';
    if (keypress === 's') return 'down';
    if (keypress === 'k') return 'down';

    if (keypress === 'ArrowLeft') return 'left';
    if (keypress === 'a') return 'left';
    if (keypress === 'j') return 'left';

    if (keypress === 'ArrowRight') return 'right';
    if (keypress === 'd') return 'right';
    if (keypress === 'l') return 'right';
    
}