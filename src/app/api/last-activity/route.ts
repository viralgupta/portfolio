import { NextResponse } from "next/server";

const GITHUB_USERNAME = "viralgupta";

// cache the github response so a busy day doesn't burn the 60 req/hr
// unauthenticated rate limit
export const revalidate = 300;

type GitHubEvent = {
  type: string;
  created_at: string;
  repo?: { name: string };
};

export async function GET() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          // github rejects api calls without a user agent
          "User-Agent": GITHUB_USERNAME,
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate },
      }
    );

    if (!response.ok) {
      return NextResponse.json({ lastActivity: null, repo: null });
    }

    const events = await response.json();

    if (!Array.isArray(events)) {
      return NextResponse.json({ lastActivity: null, repo: null });
    }

    // events come back newest first, so prefer the most recent push and fall
    // back to whatever else happened last (stars, prs, issues)
    const latest: GitHubEvent | undefined =
      events.find((event: GitHubEvent) => event.type === "PushEvent") ??
      events[0];

    if (!latest?.created_at) {
      return NextResponse.json({ lastActivity: null, repo: null });
    }

    return NextResponse.json({
      lastActivity: latest.created_at,
      repo: latest.repo?.name ?? null,
    });
  } catch {
    return NextResponse.json({ lastActivity: null, repo: null });
  }
}
