---
layout: page
title: Mechanistic Interpretability for VLA models
description: What can we learn about vision language action models from its weights?
img: assets/img/mech_vla_cover.jpg
importance: 1
category: 2026
related_publications: false
---

My collaborators and I recreated [Mechanistic Interpretability for Vision Language Action Models](https://arxiv.org/abs/2509.00328) by Bear Häon, Kaylene Stocking et al. to make sense of the hidden circuitry in VLA models. We're projecting the weight vectors of the VLA's forward layers into its token space to see what it's thinking at each layer, and injecting different weight vectors to see how the robot behaves differently.

The project was done as part of the final course project in 11-785 Introduction to Deep Learning that I took my sophomore year of undergrad.
Admittedly, much more could be done to make the experiments more rigorous if we weren't under such a tight deadline.

## Video

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <iframe src="https://www.youtube.com/embed/dcu3Xmeun0s" class="rounded z-depth-1" style="width: 100%; aspect-ratio: 16 / 9; height: auto;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>

## Paper

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    <iframe src="{{ '/assets/pdf/mech_vla.pdf' | relative_url }}" class="rounded z-depth-1" style="width: 100%; height: 85vh;" frameborder="0"></iframe>
    <p class="mt-2">
      <a href="{{ '/assets/pdf/mech_vla.pdf' | relative_url }}" download class="btn btn-sm btn-primary">
        <i class="fa-solid fa-download"></i> Download PDF
      </a>
    </p>
  </div>
</div>