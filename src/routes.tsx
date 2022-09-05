import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { CreateNote } from "./pages/CreateNote";
import { EditNote } from "./pages/EditNote";
import { Header } from "./components/Header";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/create-note" component={CreateNote} />
        <Route path="/edit-note/:id" component={EditNote} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;