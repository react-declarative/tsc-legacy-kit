import { ReactElement } from 'react';

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://facebook.github.io/react/docs/react-dom-stream.html#rendertostream
 */
export declare function renderToStream(element: ReactElement): any;

/**
 * Similar to renderToStream, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://facebook.github.io/react/docs/react-dom-stream.html#rendertostaticstream
 */
export declare function renderToStaticStream(element: ReactElement): any;
export declare const version: string;

export as namespace ReactDOMNodeStream;
