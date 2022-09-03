import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Index from "./pages/Index";
import ItemNew from "./pages/ItemNew";
import ItemDetail from "./pages/ItemDetail";
import AuthRoute from "./components/AuthRoute";

import store from "./redux/store";
import ItemEdit from "./pages/ItemEdit";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<AuthRoute component={<Home />} />} />
          <Route
            path="/item/new"
            element={<AuthRoute component={<ItemNew />} />}
          />
          <Route
            path="/item/:id"
            element={<AuthRoute component={<ItemDetail />} />}
          />
          <Route
            path="/item/:id/edit"
            element={<AuthRoute component={<ItemEdit />} />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
