
/// <reference path="./@mui.d.ts" />

import materialDefault from '@mui/material/AppBar';
import iconsDefault from '@mui/icons-material';
import gridDefault from '@mui/x-data-grid';

declare global {

  export namespace sdk {

    export namespace mui {
      export const material = materialDefault;
      export const icons = iconsDefault;
      export const grid = gridDefault;
    };

  };

};
