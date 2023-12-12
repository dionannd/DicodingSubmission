import React from "react";

function Homepage() {
  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <section className="search-bar">
        <input type="text" placeholder="Cari berdasarkan judul ..." />
      </section>
      <section className="notes-list">
        <article className="note-item">
          <h3 className="note-item__title">Judul</h3>
          <p className="note-item__createdAt">Kamis, 14 April 2022</p>
          <p className="note-item__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </article>
      </section>
      <div className="homepage__action">
        <button className="action" type="button" title="Tambah">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Homepage;
