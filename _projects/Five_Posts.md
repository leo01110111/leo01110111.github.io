---
layout: page
title: Five Posts
description: A self-hosted app that turns my X feed into five posts a day. Claude filters out the junk, and I log which posts changed how I think.
img: assets/img/five_posts_cover.jpg
importance: 3
category: 2026
related_publications: false
---

X gives me two things. Some posts are genuinely creative takes on robotics, AI, and where the world is going, and a few of them change what I actually do. Most of the feed is engagement bait: rage bait, memes, and empty sayings that sound wise but change nothing. Five Posts keeps the first kind and drops the second. Every day it reads my own "For You" feed and shows me only five posts, one per page, with no replies. Next to each post is a scratchpad where I write or say how it made me feel.

## How the five are picked

1. **Collect.** A headless Chrome, logged in as me, scrolls my home timeline and records the JSON that X's own web client loads. That gives about 80 posts with their text, media, and engagement counts. A second pass takes the top posts from a robotics search, because robotics is my research area.
2. **Judge.** One Claude API call reads every post. With structured output it returns, for each post, whether it is junk, whether it is about robotics, and a 1–10 substance score: how likely the post is to change what I believe or do. On the first day, Claude marked 60 of my 84 For You posts as junk.
3. **Rank.** Each surviving post gets the score

   $$\text{score} = 0.6\cdot\frac{\text{substance}}{10} + 0.4\cdot\hat e,\qquad e = \log(1 + \text{likes} + 2\,\text{RT} + 2\,\text{quotes} + 4\,\text{bookmarks})$$

   where $$\hat e$$ is the engagement, normalized within each source. The substance score is a learned critic, and engagement is the crowd's opinion. Bookmarks weigh the most, because people save what is useful.
4. **Pick.** The two best robotics posts go in first. The other three come from my For You feed. A post is never shown twice.

## Closing the loop

Every 👍 / 👎 and every reflection goes into a dataset of (post, my judgment, my notes). The 0.6 / 0.4 weights are a hand-written reward. The plan is to fit a preference model on my own labels and replace them, so the filter learns what actually changes my mind and not what an average reader engages with.

## What I built

- **Backend.** Python, FastAPI, and SQLite. Playwright drives Chrome for collection, and the Anthropic SDK does the filtering.
- **App.** A progressive web app. It runs in the browser on my laptop and installs on my iPhone home screen, with swipe navigation, inline video, and offline reading.
- **Voice notes.** On desktop, the browser's live speech recognition. On the phone, audio is transcribed on my own server with Whisper (faster-whisper), so it never leaves the machine.
- **Hosting.** It runs on a lab workstation as systemd services, with a daily 6 am fetch. It is reachable only over a private Tailscale network with HTTPS.

## Links

- **Code:** [github.com/leo01110111/feed](https://github.com/leo01110111/feed)
