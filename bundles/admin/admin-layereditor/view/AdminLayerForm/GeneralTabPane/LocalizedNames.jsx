import React from 'react';
import PropTypes from 'prop-types';
import { LabeledInput, LocalizationComponent, Message } from 'oskari-ui';
import { Controller, LocaleConsumer } from 'oskari-ui/util';
import styled from 'styled-components';
import { MandatoryIcon } from '../Mandatory';

const PaddingBottom = styled('div')`
    padding-bottom: 10px;
`;
export const LocalizedNames = LocaleConsumer(({ layer, controller, getMessage }) => (
    <PaddingBottom>
        <LocalizationComponent
            value={layer.locale}
            languages={Oskari.getSupportedLanguages()}
            onChange={controller.setLocalizedNames}
        >
            <LabeledInput type='text' label={getMessage('fields.locale.name')} name='name' mandatory={<MandatoryIcon />} />
            <LabeledInput type='text' label={<Message messageKey='fields.locale.description' />} name='subtitle' />
        </LocalizationComponent>
    </PaddingBottom>
));
LocalizedNames.propTypes = {
    layer: PropTypes.object.isRequired,
    controller: PropTypes.instanceOf(Controller).isRequired
};
