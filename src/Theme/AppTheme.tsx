import { Theme, useTheme } from '@react-navigation/native';
import { Platform, StyleSheet } from 'react-native';

export interface CustomTheme extends Theme{
    colors: Theme['colors'] & {
        buttons: string
    };
}

export const LightTheme: CustomTheme = {
    dark: false,
    colors: {
        primary: "#FFFFFF",
        background: "#fcf7e6",
        card: "#FFFFFF", 
        text: "#FFFFFF",
        border: "#FFFFFF",
        notification: "#FFFFFF",
        buttons: "#2D201C",
    },
    fonts: Platform.select({
        default: {
            regular: {
              fontFamily: 'sans-serif',
              fontWeight: 'normal',
            },
            medium: {
              fontFamily: 'sans-serif-medium',
              fontWeight: 'normal',
            },
            bold: {
              fontFamily: 'sans-serif',
              fontWeight: '600',
            },
            heavy: {
              fontFamily: 'sans-serif',
              fontWeight: '700',
            },
          },
    })
};

export const useAppTheme = () => useTheme() as CustomTheme;

export const getStyles = (theme: CustomTheme) => StyleSheet.create ({
    primaryBackground : {
        backgroundColor : theme.colors.background
    }
})