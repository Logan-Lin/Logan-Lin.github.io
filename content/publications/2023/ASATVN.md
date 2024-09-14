---
title:
---
> Topic: [[Time Series]]

Adversarial Self-Attentive Time-Variant Neural Networks for Multi-Step Time Series Forecasting. [Paper](https://www.sciencedirect.com/science/article/pii/S0957417423012241)
- Authors: Changxia Gao, Ning Zhang, Youru Li, **Yan Lin**, Huaiyu Wan
- Journal: Expert Systems with Applications (ESWA), 2023, 231: 120722.

![[asatvn.webp]]

Accurate forecasting of time series mitigates the uncertainty of future outlooks and is a great help in reducing errors in decisions. Despite years of researches, there are still some challenges to accurate forecasting of time series, including the difficulty of dynamic modeling, the problem of capturing short-term correlations, and the conundrum of long-term forecasting. This paper offers an Adversarial Truncated Cauchy Self-Attentive Time-Variant Neural Network (ASATVN) for multi-step ahead time series forecasting. Specifically, the proposed model builds on Generative Adversarial Networks, in which the generator is composed of a novel time-variant model. The time-variant model contributes to learning dynamic time-series changes with its time-variant architecture and employs a newly proposed Truncated Cauchy Self-Attention block to capture the local sequential dependencies better. For the discriminator, two self-attentive discriminators are presented to regularize predictions with fidelity and continuity, which is beneficial to predicting sequence over longer time horizons. Our proposed ASATVN model outperforms the state-of-the-art predictive models on eleven real-world benchmark datasets, demonstrating its effectiveness.
