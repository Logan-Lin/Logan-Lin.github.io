---
title: DOT
---
> Topic: [[Spatiotemporal Data Mining]], [[Trajectory Data Mining]]

Origin-Destination Travel Time Oracle for Map-based Services. [Paper](https://dl.acm.org/doi/10.1145/3617337), [Preprint](https://arxiv.org/abs/2307.03048), [Code](https://github.com/Logan-Lin/DOT)
- Authors: **Yan Lin**, Huaiyu Wan, Jilin Hu, Shengnan Guo, Bin Yang, Christian S. Jensen, Youfang Lin
- Conference: SIGMOD, 2024, 1(3), Article No. 217.

![[dot.webp]]

Given an origin (O), a destination (D), and a departure time (T), an Origin-Destination (OD) travel time oracle (ODT-Oracle) returns an estimate of the time it takes to travel from O to D when departing at T. ODT-Oracles serve important purposes in map-based services. To enable the construction of such oracles, we provide a travel-time estimation (TTE) solution that leverages historical trajectories to estimate time-varying travel times for OD pairs.

The problem is complicated by the fact that multiple historical trajectories with different travel times may connect an OD pair, while trajectories may vary from one another. To solve the problem, it is crucial to remove outlier trajectories when doing travel time estimation for future queries.

We propose a novel, two-stage framework called Diffusion-based Origin-destination Travel Time Estimation (DOT), that solves the problem. First, DOT employs a conditioned Pixelated Trajectories (PiT) denoiser that enables building a diffusion-based PiT inference process by learning correlations between OD pairs and historical trajectories. Specifically, given an OD pair and a departure time, we aim to infer a PiT. Next, DOT encompasses a Masked Vision Transformer~(MViT) that effectively and efficiently estimates a travel time based on the inferred PiT. We report on extensive experiments on two real-world datasets that offer evidence that DOT is capable of outperforming baseline methods in terms of accuracy, scalability, and explainability.