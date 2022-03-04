
import materialDefault from '@mui/material';
import iconsDefault from '@mui/icons-material';
import gridDefault from '@mui/x-data-grid';

import cssDefault from "@emotion/css";

import declarativeDefault from 'react-declarative';

declare global {

  export namespace sdk {

    export namespace emotion {
        export const css = cssDefault;
    };

    export namespace mui {
        export const material = materialDefault;
        export const icons = iconsDefault;
        export const grid = gridDefault;
    };

    export const declarative = declarativeDefault;

  };

};
