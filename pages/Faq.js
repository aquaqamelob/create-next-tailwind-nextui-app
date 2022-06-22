import { Collapse, Grid, Text } from "@nextui-org/react";

export default function App() {
  return (
      <>
      <Grid>
        <Collapse
          bordered
          title="Option"
          subtitle={
            <>
              More description about <Text b>Option B</Text>
            </>}
          css={{ bgColor: "$accents0", border: '$accents5', fontFamily: '$sans' }}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Collapse>
      </Grid>
      <Grid>
        <Collapse.Group bordered css={{ bgColor: "$accents0", border: '$accents5' }}>
          <Collapse title="Option A">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          
          <Collapse title="Option B">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse title="Option C">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
        </Collapse.Group>
      </Grid>
      </>

  );
}