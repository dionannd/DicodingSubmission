import React from "react";

function PageNotFound() {
  return (
    <div className="-full items-center justify-center flex flex-col">
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="Page Not Found"
        className="w-80 h-80"
      />
      <div id="info">
        <h3 className="text-xl font-medium">Halaman tidak ditemukan</h3>
      </div>
    </div>
  );
}

export default PageNotFound;
