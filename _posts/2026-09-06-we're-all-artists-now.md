---
layout: post
title: Meditations on AI
date: 2026-09-06 14:24:00
description: My worth in this era of artifical intelligence.
categories: opinion
---
## What it means to be a skilled agentic engineer

A large language model is a fill in the blanks machine. The skill in LLMs is in knowing what you can leave blank in your project for the LLM to fill in.

If I'm implementing a neural network and I write:

"Please implement a multi-layer perceptron with three hidden layers (each 128 neurons wide) using JAX as the deep learning framework to predict digits from the MNIST dataset.

Use the following filesystem:
train.py
network/
- mlp.py
dataloader/
- dataloader.py
- dataset.py
"

Then the coding agent would work in JAX, in the file system and architecture you prescribed. And the specific loops and control flows it implements in Python would be subject to the taste of the LLM dictated by its training data.

However, if you just say "Build me a neural network to predict digits" then the network would rely on its prior knowledge. Most likely using PyTorch because it's taking whatever design decisions is the most conventional. 

Sometimes the right move is to let an LLM generate you a whole repository from a single prompt, other times the right move is to specify almost every detail. 

Therefore, the work of a good engineer using agents is to know at what level of granularity you need to specify things at. This depends on your situation. If I'm an ML researcher testing out a new reinforcement learning algorithm, I would give Claude the algorithm pseudocode and it can figure out the rest. However, if I was building the inference stack for a self-driving car, then I would closely examine every line of code, perhaps even optimizing how the registers are used at the assembly level.  

If you don't know your field, you won't know how to completely specify your prompt to narrow down the stochasticity to a tolerable point, which means you'll never get what you want out of a coding agent. LLMs do not replace the value in knowing how things work. 

## Humans are smarter than LLMs

LLMs can't be creative. They cannot generate out of distribution data. They also cannot choose their own reward functions. Move 37 happened in a game with rules human invented. True creatives make their own rules. These are the reasons why I believe valuable intellectual work will continue to be led by humans and not AI.

## We're All Artists Now
Christopher Nolan does not do makeup, compose music, or build his sets. But he knows the right camera angle, the right prop, and the right look that will make the film work. He holds a vivid story in his head, then directs cinematographers, prop makers, and everyone else toward that vision.  

Steve Jobs identifies himself more as an artist than an engineer. He cared less about whether the iPhone used x86 or ARM than about what the iPhone felt like in the user’s hand. Then he communicated that vision to an army of engineers.  

Now that we all have our own army of engineers, we have to become the Steve Jobs and Christopher Nolans of our projects: hold the vision clearly in our heads, know what good looks like, and communicate that vision to our binary colleagues.