import { extendTheme } from "@chakra-ui/react";
import { config } from "./config";
import { styles } from "./styles";
import { Button } from "./components/Button";
import { Card } from "./components/Card";

export default extendTheme({
  components: {
    Button,
    Card
  },
  config,
  styles
});
