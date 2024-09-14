---
title:
---
> Topic: [[Spatiotemporal Data Mining]], [[Trajectory Data Mining]]

Micro-Macro Spatial-Temporal Graph-based Encoder-Decoder for Map-Constrained Trajectory Recovery. [Preprint](https://arxiv.org/abs/2404.19141), [Paper](https://www.computer.org/csdl/journal/tk/5555/01/10517676/1WCj0j0FljW), [Code](https://github.com/wtl52656/MM-STGED)
- Authors: Tonglong Wei, Youfang Lin, **Yan Lin**, Shengnan Guo, Lan Zhang, Huaiyu Wan
- IEEE TKDE, DOI: 10.1109/TKDE.2024.3396158, 2024.

![[mm-stged.webp]]

Recovering intermediate missing GPS points in a sparse trajectory, while adhering to the constraints of the road network, could offer deep insights into users' moving behaviors in intelligent transportation systems. Although recent studies have demonstrated the advantages of achieving map-constrained trajectory recovery via an end-to-end manner, they still face two significant challenges. Firstly, existing methods are mostly sequence-based models. It is extremely hard for them to comprehensively capture the micro-semantics of individual trajectory, including the information of each GPS point and the movement between two GPS points. Secondly, existing approaches ignore the impact of the macro-semantics, i.e., the road conditions and the people's shared travel preferences reflected by a group of trajectories. To address the above challenges, we propose a Micro-Macro Spatial-Temporal Graph-based Encoder-Decoder (MM-STGED). Specifically, we model each trajectory as a graph to efficiently describe the micro-semantics of trajectory and design a novel message-passing mechanism to learn trajectory representations. Additionally, we extract the macro-semantics of trajectories and further incorporate them into a well-designed graph-based decoder to guide trajectory recovery. Extensive experiments conducted on sparse trajectories with three different sampling intervals that are respectively constructed from two real-world trajectory datasets demonstrate the superiority of our proposed model.
