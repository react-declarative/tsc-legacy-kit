import * as React from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { InternalStandardProps as StandardProps } from '@mui/material';
import { TimelineItemClasses } from './timelineItemClasses';
export interface TimelineItemProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>> {
    /**
     * The position where the timeline's item should appear.
     */
    position?: 'left' | 'right';
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<TimelineItemClasses>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
}
/**
 *
 * Demos:
 *
 * - [Timeline](https://mui.com/components/timeline/)
 *
 * API:
 *
 * - [TimelineItem API](https://mui.com/api/timeline-item/)
 */
export type TimelineItem = (props: TimelineItemProps) => JSX.Element;
export default TimelineItem;
