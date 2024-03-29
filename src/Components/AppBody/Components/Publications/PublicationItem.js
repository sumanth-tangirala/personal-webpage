import React from "react";
import cx from "classnames";
import styles from "./Publications.module.scss";
import { parse } from "../../../../helpers";

function PublicationItem({ publication, idx, color = "white", smallFont }) {
  return (
    <div
      key={idx}
      className={cx(styles.publication, { [styles.smallFont]: smallFont })}
      style={{ color }}
    >
      <div className={styles.publicationTitle}>{parse(publication.title)}</div>
      <div className={styles.publicationAuthors}>
        {parse(publication.authors)}
      </div>
      {publication.venue && (
        <div className={styles.publicationVenue}>
          {parse(publication.venue)}
        </div>
      )}
      <div className={styles.publicationLinksContainer}>
        {publication.link && (
          <div>
            [
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.publicationLink}
            >
              link
            </a>
            ]
          </div>
        )}
        {publication.arXiv && (
          <div>
            [
            <a
              href={publication.arXiv}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.publicationLink}
            >
              arXiv
            </a>
            ]
          </div>
        )}
      </div>
    </div>
  );
}

export default PublicationItem;
