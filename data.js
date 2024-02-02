const profile = {
    "bio": [
        "I received the B.S. degree in computer science from Beijing Jiaotong University, Beijing, China, in 2019.",
        "I was in Aalborg University, Denmark from Sep. 2022 to Oct. 2023 as a visiting Ph.D., supported by the China Scholarship Council (CSC).",
        "I am currently working toward the Ph.D. degree in the School of Computer and Information Technology, Beijing Jiaotong University."
    ],
    "topics": [
        "Spatial-temporal Data Mining",
        "Trajectory Mining",
        "Representation Learning",
        "Pre-training"
    ],
    "footnote": [
        {
            "icon": "geo-alt",
            "text": "Beijing Jiaotong University, Haidian District, Beijing 100044, China"
        }
    ],
    "link": [
        {
            "icon": "envelope",
            "text": "Email",
            "url": "mailto:ylincs@bjtu.edu.cn",
            "tip": "ylincs@bjtu.edu.cn"
        },
        {
            "icon": "google",
            "text": "Scholar",
            "url": "https://scholar.google.com/citations?user=nHMmG2UAAAAJ",
            "tip": "My Google Scholar page."
        },
        {
            "icon": "github",
            "text": "GitHub",
            "url": "https://github.com/Logan-Lin",
            "tip": "Where I share implementation of projects and publications."
        }
    ]
}

const projects = [
    {
        "img": "promptgenius.webp",
        "text": "Prompt Genius: Comprehensive Prompt Library for AI ChatBots",
        "urls": {
            "Page": "https://www.promptgenius.site/",
            "Code": "https://github.com/wenhaomin/ChatGPT-PromptGenius"
        },
        "note": "All-purpose prompts with hierarchical classification system and multi-language support."
    },
    {
        "img": "overleafcopilot.webp",
        "text": "Overleaf Copilot: A comprehensive scholar writing copilot for Overleaf",
        "urls": {
            "Homepage": "https://overleafcopilot.github.io/",
            "Chrome Extension": "https://chromewebstore.google.com/detail/overleaf-copilot/eoadabdpninlhkkbhngoddfjianhlghb"
        },
        "note": "Powered by Large Language Models, OverleafCopilot is a plugin designed to elevate the academic writing experience on Overleaf."
    },
    {
        "img": "spatial-temporal big data.webp",
        "text": "Spatial-temporal Traffic Big Data Mining Platform",
        "urls": {
            "Demo": "http://demo.insis.com.cn:8200/"
        },
        "note": "Integrated platform for lubricating the process of spatial-temporal traffic big data mining, including data pre-processing, storing and prediction."
    },
    {
        "img": "highway simulation.webp",
        "text": "Highway Toll Rate Optimization System Based on Traffic Big Data",
        "urls": {
            "Demo": "http://demo.insis.com.cn:8202/"
        },
        "note": "A traffic flow simulation system based on historical traffic trajectories and optimal cost algorithm."
    },
    {
        "img": "scholar-page.webp",
        "text": "Personal Scholar Page (the page you are current viewing)",
        "urls": {
            "Page": "https://github.com/Logan-Lin/Logan-Lin.github.io",
            "Code": "https://github.com/Logan-Lin/Logan-Lin.github.io"
        },
        "note": "A scholar page I wrote myself with Bootstrap. Unconventional design for a scholar page."
    },
    {
        "img": "graph cut.webp",
        "text": "Robust and Balanced Graph Partition Algorithm for Map Services",
        "note": "Co-developed with Tencent, a preliminary algorithm for efficient hierarchical routing on large-scale road networks."
    },
    {
        "text": "航空配餐备份量动态预测算法研究",
        "note": "Enterprise commissioned research project. Predicting the airline catering backup quantity to help airline companies reduce economic and productivity losses."
    },
    {
        "text": "面向稀疏性问题的时空轨迹生成与表示学习方法研究",
        "note": "National Natural Science Foundation of China general project (国家自然科学基金面上项目). Research on spatio-temporal trajectory generation and representation learning methods for sparsity problems."
    },
    {
        "text": "基于轨迹表示学习的用户出行目的地及行程时间预测",
        "note": "Basic scientific research project of Beijing Jiaotong University (北京交通大学基本科研研究项目). User travel destination and travel time prediction based on trajectory representation learning."
    },
    {
        "text": "面向交通预测的时空轨迹数据预训练表示学习方法研究",
        "note": "National Natural Science Foundation of China general project (国家自然科学基金面上项目). Research on pre-training representation learning method of spatiotemporal trajectory data for traffic prediction."
    },
    {
        "text": "基于时空图神经网络的城市路网交通状态估计与预测",
        "note": "Enterprise commissioned research project. Urban road network traffic status estimation and prediction based on spatio-temporal graph neural network."
    },
    {
        "text": "基于移动用户轨迹大数据的异常交通事件预测",
        "note": "Enterprise commissioned research project. Abnormal traffic event prediction based on mobile user trajectory big data."
    }
]

