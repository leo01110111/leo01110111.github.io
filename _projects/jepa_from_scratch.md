---
layout: page
title: JEPA from Scratch
description: My investigtions into models that solve the autoregressive problem.
img: assets/img/jepa_cover.jpg
importance: 1
category: 2026
related_publications: false
---
![How I imagine 
Yann and Zuck meetings went.](../assets/img/jepa_cover.png)

It seems super odd to me that with all the money going into AI, nobody has innovated on the autoregressive tranformer since it became a thing circa 2020.

Why is AI interesting? Because it learns a model of the world. Sure, scaling compute and data could lead to a higher resolution of the world model you have in ChatGPT or $\pi_{0.6}$ but there are fundamental inductive biases about the way these models are designed that drastically limit how well they can ever perform. The biggest one is the fact that in LLMs, you take the generated token as your input for the next generated token. If one token is imprecise, then the entire chain of reasoning of the model will go off the rails. This is more salient in robotics. With an action chunking transformer, the robot takes a few actions (the size of a chunk), those action change the state of the world, which then affects the observations of the robot, which then leads to a new chunk of actions. Chunking drastically increases the success of robots using transformers in the physical world. But still, if the robot generates a bad chunk, the robot will be on a trajectory to failure. I call these problems the autoregressive problem. Data fixes these problems, but you need a lot of it. In robotics, it's impossible to get the amount of data on the scale of text and hence you will never be able to achieve robot performance on the level of language models. I believe that we need fundamentally new ways of formulating the robot learning problem in order to see a world of intelligent robots.

Yann LeCun is someone who recognizes this problem and proposed the Joint Embedding Predictive Architecture as a potenial solution. In this post, my goal is to really understand what JEPA is and whether it indeed solves the autoregressive problem.
