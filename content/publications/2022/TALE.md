---
title:
---
> Topic: [[Spatiotemporal Data Mining]], [[Trajectory Data Mining]], [[Representation Learning]]

Pre-training time-aware location embeddings from spatial-temporal trajectories. [Paper](https://ieeexplore.ieee.org/abstract/document/9351627), [Code](https://github.com/Logan-Lin/TALE)
- Authors: Huaiyu Wan, **Yan Lin**, Shengnan Guo, Youfang Lin
- Journal: IEEE TKDE, 2022, 34 (11): 5510-5523.

![[tale.webp]]

With the increasing accumulation of spatial-temporal trajectory data, location-based data mining has recently been extensively studied. A fundamental research topic in this field is learning the embedding vectors of locations through self-supervised pre-training. Pre-trained embedding vectors can utilize the highly available unlabeled trajectory data, and benefit downstream tasks in multiple aspects. However, most existing methods ignore the temporal information hidden in the visited time of locations in trajectories. Considering that human activities are highly regulated by specific periods of a day, temporal information can reflect some intrinsic characteristics of locations, so it is necessary to fuse them into location embedding vectors. In this paper, we propose a Time-Aware Location Embedding (TALE) pre-training method based on the CBOW framework, which is able to incorporate temporal information into the learned embedding vectors of locations. A novel temporal tree structure is designed to extract temporal information during the calculation of Hierarchical Softmax. In order to verify the effectiveness of TALE, we apply the learned embedding vectors into three downstream location-based prediction tasks, i.e., location classification, location visitor flow prediction and user next location prediction. Experiments are conducted on four real-world user trajectory datasets, and the experimental results demonstrate that our TALE model can obviously help downstream tasks gain better performance.