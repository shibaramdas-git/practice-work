import React, { useState } from "react";
import { faq } from "./data";

export default function Accordion() {
  const [selectedId, setSelectedId] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleId, setMultipleId] = useState([]);

  function handelSingleSelection(id) {
    setSelectedId((oldId) => (oldId == id ? null : id));
  }

  function handleMultiSelection(currentid) {
    let cpyMultiple = [...multipleId];
    let findIndex = cpyMultiple.indexOf(currentid);

    if (findIndex === -1) cpyMultiple.push(currentid);
    else cpyMultiple.splice(findIndex, 1);

    setMultipleId(cpyMultiple);
  }

  // console.log(selectedId, multipleId);
  return (
    <div className="">
      <h2 className="text-lg font-bold">Accordion component</h2>
      <div className="accordion w-[320px] mt-5 p-4">
        <div className="mb-4 w-1/2 mx-auto">
          <button
            className="p-2 bg-teal-100 border border-teal-900 rounded-sm  active:bg-teal-400 cursor-pointer focus:outline-none focus:ring focus:ring-amber-400 "
            onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          >
            {enableMultiSelection
              ? "Disable multi selection"
              : "Enable multi selection"}
          </button>
        </div>
        {faq &&
          faq.map((item) => (
            <div
              key={item.id}
              className="border border-teal-900 my-0.5 rounded-sm"
            >
              <div
                className="flex justify-between items-center bg-teal-100 p-2 hover:bg-teal-200"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handelSingleSelection(item.id)
                }
              >
                <p>{item.question}</p>
                <p className="px-1.5 bg-white text-2xl font-medium hover:bg-teal-100 rounded-sm">
                  +
                </p>
              </div>
              {/* Logic 1 */}
              {enableMultiSelection
                ? multipleId.find((id) => id === item.id) && (
                    <p className="p-2">{item.answer}</p>
                  )
                : selectedId === item.id && (
                    <p className="p-2">{item.answer}</p>
                  )}
              {/* Logic 2 */}
              {/* {selectedId === item.id || multipleId.indexOf(item.id) !== -1 ? (
                <p className="p-2">{item.answer}</p>
              ) : null} */}
            </div>
          ))}
      </div>
    </div>
  );
}
