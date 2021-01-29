import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
    width: 100%;
    padding: 15px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.colors.borderRadius};
    outline: 0;
    margin-bottom: 25px;
`;

export default function Input( {onBlur, placeholder, ...props}) {
    return (
        <div>
            <InputBase onBlur={onBlur} placeholder={placeholder} {...props}/>
        </div>
    )
}

Input.PropTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}