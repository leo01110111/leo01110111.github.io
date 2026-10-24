---
layout: post
title: Can Astra Zero-Shot Dexterous Manipulation?
date: 2026-10-23 14:24:00
description: GPT 6 Astra attempts DexVerse's long-horizon coffee making task with a UR10e and Wuji hands.
categories: robotics
---

I gave GPT 6 Astra a very hard dexterous hand task, Dexverse's long horizon coffee making benchmark.
The robot had to:
1. Grab a mug from a stand.
2. Pour a carton of milk into the mug
3. Put the mug under the coffee machine
4. Spin the dial of the coffee machine to turn it on.

I attached how Astra did after spending $92 worth of tokens, and an example of what successful completion looks like. (I didn't actually spend $92 on this. I just went through 6 resets on the plus subscription)

The lesson I got from this is that Astra is unable to zero shot dexterous manipulation tasks. A harness must be made.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/makecoffee-astra-progress.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/makecoffee-success.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>
<div class="caption">
    Left: Astra's progress after $92 worth of tokens. Right: what successful completion looks like.
</div>

The methodology of the model is a state machine approach where each stage would contain an IK target that the arm and fingers would go towards. Grasping finger positions were tuned by searching over values.

## The original prompt

> I'm investigating whether Astra is a viable source of generating robot training data. This is the experiment I want to run: without using the provided training data, solve a long horizon dexverse task. Log the amount of time it took for you to solve it (wall clock time) and log the number of tokens used to solve each task. Feel free to use subagents. My hypothesis is that you will take 30 minutes and a whole session's worth of tokens on the plus subscription. My guess for cost would be 1 usd for one task. I don't think the solution you come up with will be robust to augmentations. (You should prove me wrong here). It went without saying that I think you will solve it. Also make your solution look like a human did it. Don't give me weird IK waypoint solutions that move the hand in weird way. Use the UR10e with WUJI hands. Log this hypothesis in an experiment markdown for me to track my belief state as we do more experiments. Create any skills that are helpful in informing future agents in solving robot benchmarks like the one you're doing now
