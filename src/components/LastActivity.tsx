"use client";

import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface LastActivityProps {
  href: string;
}

function formatRelative(isoTimestamp: string) {
  const seconds = Math.max(
    0,
    Math.floor((Date.now() - new Date(isoTimestamp).getTime()) / 1000)
  );

  return `${seconds.toLocaleString("en-US")} second${
    seconds === 1 ? "" : "s"
  } ago`;
}

export function LastActivity({ href }: LastActivityProps) {
  const [timestamp, setTimestamp] = useState<string | null>(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    let cancelled = false;

    fetch("/api/last-activity")
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!cancelled && data?.lastActivity) setTimestamp(data.lastActivity);
      })
      .catch(() => {
        // no activity line is better than a broken one
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!timestamp) return;

    setLabel(formatRelative(timestamp));
    const intervalId = setInterval(
      () => setLabel(formatRelative(timestamp)),
      1000
    );

    return () => clearInterval(intervalId);
  }, [timestamp]);

  if (!label) return null;

  return (
    <div className="max-w-[600px] text-muted-foreground md:text-sm">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
      >
        last activity: <span className="tabular-nums">{label}</span>
        <ExternalLinkIcon className="size-3" />
      </Link>
    </div>
  );
}
