import { writable } from "svelte/store";

export const musicList = writable([
    {
        title: 'Deep Space',
        source: '/musics/deep-space.mp3',
        background: '/images/deep-space.jpg'
    },
    {
        title: 'Earning Happiness',
        source: '/musics/earning-happiness.mp3',
        background: '/images/earning-happiness.jpg'
    },
    {
        title: 'Happy Clappy',
        source: '/musics/happy-clappy.mp3',
        background: '/images/happy-clappy.jpg'
    },
    {
        title: 'Mad Hatter',
        source: '/musics/mad-hatter.mp3',
        background: '/images/mad-hatter.jpg'
    },
    {
        title: 'Somewhere Nice',
        source: '/musics/somewhere-nice.mp3',
        background: '/images/somewhere-nice.jpg'
    }
])

export const count = writable(0)
