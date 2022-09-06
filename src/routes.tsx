import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { CreateNote } from "./pages/CreateNote";
import { EditNote } from "./pages/EditNote";
import { MentionsPage } from "./pages/MentionsPage";
import { Header } from "./components/Header";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/create-note" component={CreateNote} />
        <Route path="/edit-note/:id" component={EditNote} />
        <Route path="/mentions" component={MentionsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;