const publications = [
    {
        "img": "dot.webp",
        "title": "Origin-Destination Travel Time Oracle for Map-based Services",
        "urls": {
            "Paper": "https://dl.acm.org/doi/10.1145/3617337",
            "Pre-print": "https://arxiv.org/abs/2307.03048",
            "Code": "https://github.com/Logan-Lin/DOT"
        },
        "received": "SIGMOD'24",
        "authors": "<strong>Yan Lin</strong>, Huaiyu Wan, Jilin Hu, Shengnan Guo, Bin Yang, Christian S. Jensen, Youfang Lin"
    },
    {
        "img": "mmtec.webp",
        "title": "Pre-training General Trajectory Embeddings with Maximum Multi-view Entropy Coding",
        "urls": {
            "Pre-print": "https://arxiv.org/abs/2207.14539"
        },
        "received": "TKDE'23",
        "authors": "<strong>Yan Lin</strong>, Huaiyu Wan, Shengnan Guo, Jilin Hu, Christian S. Jensen, Youfang Lin"
    },
    {
        "img": "ctle.webp",
        "title": "Pre-training Context and Time Aware Location Embeddings from Spatial-Temporal Trajectories for User Next Location Prediction",
        "urls": {
            "Paper": "https://ojs.aaai.org/index.php/AAAI/article/view/16548",
            "Code": "https://github.com/Logan-Lin/CTLE"
        },
        "received": "AAAI'21",
        "authors": "<strong>Yan Lin</strong>, Huaiyu Wan, Shengnan Guo, Youfang Lin"
    },
    {
        "img": "tale.webp",
        "title": "Pre-training Time-Aware Location Embeddings from Spatial-Temporal Trajectories",
        "urls": {
            "Paper": "https://ieeexplore.ieee.org/abstract/document/9351627/",
            "Code": "https://github.com/Logan-Lin/TALE"
        },
        "received": "TKDE'21",
        "authors": "Huaiyu Wan, <strong>Yan Lin</strong>, Shengnan Guo, Youfang Lin"
    },
    {
        "title": "Inductive and Adaptive Graph Convolution Networks Equipped with Constraint Task for Spatial-Temporal Traffic Data Kriging",
        "urls": {
            "Paper": "https://www.sciencedirect.com/science/article/pii/S0950705123010730"
        },
        "received": "KBS'23",
        "authors": "Tonglong Wei, Youfang Lin, Shengnan Guo, <strong>Yan Lin</strong>, Yiji Zhao, Xiyuan Jin, Zhihao Wu, Huaiyu Wan"
    },
    {
        "title": "WITRAN: Water-wave Information Transmission and Recurrent Acceleration Network for Long-range Time Series Forecasting",
        "urls": {
            "Paper": "https://openreview.net/forum?id=y08bkEtNBK"
        },
        "received": "NeurIPS'23",
        "authors": "Yuxin Jia, Youfang Lin, Xinyan Hao, <strong>Yan Lin</strong>, Shengnan Guo, Huaiyu Wan"
    },
    {
        "title": "Contrastive Pre-training with Adversarial Perturbations for Check-In Sequence Representation Learning",
        "urls": {
            "Paper": "https://ojs.aaai.org/index.php/AAAI/article/view/25546"
        },
        "received": "AAAI'23",
        "authors": "Letian Gong, Youfang Lin, Shengnan Guo, <strong>Yan Lin</strong>, Tianyi Wang, Erwen Zheng, Zeyu Zhou, Huaiyu Wan"
    },
    {
        "title": "Adversarial self-attentive time-variant neural networks for multi-step time series forecasting",
        "urls": {
            "Paper": "https://www.sciencedirect.com/science/article/abs/pii/S0957417423012241"
        },
        "received": "Expert Systems with Applications",
        "authors": "Changxia Gao, Ning Zhang, Youru Li, <strong>Yan Lin</strong>, Huaiyu Wan"
    },
    {
        "title": "Multi-scale adaptive attention-based time-variant neural networks for multi-step time series forecasting",
        "urls": {
            "Paper": "https://www.sciencedirect.com/science/article/abs/pii/S0957417423012241"
        },
        "received": "Applied Intelligence",
        "authors": "Changxia Gao, Ning Zhang, Youru Li, <strong>Yan Lin</strong>, Huaiyu Wan"
    }
]

