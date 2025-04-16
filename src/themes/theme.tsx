import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },

  components: {
    FormLabel: {
      baseStyle: {
        fontFamily: `'Open San', sans-serif`,
      },
    },
  },

});

export default theme;