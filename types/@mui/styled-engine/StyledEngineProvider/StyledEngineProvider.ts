import * as React from 'react';
export interface StyledEngineProviderProps {
    children?: React.ReactNode;
    injectFirst?: boolean;
}
export type StyledEngineProvider = (props: StyledEngineProviderProps) => JSX.Element;
export default StyledEngineProvider;
