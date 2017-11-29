// @ts-check
import * as React from 'react';
import {configure, addDecorator} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo, setDefaults} from '@storybook/addon-info';

import {description, homepage} from '../../package.json';

setOptions({
    name: description,
    url: homepage,
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: true,
    showSearchBox: false,
    downPanelInRight: false,
    hierarchySeparator: /\//,
});

setDefaults({
    header: false, // Toggles display of header with component name and description
    inline: true, // Displays info inline vs click button to view
    source: true, // Displays the source of story Component
    propTables: [/* Components used in story */], // displays Prop Tables with this components
    propTablesExclude: [], // Exclude Components from being shoun in Prop Tables section
    styles: {}, // Overrides style of addon
    marksyConf: {}, // Overrides components used to display markdown. Warning! This option's name will be likely deprecated in favor to "components" with the same API in 3.3 release. Follow this PR #1501 for details
    maxPropsIntoLine: 1, // Max props to display per line in source code
    maxPropObjectKeys: 10,
    maxPropArrayLength: 10,
    maxPropStringLength: 100,
});

addDecorator((story, context) => withInfo('common info')(story)(context));
addDecorator(withKnobs);
addDecorator(story => (<div style={{padding: 30}}>{story()}</div>));

const req = require.context('../../src/client', true, /.story.tsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
