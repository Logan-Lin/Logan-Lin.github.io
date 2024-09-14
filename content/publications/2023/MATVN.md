---
title:
---
> Topic: [[Time Series]]

Multi-scale adaptive attention-based time-variant neural networks for multi-step time series forecasting. [Paper](https://link.springer.com/article/10.1007/s10489-023-05057-7)
- Authors: Changxia Gao, Ning Zhang, Youru Li, **Yan Lin**, Huaiyu Wan
- Journal: Applied Intelligence (APIN), 2023, 53: 28974–28993.

![[matvn.webp]]

Time series analysis is the process of exploring and analyzing past trends to predict future events for any given time interval. Powered by recent advances in convolutional, recurrent and self-attention mechanisms, many deep learning methods have facilitated the investigation of time series forecasting. However, despite their effectiveness, it is doubtful that future trends can be accurately predicted due to the intricate temporal irregularities. Plus, time series frequently exhibit features at various time scales, but existing approaches do not adequately take this into account. To address above issues, this paper offers a new Multi-scale Adaptive attention-based Time-Variant neural Networks (MATVN) for multi-step ahead time series forecasting. Specifically, we contribute a novel framework capable of capturing irregular dynamic behaviors observed in temporal data over time with a Time-Variant architecture. Furthermore, a newly proposed Multi-scale Multi-head Adaptive attention module is introduced into the Time-Variant architecture to encode temporal dependencies from various pre-defined scale-aware ranges. Additionally, we endow the proposed module with more flexible individual representation learning and scale-aware attention scopes for each token to better capture multi-scale temporal patterns by designing a new Adaptive Window-aware Mask strategy. Experimental results on the vast majority of application scenarios, including climatology and energy consumption, demonstrate that the proposed model outperforms a lot of recent state-of-the-art methods in multi-step time series forecasting tasks.
