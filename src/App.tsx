import * as React from 'react';
import { Page, Rectangle, Component } from 'react-figma';

export const App = () => {
    return (
        <Page isCurrent name="Page X">
            <Component name="Component Y">
                <Rectangle style={{width: 200, height: 100, backgroundColor: "#002fff"}}/>
            </Component>
            <Rectangle style={{width: 200, height: 100, backgroundColor: "#0cff00"}}/>
        </Page>
    );
};
