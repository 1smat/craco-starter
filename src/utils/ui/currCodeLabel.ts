export const currCodeLabel = (num: any, options: any = []) => options?.find(({ value }: { value: number }) => value === +num)?.label;
