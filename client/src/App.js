import React from 'react';
import { RecoilRoot } from 'recoil';
import { CSSReset, SimpleGrid, ThemeProvider, Stack } from "@chakra-ui/core";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import NewOrder from './Components/NewOrder';
import DroppableSection from './Components/DroppableSection';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <DndProvider backend={HTML5Backend}>

        <RecoilRoot>
          <Stack spacing={100} p={10} >
            <NewOrder></NewOrder>
            <SimpleGrid columns={4} spacing={10} pt={10} >
              <DroppableSection height="300px" sectionName="Salida de planta" type={1}/>
              <DroppableSection height="300px" sectionName="En LDC" type={2}/>
              <DroppableSection height="300px" sectionName="En proceso de entrega" type={3}/>
              <Stack>
                <DroppableSection height="100px" sectionName="Entregado" type={4}/>
                <DroppableSection height="100px" sectionName="Fallida" type={5}/>
              </Stack>
            </SimpleGrid>
          </Stack>
        </RecoilRoot>

      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
