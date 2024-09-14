---
title: CTLE
---
> Topic: [[Spatiotemporal Data Mining]], [[Representation Learning]]

Pre-training Context and Time Aware Location Embeddings from Spatial-Temporal Trajectories for User Next Location Prediction. [Paper](https://ojs.aaai.org/index.php/AAAI/article/view/16548), [Code](https://github.com/Logan-Lin/CTLE)
- Authors: **Yan Lin**, Huaiyu Wan, Shengnan Guo, Youfang Lin
- Conference: AAAI, 2021, 35(5), 4241-4248.

![[ctle.webp]]

Pre-training location embeddings from spatial-temporal trajectories is a fundamental procedure and very beneficial for user next location prediction. In the real world, a location usually has variable functionalities under different contextual environments. If the exact functions of a location in the trajectory can be reflected in its embedding, the accuracy of user next location prediction should be improved. Yet, existing location embeddings pre-trained on trajectories are mostly based on distributed word representations, which mix a location's various functionalities into one latent representation vector. To address this problem, we propose a Context and Time aware Location Embedding (CTLE) model, which calculates a location's representation vector with consideration of its specific contextual neighbors in trajectories. In this way, the multi-functional properties of locations can be properly tackled. Furthermore, in order to incorporate temporal information in trajectories into location embeddings, we propose a subtle temporal encoding module and a novel pre-training objective, which further improve the quality of location embeddings. We evaluate our proposed model on two real-world mobile user trajectory datasets. The experimental results demonstrate that, compared with the existing embedding methods, our CTLE model can pre-train higher quality location embeddings and significantly improve the performance of downstream user location prediction models.