import React from 'react';
import { Radio } from '../lib/react-radio';

export default {
    title: 'Components/Form/Radio',
    component: Radio
}

const Template = args => <Radio {...args} />;

export const text = Template.bind({});
text.storyName = 'Text Option';
text.args = {
    children: (
        <div
            label=""
            value=""
            { ...Option.args }
        />
    )
};
Option.args = {
    label: 'Sample option',
    value: 'sample-option'
};