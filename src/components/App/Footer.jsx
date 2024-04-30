import React from "react";

//import styles
import "src/assets/styles/app/footer.scss";

//import image

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          Created by: <span>Danila Voronkov</span>
        </li>
        <li>
          GitHub:{" "}
          <a href="https://github.com/dapzer" target="_blank">
            dapzer
          </a>
        </li>
        <li>
          Telegram:{" "}
          <a href="https://t.me/dapzer" target="_blank">
            @dapzer
          </a>
        </li>
        <li>
          Email:{" "}
          <a href="mailto:danila.webdev@gmail.com" target="_blank">
            danila.webdev@gmail.com
          </a>
        </li>
        <li>
          Film data from:{" "}
          <a href="https://www.themoviedb.org/" target="_blank">
            TMDb
          </a>
        </li>
      </ul>
    </div>
  );
}
