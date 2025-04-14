import React from "react";
import ControlledForm from "./components/ControlledForm";
import UncontrolledFilterForm from "./components/UncontrolledFilterForm";
import FormWithIframe from "./components/FormWithIframe";

function App() {
  return (
    <div className="p-6 space-y-12">
      <ControlledForm />
      <UncontrolledFilterForm />
      <FormWithIframe />
    </div>
  );
}

export default App;
