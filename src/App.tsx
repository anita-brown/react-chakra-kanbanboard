import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import Column from "./components/Column";
import Task from "./components/Task";
import { ColumnType } from "./utils/enum";

function App() {
  const [count, setCount] = useState(0);

  const handleAddTask = (column: ColumnType) => { 
    console.log("Add task to column", column)
  }

  return (
    <>
      <Heading fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }} fontWeight="bold" textAlign="center" bgGradient="linear(to-l, #7928CA, #FF0080" bgClip="text" ml={4}>
        Welcome to Dnd Kanban
      </Heading>
      <Container maxWidth="container.lg" px={4} py={10}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 16, md: 4 }}>
          <Column column={ColumnType.TO_DO} />
          <Column column={ColumnType.IN_PROGRESS} />
          <Column column={ColumnType.BLOCKED} />
          <Column column={ColumnType.COMPLETED} />
        </SimpleGrid>
      </Container>
    </>
  );
}

export default App;
