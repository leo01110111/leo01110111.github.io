---
layout: page
title: Bimanual UR7e Teleoperation
description: A leader-follower teleoperation station for two Universal Robots UR7e arms, used to collect demonstrations, train policies, and run them on hardware.
img: assets/img/teleop_cover.jpg
importance: 1
category: 2026
related_publications: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/P6dQj8My7Vs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Between May and August 2026, in the Max Simchowitz Lab at CMU, I built a bimanual teleoperation station around two Universal Robots UR7e arms. A person moves a pair of Dynamixel-based leader arms, and the UR7e arms follow. The leader arms have gravity compensation, so they feel weightless and hold still when released, and force feedback, so the operator feels resistance when the follower arms make contact. The same station is used for three jobs:

- **Data collection.** Teleoperated demonstrations are recorded as training data.
- **Behavior cloning.** Policies are trained on those demonstrations.
- **Policy execution.** Learned policies run on the same hardware, and I evaluated Pi0.5 models on it.

## What I worked on

- **Leader arms.** I spent a lot of time with the Dynamixel servos that make up the leader arms, and designed parts for them in CAD.
- **Software stack.** The control and data code is in Python and ROS 2, with ZeroMQ for networking between processes.
- **Robot configuration.** I set up and configured the Universal Robots arms.
- **Simulation.** I built a MuJoCo simulation of the UR7e arms.

The leader-arm design and teleoperation software build on the open-source [FACTR Teleop](https://jasonjzliu.com/factr/) system from CMU, adapted here for the UR7e arms.

## Links

- **Code:** [github.com/leo01110111/FACTR_Teleop](https://github.com/leo01110111/FACTR_Teleop)
- **CAD (Onshape):** [leader arm design](https://cad.onshape.com/documents/590049985a691a61141233d7/w/f2c60ebe1c3eccc59bca799e/e/dc1c1311073a0153c53fffd6)
- **Video of the station:** [YouTube](https://youtu.be/P6dQj8My7Vs)
