export const required = (value) => {
    if (value) return undefined;
    return 'Required'
};


export const MaxLenghtCreator = (max) => (value) => {
    if (value && value.length > max) return 'Max symbols';
    return undefined;
};