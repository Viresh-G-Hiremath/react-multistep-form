import React from "react";

export default function NextButton({ page, setPage }) {
  return (
    <div>
      {page < 4 && (
        <div className="width m-auto">
          <button
            type="submit"
            className="btn btn-primary w-100 mt-2"
            onClick={() => setPage(page + 1)}
          >
            Create Workspace
          </button>
        </div>
      )}
    </div>
  );
}
