import { injectGlobal } from 'styled-components';

export default injectGlobal`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100%;
    }

    /* Quick fix for: https://github.com/zeit/next.js/issues/2708 */
    html, body, body > div:first-child, #__next, #__next > div:first-child {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    body {
        -webkit-font-smoothing: antialiased;
        font-family: Roboto, sans-serif;
        color: rgba(0, 0, 0, 0.87);
        font-size: 1rem;
        font-weight: 400;
    }

    a {

        text-decoration: none;
        transition: color 200ms ease;

        :hover {

        }
    }
`;
