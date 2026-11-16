---
layout: page
title: Explainer Board
description: A narrated, live-animated math explainer you can interrupt with a spoken question. An AI agent answers by writing a new scene, and every interaction is logged as training data.
img: assets/img/explainer_board_cover.jpg
importance: 1
category: 2026
related_publications: false
---

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/explainer_board_cover.jpg" title="Explainer Board" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A scene from an explainer on distance concentration in high dimensions. The equations and diagrams are drawn live, one sentence at a time.
</div>

Explainer Board is a browser player for narrated math explainers. Instead of a fixed video, each explainer is a list of scenes written in JSON. The browser draws each scene live (equations with KaTeX, plots and diagrams in SVG) while a local text-to-speech voice reads it one sentence at a time.

The main feature is that the viewer can interrupt. At any moment, you press Ctrl+Space and ask a question out loud. The question is transcribed locally with Whisper and sent to an AI coding agent (Claude Code, Codex or Cursor). The agent writes a new scene that answers it, and the player jumps to that scene within seconds. The scene streams in while it is being written. The agent can also jump to an existing scene that already answers the question, or fix the scene you were watching.

## Why

A recorded explanation can only guess where its viewers will get stuck. A viewer who can stop it and ask "where did that identity come from?" gets the missing step right when they need it. The explanations I made this way follow my own preferences: every step derived on screen, a 2-D example before d dimensions, and each term of an expansion kept in the same color on every line.

## Collecting the data

Every question is also a training example: what the viewer had seen, what they asked, and how the explanation answered it. The long-term goal is a model that predicts where a viewer will get confused and fixes the explanation before they have to ask. Because it is still unclear which training method is best, the board records raw data that any later method can use:

- **A viewing log** for each session: every sentence shown, with the exact version of the scene, and every pause, skip, rewind and question.
- **The original audio** of each question.
- **The full history** of the explainer's files, committed automatically, so any scene a viewer saw can be rebuilt exactly.
- **The agent's session logs**, which show how each explainer and each answer was made.

## How it is built

- **Player:** plain JavaScript, with no build step. It animates scenes from a small JSON format: text and equations, plots, highlights, boxes and layouts.
- **Server:** Python. It runs Kokoro for text-to-speech and faster-whisper for transcription, both locally, on the GPU when there is one.
- **Answering:** a command-line tool that any coding agent can use to write an answer scene and stream it to the player.

## Links

- **Code:** [github.com/leo01110111/explainer-board](https://github.com/leo01110111/explainer-board)
