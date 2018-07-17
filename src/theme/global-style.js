import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

// A helper method from Styled Components to write global CSS. URL: https://www.styled-components.com/docs/api#injectglobal
injectGlobal`
    ${styledNormalize}

    html,
    body {
        height: auto;
	    width: 100%;
        overflow-x: hidden;
    }

    body {
        background-color: #ffffff;
        color: #333333;
        font: normal normal 400 16px/1.2 Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
    }

    ::selection {
        background-color: #333333;
        color: #ffffff;
    }

    ::-moz-selection {
        background-color: #333333;
        color: #ffffff;
    }
`;
