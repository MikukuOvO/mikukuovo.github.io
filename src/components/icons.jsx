import React from "react";

export function MedalIcon({ tier }) {
  return (
    <svg className={`medal-icon medal-${tier}`} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 6h10l6 15h-8L18 6Z" />
      <path d="M36 6h10l-8 15h-8l6-15Z" />
      <circle cx="32" cy="38" r="16" />
      <circle className="medal-core" cx="32" cy="38" r="9" />
    </svg>
  );
}

export function HeroStatIcon({ kind }) {
  if (kind === "location") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s-5.5-5.6-5.5-10A5.5 5.5 0 1 1 17.5 11C17.5 15.4 12 21 12 21Z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    );
  }

  if (kind === "time") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7.8v4.7l3 1.8" />
      </svg>
    );
  }

  if (kind === "school") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4 3 8.5 12 13l7-3.5V15h2V8.5L12 4Z" />
        <path d="M7 12.5V16c0 1.7 2.3 3 5 3s5-1.3 5-3v-3.5L12 15l-5-2.5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v4.1M12 17.4v4.1M21.5 12h-4.1M6.6 12H2.5M18.7 5.3l-2.9 2.9M8.2 15.8l-2.9 2.9M18.7 18.7l-2.9-2.9M8.2 8.2 5.3 5.3" />
    </svg>
  );
}

export function ScholarIcon() {
  return (
    <svg className="scholar-icon" viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 8 6 16l18 8 14-6.2V28h4V16L24 8Z" fill="#4285F4" />
      <path d="M14 25.5V33c0 4.2 5 7 10 7s10-2.8 10-7v-7.5L24 30l-10-4.5Z" fill="#34A853" />
      <circle cx="24" cy="30" r="5.5" fill="#FBBC05" />
      <circle cx="24" cy="30" r="2.4" fill="#EA4335" />
    </svg>
  );
}

export function PdfFileIcon() {
  return (
    <svg className="cv-file-icon-svg" viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M9 4.5h9.2l4.8 4.8V27a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 7 27V7A2.5 2.5 0 0 1 9.5 4.5Z"
        fill="#A142F4"
      />
      <path d="M18.2 4.5v4.1a1 1 0 0 0 1 1h3.8" fill="#D7AEFB" />
      <path
        d="M11.2 14.2h8.8M11.2 18h8.8M11.2 21.8h6.2"
        stroke="#ffffff"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function QuickLinkIcon({ kind }) {
  if (kind === "linkedin") {
    return (
      <img
        src="/logo-linkedin.ico"
        alt=""
      />
    );
  }

  if (kind === "github") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.54 7.54 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
      </svg>
    );
  }

  if (kind === "email") {
    return (
      <img
        src="https://storage.googleapis.com/gweb-workspace-assets/uploads/7uffzv9dk4sn-2ANudyZddMUfBdOX8YWDbe-8da52413e8fe627a74e653f02de3e001-Gmail.svg"
        alt=""
      />
    );
  }

  if (kind === "phone") {
    return (
      <img
        src="https://play-lh.googleusercontent.com/bk3e0glVbvRC4Z0uEZ5Oso5wjS89r1P_X5e-k3N_UBkTPXZLhGv50rRy7LAuDzzC9w=s256-rw"
        alt=""
      />
    );
  }

  if (kind === "scholar") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4 3 8l9 4 7-3.1V14h2V8L12 4Z" />
        <path d="M7 12.8V16c0 1.8 2.5 3 5 3s5-1.2 5-3v-3.2L12 15l-5-2.2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path
        d="M14 3v5h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 13h6M9 17h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
