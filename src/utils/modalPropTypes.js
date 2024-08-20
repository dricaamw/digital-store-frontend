import PropTypes from 'prop-types';

export const modalPropTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    cardNumber: PropTypes.string.isRequired,
};