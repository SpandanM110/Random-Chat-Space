import { Box, Grid, GridItem } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import MessageForm from "../components/MessageForm";
export default function Footer() {
  return (
    <Box position="fixed" bottom="0" width="100%">
      <MessageForm />

      <Grid
        gridTemplateColumns="auto 1fr"
        textAlign="center"
        alignItems="center"
        py="4px"
        px="30px"
        height="40px"
        bg="white"
      >
        <GridItem justifySelf="start">
        Made and Created with ❤️ Open Source
          
          <a
            href="https://twitter.com/spandan_twts"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "65rem" }}
          >
            <FaTwitter style={{ display: "inline" }} />
            @spandan_twts
          </a>
        </GridItem>
        
      </Grid>
    </Box>
  );
}
