"use client";
// theme.js
import { extendTheme } from '@chakra-ui/react';

const extendedSpace = {
    30: '17rem',
  };

const theme = extendTheme({
    space: {
      ...extendedSpace,
    },
    components: {
      Card: {
        // The base styles for all cards
        baseStyle: {
          container: {
            background: 'rgb(255, 255, 255, 0.9)', 
            boxShadow: 'lg',
            borderRadius: 'lg',
            overflow: 'hidden',
            padding: 4, 
            margin: 4, 
            transition: 'background 0.2s', // Smooth transition for background color
            _hover: {
              background: 'rgba(255, 255, 255, 1)', // Solid white on hover
            },
          },
        },
        // Variant styles
        variants: {
          standardS: {
            container: {
              paddingTop: 10, 
              paddingLeft: 10,
              paddingRight: 10,
              paddiingBottom: 15,
              marginLeft: 30,
              marginRight: 30,
              marginTop: 10,
              marginBottom: 10,
            },
          },
        },
        defaultProps: {
          variant: 'standardS',
        },
      },
    },
  });

export default theme;
