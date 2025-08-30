import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { Root } from "./routes/__root";
import { Home } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import "./app.css";
import { Inbox } from "./routes/inbox";
import { Settings } from "./routes/settings";

const wrapper = document.getElementById("root");

if (!wrapper) {
  throw new Error("Wrapper div not found");
}

const client = new QueryClient();

render(
  () => (
    <QueryClientProvider client={client}>
      <Router>
        <Route path="/" component={Root}>
          <Route path="/" component={Home} />
          <Route path="/inbox" component={Inbox} />
          <Route path="/settings" component={Settings} />
        </Route>
      </Router>
    </QueryClientProvider>
  ),
  wrapper
);