const services = [
    {
        "text": "CVPR Reviewer",
        "time": "2024"
    },
    {
        "text": "AAAI Program Committee",
        "time": "2024"
    },
    {
        "text": "AAAI, IJCAI, KDD, TKDE, WSDM, WWW, KBS, Volunteer Reviewer",
        "time": "2019, 2020, 2021, 2022, 2023"
    },
    {
        "text": "ICDE External Reviewer",
        "time": "2023"
    },
    {
        "text": "Deep Learning, Teaching Assistant, BJTU",
        "time": "Fall 2021"
    },
    {
        "text": "Machine Learning, Teaching Assistant, BJTU",
        "time": "Fall 2021"
    },
]

const awards = [
    {
        "text": "First Prize Scholarship of Beijing Jiaotong University",
        "time": "2020, 2021, 2023"
    },
    {
        "text": "Tencent Rhino Bird Elite Talent",
        "time": "2022"
    },
    {
        "text": "National Scholarship for Graduate Students, China",
        "time": "2019"
    },
    {
        "text": 'Third Prize of "Challenge Cup" Extracurricular Academic Science and Technology Works of Capital College Students, Beijing',
        "time": "2019"
    },
    {
        "text": "Second Prize Scholarship of Beijing Jiaotong University",
        "time": "2016, 2017, 2018"
    },
    {
        "text": "KDD CUP of Fresh Air, Rank 39/4185",
        "time": "2018"
    },
    {
        "text": "AI Challenger Weather forecast, Second Price in Bi-weekly tournament",
        "time": "2018"
    },
]

const references = [
    [
        {
            "name": "Huaiyu Wan",
            "note": "Professor, Beijing Jiaotong University",
            "link": "https://scholar.google.com/citations?user=T5wVWIUAAAAJ&hl=en"
        },
        {
            "name": "Youfang Lin",
            "note": "Professor, Beijing Jiaotong University",
            "link": "https://scholar.google.com/citations?user=e8xT-e0AAAAJ&hl=en"
        },
        {
            "name": "Shengnan Guo",
            "note": "Associate Professor, Beijing Jiaotong University",
            "link": "https://scholar.google.com/citations?user=3JsSBYsAAAAJ&hl=en"
        }
    ],
    [
        {
            "name": "Jilin Hu",
            "note": "Professor, East China Normal University",
            "link": "https://scholar.google.com/citations?user=6eSvRMkAAAAJ&hl=en"
        },
        {
            "name": "Bin Yang",
            "note": "Professor, East China Normal University",
            "link": "https://scholar.google.com/citations?user=qjBQhoUAAAAJ&hl=zh-CN"
        },
        {
            "name": "Christian S. Jensen",
            "note": "Professor, Aalborg University",
            "link": "https://vbn.aau.dk/da/persons/christian-s-jensen"
        }
    ]
]