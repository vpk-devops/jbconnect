export const isEmail = (s: string) => /\S+@\S+\.\S+/.test(s);
export const minLength = (s: string, n = 6) => s.length >= n;
