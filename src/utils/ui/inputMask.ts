export const maskInput = (val: number) => (val ? `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ") : val);

export const removeSpaces = (val: string) => (val ? Number(val.replace(/\s/g, "")) : val);
