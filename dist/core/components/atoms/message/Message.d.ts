import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type Appearance = 'default' | 'alert' | 'info' | 'success' | 'warning';
export interface MessageProps extends BaseProps {
    appearance: Appearance;
    title?: string;
    children: React.ReactNode;
}
export declare const Message: {
    (props: MessageProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
    };
};
export default Message;
