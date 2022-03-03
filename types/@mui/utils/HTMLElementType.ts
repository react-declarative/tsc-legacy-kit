export type HTMLElementType = (props: {
    [key: string]: unknown;
}, propName: string, componentName: string, location: string, propFullName: string) => Error | null;


export default HTMLElementType