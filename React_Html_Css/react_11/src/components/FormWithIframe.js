import React from "react";

function FormWithIframe() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Форма через iframe</h2>
      <iframe
        src="/responsive.html"
        title="Filter Form"
        className="w-full h-[800px] border-2 border-gray-300 rounded"
      />
    </div>
  );
}

export default FormWithIframe;
