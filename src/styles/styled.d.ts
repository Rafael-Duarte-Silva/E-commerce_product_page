import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: {
                orange: string;
                paleOrange: string;
            };
        
            neutral: {
                veryDarkBlue: string;
                darkGrayishBlue: string;
                grayishBlue: string;
                lightGrayishBlue: string;
                white: string;
                black: string;
            };
        };

        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
    }
}