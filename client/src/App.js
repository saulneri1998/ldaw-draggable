import React from 'react';
import { RecoilRoot } from 'recoil';
import { CSSReset, SimpleGrid, ThemeProvider, Stack } from "@chakra-ui/core";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import NewOrder from './Components/NewOrder';
import DroppableSection from './Components/DroppableSection';
import { customTheme } from './theme';

function App() {

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <DndProvider backend={HTML5Backend}>

        <RecoilRoot>
          <Stack spacing={100} p={10} bg="gray.100" height="100vh">
            <NewOrder></NewOrder>
            <SimpleGrid columns={4} spacing={10} pt={20} height="100%">
              <DroppableSection height="100%" sectionName="Salida de planta" type="1"/>
              <DroppableSection height="100%" sectionName="En LDC" type="2"/>
              <DroppableSection height="100%" sectionName="En proceso de entrega" type="3"/>
              <Stack height="100%">
                <DroppableSection height="30vh" sectionName="Entregado" type="4"/>
                <DroppableSection height="30vh" sectionName="Fallida" type="5"/>
              </Stack>
            </SimpleGrid>
          </Stack>
        </RecoilRoot>

      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
