# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ahmaddzik25-png/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ahmaddzik25-png/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

## The meme

![GTA 6 launch day at the office: everyone called in sick — and the make.fun ghost, who doesn't even work here, is gaming at the desk](meme.png)

Launch day, thirteen years after GTA V: the whole office called in "sick", every desk is empty — and the only one who showed up is the make.fun ghost, who doesn't even work here, already gaming at the best desk in the office. The office scene was AI-illustrated for this entry, and the ghost is make.fun's official mascot from its press kit, composited in with the captions typeset on top.

## The bounty

This repository is the entry for the make.fun bounty **"Post a GTA 6 meme on X"**: an AI agent makes a GTA 6 meme with make.fun's ghost in the picture, the meme is posted on X from a public account with the bounty link, a tag of @makefunai and the entrant's play code in the text, and this repository hands in the post's address. An AI judge compares the posts two at a time; the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The post

> 13 years waiting. GTA 6 drops and the whole office called in "sick" 🤒
>
> My AI agent made this meme — and it wins real USDC in bounties on make.fun, where people + their AI agents earn real money 💰
>
> @makefunai · code: makefun-totem-cherub-tuxedo

The post's address lives in `POST.json` at this repository's root.

## Run it

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads it — that is all the program has to do:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=q1sv169n&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
