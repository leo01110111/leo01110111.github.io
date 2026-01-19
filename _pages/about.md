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

I'm an ECE undergraduate at CMU with the goal of figuring out how we can build the brains of general purpose robots.

At the [Robomechanics Lab](https://www.cmu.edu/me/robomechanicslab/), I've worked on using deep reinforcement learning to teach a robot quadruped to climb steep cliffs. I was inspired by the insane agility of mountain goats (you need to see [this](https://www.youtube.com/watch?v=RG9TMn1FJzc)!!) and hope RL can get us closer to robo-goats. 

Personally, I've been exploring various techniques in AI and robotics through personal [projects](https://leo01110111.github.io/projects/). 

When I'm too tired to do serious work, I tune into the latest Lex Fridman or Dwarkesh episode and daydream about ideas and inventions. How does one get interested in serious questions without a bit of wishful imagination?

What guides my interest are systems that can do orderly things even though their individual parts are simple. Connectionist machines are what I actually work on, but this interest extends to [particle life](https://www.youtube.com/watch?v=p4YirERTVF0) and evolution. I hope to study the theory of the latter two more thoroughly at some point. 

I think of my research in AI to be similar in nature to a computer architect in the 1940s. Just as people like John von Neumann were thinking about the right architecture for general computers, we're figuring out the right learning rule, neural net, data... for general purpose robots. The von Neuman architecture allowed computers to execute any program. We're making neural nets and reward functions to teach robots to write their own programs for any task.

There are five questions we need to answer for general purpose robots:

**1. What is the action and observation space of the robot?**

- Humanoids answer this. General purpose robots should see and do everything a human can. The cooling fans are too loud, the batteries need to last another ten hours, and the robot lacks a sense of smell. However, I don't think those are bottlenecks towards general robots. The last bottleneck of dexterous hands have already been solved. Also, while we need the same observation and action space as humans, humanoid robots should be as different as possible from human likeness. We cannot make it easy for users to project human traits onto these robots. Robots simply do not posess our emotions, nor can they do everything that we can. This is actually a big problem that not enough people are talking about. Once these humanoid robots are in the factory, someone is going to making it drive a car or do some other thing it's not trained for. We're going to have machines that look like they can do jobs they can't do.

**2. What is the connectionist architecture?**

- Observations to actions is not a functional mapping. The optimal action is not always the same given an observation. This is why we need to have memory. Do transformers bring us all the way? Even if it can map any arbitrary sequence to another sequence, it's probably not optimal. We need to think about architectures that encourage world model building, and not specialized associations. World models are models that receive high dimensional inputs, represent them in the lowest possible dimension, and output the correct high dimensional output. Yann LeCun seems to have some nice things to say about [that](https://www.youtube.com/watch?v=m3H2q6MXAzs). I'm slowly working my way through the progressions of connectionist architectures so I can deeply understand his JEPA models.

**3. What is the learning rule?**

- There's certainly something fundamental about backpropagation and gradient descent. It allows us to use neural nets in any problem in which we have input target pairs. This is basically what learning is, an optimization of loss. From that, we can formulate loss as prediction error: what we expect minus what we see. This is self-supervised learning and is crucial for world model building. However, given a model of the world, the robot needs to learn how to act in order to achieve its goal. This is why we need our robots to have a reward system. The robot needs reward in order to figure out the right behavior.

**4. How do we train the world model?**

- After birth, a baby moutain goat can stand within minutes, walk within hours, and keep up with their mothers on steep cliffs by the end of the day. Evolution has encoded some insane priors in the minds of these animals. I see self-supervised learning as a way to achieve those priors. With the data collection effort going towards VLAs, I hope we will be able to build foundation models that encode some kind of fundamental instinct so that new tasks can be learned with less samples. We're already seeing this in how dual manipulators only need 50 trajectories to learn a new skill like cutting an apple if those trajectories are fine tuning a foundation model.
- After deployment, the foundation model should still be tuned such that it adapts its understanding of the world to new situations.

**5. Given a model of the world, how should the robot act?**

- In 3, we established that the action policy can be decided by a reward system. There should actually be two rewards: an invaraint intrinsic reward, and a changing extrinsic one. 
- The intrinsic reward of humans has been optimized with natural selection, but we cannot train intrinsic rewards the same way with robots. Evolution is essentially a massively parallelized stochastic algorithm with an environment parameterized with the laws of physics. The loss is synonymus with a descent towards stability in the dynamics of the universe, and after the formation of Earth, it has taken 4.5 billion years for humans to come about. We can't simulate the whole freaking universe and accelerate it into a reasonable time scale. Thus, the intrinsic reward needs to be manually written.
  - Observing children, I notice how they always want the attention and affection of their parents. We had to learn how to walk, but we always knew how to cry. I see this as an effective tool for knowledge distillation. Young kids have no idea how the world works and what's the right thing to do, so they want the attention of their elders and see if they approve or not. This also explains why social validation is the strongest motive of high schoolers. There are infinite possibilities in which to live one's life, but one that doesn't stray far from the crowd certainly is a decent bet.
- However, we eventually read some Nietzsche and realize that we must make our own morality in the world. At some point, a mechanism should decide that the robot has collected enough information about the world to start creating its own objectives in life. This is when the extrinsic reward system kicks in. It's main characteristic is its ability to overide the intrinsic reward system. What's right to do isn't simply what receives affection. What's right to do comes from our reasoning and knowledge of the world. One might develop a heuristic to maximize usefulness in society. One might develop a heuristic to maintain a happy family. One might develop a heuristic to answer the mysteries the world or build the coolest inventions. Now, the possibilities are endless. In the human race, it is these people who advance it by creating new things. If we want robots to do really special things in the world, which requires the invention of new goals, we need to have this mechanism. Otherwise, I think machines will always be inferior to humans. They will never be like Socrates, who figured out that we should be thinking about how the world works. Perhaps we should never give robots this ability.
- I think we have come a long way in developing connectionist architectures and learning rules for robots. However, we have barely scratched the surface in creating the right intrinsic and extrinsic rewards for those systems.

