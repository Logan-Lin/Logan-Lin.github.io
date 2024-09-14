---
title:
---
> Topic: [[Spatiotemporal Data Mining]], [[Representation Learning]]

Spatial-Temporal Cross-View Contrastive Pre-Training for Check-in Sequence Representation Learning. [Preprint](https://arxiv.org/abs/2407.15899)
- Authors: Letian Gong, Huaiyu Wan, Shengnan Guo, Li Xiucheng, **Yan Lin**, Erwen Zheng, Tianyi Wang, Zeyu Zhou, Youfang Lin
- Journal: IEEE TKDE, DOI: 10.1109/TKDE.2024.3434565, 2024.

![[stccr.webp]]

The rapid growth of location-based services (LBS) has yielded massive amounts of data on human mobility. Effectively extracting meaningful representations for user-generated check-in sequences is pivotal for facilitating various downstream services. However, the user-generated check-in data are simultaneously influenced by the surrounding objective circumstances and the user's subjective intention. Specifically, the temporal uncertainty and spatial diversity exhibited in check-in data make it difficult to capture the macroscopic spatial-temporal patterns of users and to understand the semantics of user mobility activities. Furthermore, the distinct characteristics of the temporal and spatial information in check-in sequences call for an effective fusion method to incorporate these two types of information. In this paper, we propose a novel Spatial-Temporal Cross-view Contrastive Representation (STCCR) framework for check-in sequence representation learning. Specifically, STCCR addresses the above challenges by employing self-supervision from "spatial topic" and "temporal intention" views, facilitating effective fusion of spatial and temporal information at the semantic level. Besides, STCCR leverages contrastive clustering to uncover users' shared spatial topics from diverse mobility activities, while employing angular momentum contrast to mitigate the impact of temporal uncertainty and noise. We extensively evaluate STCCR on three real-world datasets and demonstrate its superior performance across three downstream tasks.
