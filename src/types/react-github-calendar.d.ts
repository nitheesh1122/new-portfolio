declare module 'react-github-calendar' {
    import { FunctionComponent } from 'react';

    interface GitHubCalendarProps {
        username: string;
        blockSize?: number;
        blockMargin?: number;
        fontSize?: number;
        colorScheme?: 'light' | 'dark';
        style?: React.CSSProperties;
        children?: React.ReactNode;
        theme?: any;
    }

    export const GitHubCalendar: FunctionComponent<GitHubCalendarProps>;
}
