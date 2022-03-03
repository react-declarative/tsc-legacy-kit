import * as React from 'react';

export interface TabContextValue {
  idPrefix: string;
  value: string;
}

export interface TabContextProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The value of the currently selected `Tab`.
   */
  value: string;
}
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/components/tabs/)
 *
 * API:
 *
 * - [TabContext API](https://mui.com/api/tab-context/)
 */
export default function TabContext(props: TabContextProps): JSX.Element;
export declare function useTabContext(): TabContextValue | null;
export declare function getPanelId(context: TabContextValue, tabValue: string): string;
export declare function getTabId(context: TabContextValue, tabValue: string): string;
