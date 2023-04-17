import 'styled-components/native';

declare module 'styled-components/native' {
    export interface DefaultTheme {
        colors: typeof myTheme.colors;
    }
}

const myTheme = {
    colors: {
        lightBlue: '#106b87',
        darkBlue: '#003f69',
        grey: '#e2e2e2',
        green: '#008000',
        red: '#b73138',
        white: '#ffffff',
    },
};

export { myTheme };