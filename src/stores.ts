import { writable } from 'svelte/store';

export const Theme = {
	LIGHT: 'LIGHT',
	DARK: 'DARK'
};

export const theme = writable(localStorage.getItem('theme') || Theme.LIGHT);

theme.subscribe((value) => {
	localStorage.setItem('theme', value);
});

export const toggleDarkMode = () => {
	theme.update((current) => (current === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
};
