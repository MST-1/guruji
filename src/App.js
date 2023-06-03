import { ChakraBaseProvider } from "@chakra-ui/react";
import { Home } from "./pages/home/Home";
import './app.css'

function App() {
  return (
    <ChakraBaseProvider>
      <Home />
    </ChakraBaseProvider>
  );
}

export default App;
