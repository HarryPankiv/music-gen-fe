import React from "react";
import { Page } from "../../components/Page/Page";
import { Box, Button, Heading, Accordion, AccordionPanel, Text } from "grommet";
import { useHistory } from "react-router";

export const Info = () => {
  const { goBack } = useHistory();

  return (
    <Page>
      <Heading>Q & A</Heading>
      <Accordion>
        <AccordionPanel label="What is tonic?">
          <Box pad="medium">
            <Text>Tonic is the root note of your chord.</Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="How to generate sequence depending on a mood?">
          <Box pad="medium">
            <Text>
              Basically, the major mode is for happy songs and sad songs are in
              the minor mode. But it also relies on many other different
              factors.
            </Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="What does roman numeral mean in chord progression?">
          <Box pad="medium">
            <Text>
              Roman numerals stand for the chord from your tonic (root) note.
              Uppercase numerals mean major chords, lowercase mean minor. A
              little degree sign near roman numeral means that it's either
              augmented or diminished.
            </Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="What is tempo?">
          <Box pad="medium">
            <Text>Tempo is beats per minute, also known as BPM.</Text>
          </Box>
        </AccordionPanel>
      </Accordion>
      <Box width="320px" alignSelf="center" margin={{ top: "60px" }}>
        <Button label="Go back" onClick={() => goBack()} />
      </Box>
    </Page>
  );
};
