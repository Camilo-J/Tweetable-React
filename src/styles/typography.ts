export const fonts = {
  primary: `'Source Code Pro', monospace
  , -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif `,
};

type textkey = keyof typeof typography.text;
type headkey = keyof typeof typography.head;

export const typography = {
  text: {
    xs: `
    font-size: 0.75rem;
    line-height: 1rem;
    `,
    sm: `
    font-size: 0.875rem;
    line-height: 1.25rem;
    `,
    md: `
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.26rem;
    `,
    lg: `
    font-size: 1.125rem;
    line-height: 1.56rem;
    font-style: normal;
    font-weight: 700;
    `,
    xl: `
    font-size: 1.25rem;
    line-height: 1.75rem;
    `,
  },
  head: {
    xs: `
    font-size: 1.25rem;
    line-height: 1.75rem;
    `,
    sm: `
    font-size: 1.5rem;
    line-height: 2rem;
    `,
    md: `
    font-size: 1.875rem;
    line-height: 2.25rem;
    `,
    lg: `
    font-size: 2.25rem;
    line-height: 2.5rem;
    `,
    xl: `
    font-size: 3rem;
    line-height: 3rem;
    `,
  },
};

for (let size in typography.text) {
  typography.text[size as textkey] += `
  font-family: ${fonts.primary};
  `;
}

for (const size in typography.head) {
  typography.head[size as headkey] += `
  font-family: ${fonts.primary};
  font-weight: 600;
  `;
}
