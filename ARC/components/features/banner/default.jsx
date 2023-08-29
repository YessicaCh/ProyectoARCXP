import React from "react";
import PropTypes from "prop-types";
import "./banner.css";

const Banner = (props) => {
    const { customFields } = props;
    const { contentBanner } = customFields;

    return (
        <div className="banner bg-dark text-center py-5">
            <div className="container">
                <h1 className="display-4 text-white">{contentBanner}</h1>
            </div>
        </div>
    );
};

Banner.label = {
    en: "Banner",
    es: "Banner",
};

Banner.propTypes = {
    customFields: PropTypes.shape({
        contentBanner: PropTypes.string.tag({
            name: "Contenido",
        }),
    }),
};

export default Banner;
