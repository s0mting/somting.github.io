"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <>
      <Script
        crossOrigin="anonymous"
        src="//unpkg.com/same-runtime/dist/index.global.js"
      />
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </>
  );
}
