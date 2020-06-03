export const toMinutes = (seconds) =>
    `${Math.floor(seconds / 60)}:${Math.round(seconds % 60) < 10
        ? '0' + Math.round(seconds % 60)
        : Math.round(seconds % 60)}`