export const isTablet = () => {
    if (typeof window === 'undefined') {
        return false;
    }
    const width = window.innerWidth;
    return width <= 768;
}

export const isSmallLaptop = () => {
    if (typeof window === 'undefined') {
        return false;
    }
    const width = window.innerWidth;
    return width <= 960;
}