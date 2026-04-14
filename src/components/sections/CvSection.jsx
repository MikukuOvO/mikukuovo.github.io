import React from "react";
import resumePdf from "../../Felix_Yu_Resume.pdf";
import { PdfFileIcon } from "../icons";

export default function CvSection() {
  return (
    <section className="panel cv-panel">
      <div className="cv-viewer">
        <div className="cv-toolbar">
          <div className="cv-file">
            <div className="cv-file-icon-wrap">
              <PdfFileIcon />
            </div>
            <div className="cv-file-meta">
              <span className="cv-file-label">Resume PDF</span>
              <strong>Fenglin Yu CV</strong>
            </div>
          </div>

          <div className="cv-actions">
            <a className="cv-action" href={resumePdf} target="_blank" rel="noreferrer">
              Open in new tab
            </a>
            <a className="cv-action cv-action-primary" href={resumePdf} download>
              Download PDF
            </a>
          </div>
        </div>

        <div className="cv-paper-frame">
          <iframe className="cv-embed" src={resumePdf} title="Fenglin Yu CV" />
        </div>
      </div>
    </section>
  );
}
