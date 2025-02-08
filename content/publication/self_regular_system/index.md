---
title: "Enabling Autonomic Microservice Management through Self-Learning Agents"
authors:
- admin
- Fangkai Yang
- Xiaoting Qin
- Zhiyang Zhang
- Jue Zhang
- Qingwei Lin
- Hongyu Zhang
- Yingnong Dang
- Saravan Rajmohan
- Dongmei Zhang
- Qi Zhang
date: "2025-01-31T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: ""

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

# abstract: Node features are crucial attributes in graph analysis, where many methodologies leverage these features for graph representations such as Graph Neural Networks (GNNs) obtain representations by aggregating neighbor features. However, incomplete node features are ubiquitous in real-world scenarios, such as social networks, where the attributes of users may be partly private. Consequently, the performance of existing methods for node feature imputation is impeded in graphs with low homogeneity. Moreover, these methods only focus on transductive tasks, overlooking the issue of feature offset existing under inductive tasks. To address these challenges, we introduce FPMAE, a novel approach combining feature propagation and a graph masked autoencoder that excels under both transductive and inductive settings. First, FPMAE designs an algorithm that randomly connects nodes in the training set with the same label to enhance the homogeneity of the graph. Second, FPMAE takes the features obtained by feature propagation on the original graph after random edge dropping as input, and the features obtained by feature propagation on the enhanced homogeneous graph as the reconstruction target to learn a GraphMAE model. Finally, we design a two-step representation generation method at the inference stage. After being reconstructed by feature propagation, the input features will be reconstructed by the full GraphMAE once more, and then fed into the encoder to obtain embeddings that can be exploited by downstream tasks. Various experiments are conducted on six public datasets and an additional dataset collected from records of voyages with naturally missing features to validate the performance of FPMAE. The results show that FPMAE outperforms the state-of-the-art methods, showing its effectiveness in attribute graph analysis tasks with missing features.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
- Source Themes
featured: false

links:
# - name: Custom Link
#   url: http://example.org
url_pdf: https://arxiv.org/pdf/2501.19056
url_code: 'https://github.com/microsoft/ACV/blob/main/self_managing_systems/microservice/AutoKube/README.md'
# url_dataset: '#'
# url_poster: 'publication/unsupervised_representation_mc/poster.pdf'
# url_project: https://aka.ms/ACV-LLM
# url_slides: ''
# url_source: '#'
url_video: 'https://youtu.be/IFFLb5mgzY0'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/s9CC2SKySJM)'
#   focal_point: ""
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

<!-- {{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
