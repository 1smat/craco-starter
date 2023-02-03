const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "primary-color": "#325ecd",
              "success-color": "#6B8B48",
              "error-color": "#E9573F",
              //btn
              "btn-border-radius-base": "10px",
              "btn-default-color": "#325ecd",
              "btn-default-border": "#325ecd",
              "btn-border-width": "2px",
              "btn-font-weight": 700,
              "btn-primary-shadow": "0px 20px 20px rgba(21, 37, 126, 0.22)",
              "input-height-base": "40px",
              "input-height-lg": "50px",
              "input-height-sm": "35px",
              "input-color": "#000",
              "input-placeholder-color": "#717C8C",
              "input-border-color": "#b2c3ee",
              "input-bg": "#fff",
              "form-error-input-bg": "#efddda",
              "pagination-item-size": "17px",
              "pagination-item-bg-active": "#f6f6f7",
              "pagination-item-disabled-bg-active": "#f6f6f7",
              "pagination-item-disabled-color-active": "#777b82",
              "switch-shadow-color": "fade(#c1cff1, 20%)",
              "switch-min-width": "50px",
              "switch-height": "30px",
              "switch-disabled-opacity": "0.6",
              //Table
              "table-header-bg": "#f6f6f7",
              "table-border-color": "#E6E9ED",
              "select-border-color": "#B6BCCD",
              "checkbox-size": "18px",
              "checkbox-color": "#325ECD",
              "checkbox-check-bg": "#CDD1DD",
              "select-single-item-height-lg": "30px"
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
