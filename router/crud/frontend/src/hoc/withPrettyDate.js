import React from "react";
import PropTypes from "prop-types";

const withPrettyDate = (WrappedComponent) => {
    const Wrapper = ({ date }) => {
        const prettyDate = (date) => {
            const oldDate = new Date(date);
            const currentDate = new Date();
            const newDate = currentDate - oldDate;

            if (newDate < 1000 * 60) return "только что";
            else if (newDate < 1000 * 60 * 60) return `${Math.trunc(newDate / (1000 * 60))} мин.`;
            else if (newDate < 1000 * 60 * 60 * 24) return `${Math.trunc(newDate / (1000 * 60 * 60))} ч.`;
            else if (newDate >= 1000 * 60 * 60 * 24) return `${Math.trunc(newDate / (1000 * 60 * 60 * 24))} д.`;
        };

        return <WrappedComponent date={prettyDate(date)} />;
    };

    Wrapper.defaultProps = {
        date: 0,
    };

    Wrapper.propTypes = {
        date: PropTypes.number,
    };

    return Wrapper;
};

export default withPrettyDate;
