import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Button } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    border: none;
    background: none;
    width: 16px;
    height: 16px;
    &:hover {
        background: none;
    }
`;

export const IconButton = ({ title, icon, onClick }) => {
    if (title) {
        return (
            <Tooltip title={title}>
                <StyledButton icon={icon} onClick={onClick} />
            </Tooltip>
        );
    } else {
        return (
            <StyledButton
                icon={icon}
                onClick={onClick}
            />
        );
    }
};

IconButton.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func
};
