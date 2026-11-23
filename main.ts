// Hand-in script for our gta6-meme-x-01 entry, written for this repository.
//
// The real entry lives on X, not in this repo: Ahmad posted our GTA 6 meme
// from his public account @Adzikri06, and POST.json (kept beside this file)
// records that post's address. All the grader asks of this program is to
// carry POST.json into the output folder, where the checking gate reads it.
// The meme picture and the post's words are judged from X itself, so nothing
// below tries to describe or repackage them.
//
// How the grader runs us, and how to run us by hand from the repo root:
//   MAKEFUN_BOT_DIR    folder the repository is mounted at (default /bot)
//   MAKEFUN_OUTPUT_DIR folder to deliver into             (default /output)
//   MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import * as fs from 'node:fs';
import * as path from 'node:path';

// POST.json may only ever point at one X post, so we check the address
// before handing anything in: a typo here would silently burn the entry,
// while a loud failure now costs nothing. The shape accepted is the one X
// itself hands out from a post's Share > Copy link button.
const X_POST_PATTERN =
  /^https:\/\/(?:www\.|mobile\.)?(?:x\.com|twitter\.com)\/(?:[^/?#]+\/status\/\d+|i\/web\/status\/\d+)$/;

function loadEntryPost(repoDir: string): string {
  const postFile = path.join(repoDir, 'POST.json');
  let parsed: unknown;
  try {
    parsed = JSON.parse(fs.readFileSync(postFile, 'utf8'));
  } catch (err) {
    throw new Error(
      `POST.json at ${postFile} is unreadable or not valid JSON: ${(err as Error).message}`,
    );
  }
  const url = (parsed as { url?: unknown } | null)?.url;
  if (typeof url !== 'string' || !X_POST_PATTERN.test(url)) {
    throw new Error(
      'POST.json does not name an X post. Its "url" should look like ' +
        `https://x.com/<handle>/status/<id>; found ${JSON.stringify(url)} instead.`,
    );
  }
  return url;
}

function handIn(): void {
  const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

  const postUrl = loadEntryPost(repoDir);

  fs.mkdirSync(outputDir, { recursive: true });
  const deliveredTo = path.join(outputDir, 'POST.json');
  fs.copyFileSync(path.join(repoDir, 'POST.json'), deliveredTo);

  console.log(`Delivered POST.json to ${deliveredTo} — entry post: ${postUrl}`);
}

try {
  handIn();
} catch (err) {
  console.error(`Hand-in failed, nothing was delivered: ${(err as Error).message}`);
  process.exit(1);
}
