---
title: MMTEC
---
> Topic: [[Spatiotemporal Data Mining]], [[Trajectory Data Mining]], [[Representation Learning]]

Pre-training General Trajectory Embeddings with Maximum Multi-view Entropy Coding. [Paper](https://ieeexplore.ieee.org/abstract/document/10375102), [Preprint](https://arxiv.org/abs/2207.14539), [Code](https://github.com/Logan-Lin/MMTEC)
- Authors: **Yan Lin**, Huaiyu Wan, Shengnan Guo, Jilin Hu, Christian S. Jensen, Youfang Lin
- Journal: IEEE TKDE, DOI: 10.1109/TKDE.2023.3347513, 2023.

![[mmtec.webp]]

Spatio-temporal trajectories provide valuable information about movement and travel behavior, enabling various downstream tasks that in turn power real-world applications. Learning trajectory embeddings can improve task performance but may incur high computational costs and face limited training data availability. Pre-training learns generic embeddings by means of specially constructed pretext tasks that enable learning from unlabeled data. Existing pre-training methods face (i) difficulties in learning general embeddings due to biases towards certain downstream tasks incurred by the pretext tasks, (ii) limitations in capturing both travel semantics and spatio-temporal correlations, and (iii) the complexity of long, irregularly sampled trajectories. To tackle these challenges, we propose Maximum Multi-view Trajectory Entropy Coding (MMTEC) for learning general and comprehensive trajectory embeddings. We introduce a pretext task that reduces biases in pre-trained trajectory embeddings, yielding embeddings that are useful for a wide variety of downstream tasks. We also propose an attention-based discrete encoder and a NeuralCDE-based continuous encoder that extract and represent travel behavior and continuous spatio-temporal correlations from trajectories in embeddings, respectively. Extensive experiments on two real-world datasets and three downstream tasks offer insight into the design properties of our proposal and indicate that it is capable of outperforming existing trajectory embedding methods.