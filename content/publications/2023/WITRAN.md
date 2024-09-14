---
title:
---
> Topic: [[Time Series]]

WITRAN: Water-wave Information Transmission and Recurrent Acceleration Network for Long-range Time Series Forecasting. [Paper](https://openreview.net/forum?id=y08bkEtNBK), [Code](https://github.com/Water2sea/WITRAN)
- Authors: Yuxin Jia, Youfang Lin, Xinyan Hao, **Yan Lin**, Shengnan Guo, Huaiyu Wan
- Conference: NeurIPS, URL: https://openreview.net/forum?id=y08bkEtNBK, 2023.

![[witran.webp]]

Capturing semantic information is crucial for accurate long-range time series forecasting, which involves modeling global and local correlations, as well as discovering long- and short-term repetitive patterns. Previous works have partially addressed these issues separately, but have not been able to address all of them simultaneously. Meanwhile, their time and memory complexities are still not sufficiently low for long-range forecasting. To address the challenge of capturing different types of semantic information, we propose a novel Water-wave Information Transmission (WIT) framework. This framework captures both long- and short-term repetitive patterns through bi-granular information transmission. It also models global and local correlations by recursively fusing and selecting information using Horizontal Vertical Gated Selective Unit (HVGSU). In addition, to improve the computing efficiency, we propose a generic Recurrent Acceleration Network (RAN) which reduces the time complexity to $O(\sqrt L)$ while maintaining the memory complexity at $O(L)$. Our proposed method, called Water-wave Information Transmission and Recurrent Acceleration Network (WITRAN), outperforms the state-of-the-art methods by 5.80% and 14.28% on long-range and ultra-long-range time series forecasting tasks respectively, as demonstrated by experiments on four benchmark datasets.