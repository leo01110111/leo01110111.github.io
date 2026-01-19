---
layout: about
title: about
permalink: /
subtitle:  <a href='#'>Electrical & Computer Engineering Student at Carnegie Mellon</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: ""

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I'm an ECE student at CMU with the goal of figuring out how we can build the brains of general purpose robots.

At the [Robomechanics Lab](https://www.cmu.edu/me/robomechanicslab/), I've worked on using deep reinforcement learning to teach a robot quadruped to climb steep cliffs. I was inspired by the insane agility of mountain goats (you need to see [this](https://www.youtube.com/watch?v=RG9TMn1FJzc)!!) and hope RL can get us closer to robo-goats. 

Personally, I've been exploring various techniques in AI and robotics through personal projects. 

When I'm too tired to do serious work, I tune into the latest Lex Fridman or Dwarkesh episode and daydream about ideas and inventions. How does one get interested in serious questions without a bit of wishful imagination?

What guides my interest are systems that can do orderly things even though their individual parts are simple. Connectionist machines are what I actually work on, but this interest extends to [particle life](https://www.youtube.com/watch?v=p4YirERTVF0) and evolution. I hope to study the theory of the latter two more thoroughly at some point. 

I think of my research in AI to be similar in nature to a computer architect in the 1940s. Just as people like John von Neumann were thinking about the right architecture for general computers, we're figuring out the right learning rule, neural net, data... for general purpose robots. The von Neuman architecture allowed computers to execute any program. We're making neural nets and reward functions to teach robots to write their own programs for any task.

There are four questions we need to answer for general purpose robots:

1. What is the action and observation space of the robot? 
- Humanoids answer this. General purpose robots should see and do everything a human can. The cooling fans are too loud, the batteries need to last another ten hours, and the robot lacks a sense of smell. However, I don't think those are bottlenecks towards useful robots. I'm very happy by the progress on dexterous hands. Also, while we need the same observation and action space as humans, humanoid robots should be as different as possible from human likeness. We cannot make it easy for users to project human traits onto these robots. Robots simply do not posess our emotions, nor can they do everything that we can. This is actually a big problem that not enough people are talking about. Once these humanoid robots are in the factory, someone is going to making it drive a car or do some other thing it's not trained for. We're going to have machines that look like they can do jobs they can't do.

2. What is the connectionist architecture?
- Observations to actions is not a functional mapping. The optimal action is not always the same given an observation. This is why we need to have memory. Do transformers bring us all the way? Even if it can map any arbitrary sequence to another sequence, it's probably not optimal. We need to think about architectures that encourage world model building, and not specialized associations. World models are models that receive high dimensional inputs, represent them in the lowest possible dimension, and output the correct high dimensional output. Yann LeCun seems to have some nice things to say about [that](https://www.youtube.com/watch?v=m3H2q6MXAzs). I'm slowly working my way through the progressions of connectionist architectures so I can deeply understand his JEPA models.

3. What is the learning rule?
- There's certainly something fundamental about backpropagation and gradient descent. It allows us to use neural nets in any problem in which we have input target pairs. This is basically what learning is, an optimization of loss. From that, we can formulate loss as prediction error: what we expect minus what we see. This is self-supervised learning and is crucial for world model building. However, given a model of the world, the robot needs to learn how to act given a model of the world in order to achieve its goal. This is why we need our robot brains to have a reward system. The robot needs reward in order to adjust its behavior.

4. How do we train the world model and goal?
- After birth, a baby moutain goat can stand within minutes, walk within hours, and keep up with their mothers on steep cliffs by the end of the day. Evolution has encoded some insane priors in the minds of these animals. I see self-supervised learning as a way to achieve this. With the data collection effort going towards VLAs, I hope we will be able to build foundation models that gives us strong models of the world to learn policies with less samples. We're already seeing this in how dual manipulators only need 50 trajectories to learn a new skill like cutting an apple if its fine tuned on a foundation model.
After deployment, the foundation model should still be tuned such that it adapts its understanding of the world. 

- Given a model of the world, how should the robot act? This requires a goal the robot works towards. This is the only thing that should be hard-coded into the system. Observing children, I notice how they always want to attention and affection of their parents. We had to learn how to walk, but we always knew how to cry. I see this as an effective tool for knowledge distillation. Young kids have no idea how the world works and what the right thing to do is, so they want the attention of their elders and see if they approve or not. This also explains why social validation is the strongest motives of young adults. Perhaps we ought to figure out how to build a reward mechanism for social validation in robots. It's how we teach robots after they're deployed. Robots are here to serve humans. Thus, they must act in accordance to our pleasure. Certainly more thinking needs to be done here. What is our intrinsic reward? Energy minimization seems the most feasible as we can easily get it from the robot's current output, but it certainly doesn't tell the robot what to do. 