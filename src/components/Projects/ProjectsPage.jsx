import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "Fingerprint-Based Blood Group Prediction",
    category: "Deep Learning · Computer Vision · Medical AI · Biometric Analysis",
    tags: ['machine-learning', 'deep-learning'],
    // short summary shown in card; Read more expands to longDescription
    description: "Developed a non-invasive blood group classification system that predicts ABO/Rh types (8 classes) directly from fingerprint images using classical ML and deep learning techniques.",
    longDescription: "Developed a non-invasive blood group classification system that predicts ABO/Rh types (8 classes) directly from fingerprint images using both classical ML and deep learning techniques. Designed a complete end-to-end pipeline including data preprocessing, feature engineering, transfer learning, model comparison, and performance evaluation on ~6,000 fingerprint samples.",
    longDescriptionHtml: `
      <p>Developed a non-invasive blood group classification system that predicts ABO/Rh types (8 classes) directly from fingerprint images using both classical ML and deep learning techniques. Designed a complete end-to-end pipeline including data preprocessing, feature engineering, transfer learning, model comparison, and performance evaluation on ~6,000 fingerprint samples.</p>
      <h4 style="margin-top:12px;">🔎 Key Highlights</h4>
      <ul style="margin-left:18px; margin-top:8px; list-style-type: disc;">
        <li>Implemented HOG + SVM baseline achieving 87% test accuracy.</li>
        <li>Fine-tuned ResNet50 (Transfer Learning) achieving 90% test accuracy.</li>
        <li>Performed structured preprocessing: normalization, contrast enhancement, resizing (224×224), augmentation.</li>
        <li>Conducted comparative analysis with confusion matrix, precision, recall &amp; F1-score.</li>
        <li>Demonstrated feasibility of scalable, low-cost, non-invasive blood group screening.</li>
      </ul>
    `,
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Scikit-learn", "ResNet50", "SVM", "Transfer Learning"],
    github: "https://github.com/nikhita-bonu/machine_learning/tree/main/Blood_Group_Detection",
    demo: null,
    featured: true,
    status: "Completed"
  },
  {
    id: 2,
    title: "Customer Churn Prediction Using Classification Models",
    // show the requested category string instead of tech chips in details
    category: "Supervised Learning · Classification Models · Predictive Analytics · Customer Retention Modeling",

    description: "Engineered a churn prediction system using the Telco Customer Churn dataset (7,043 records, 20 features) to identify customers likely to discontinue service.",
    longDescription: "Engineered a churn prediction system using the Telco Customer Churn dataset (7,043 records, 20 features). Implemented a full ML pipeline including data cleaning, EDA, feature encoding, imbalance handling with SMOTE, model training with cross-validation, and a reusable prediction workflow by saving the trained model and encoders.",
    longDescriptionHtml: `
      <p>Engineered a churn prediction system using the Telco Customer Churn dataset (7,043 records, 20 features). Implemented a full ML pipeline including data cleaning, EDA, feature encoding, imbalance handling with SMOTE, model training with cross-validation, and a reusable prediction workflow by saving the trained model and encoders.</p>
      <h4 style="margin-top:12px;">🔍 Key Highlights</h4>
      <ul style="margin-left:18px; margin-top:8px; list-style-type: disc;">
        <li>Cleaned and standardized data by fixing TotalCharges missing/blank values and removing non-informative customerID.</li>
        <li>Performed exploratory analysis on numerical + categorical features (distributions, boxplots, correlation heatmap, countplots).</li>
        <li>Handled class imbalance using SMOTE, balancing churn vs non-churn classes for fair training.</li>
        <li>Trained and compared Decision Tree, Random Forest, and XGBoost using 5-fold cross-validation.</li>
        <li>Selected Random Forest as the best baseline model and evaluated on the test set (~0.87 accuracy).</li>
      </ul>
    `,
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest", "XGBoost", "Matplotlib", "Seaborn"],
    github: "https://github.com/nikhita-bonu/machine_learning/tree/main/Customer_Churn_Prediction",
    demo: null,
    featured: true,
    status: "Research"
  },
  {
    id: 3,
    title: "Customer Segmentation Using K-Means Clustering",
    category: "Unsupervised Learning · Clustering · Customer Analytics · Behavioral Segmentation",
    description:"Developed a customer segmentation model using K-Means on Mall Customers dataset (200 records) to identify groups based on Annual Income and Spending Score.",
    longDescription: "Developed a customer segmentation model using K-Means clustering to group mall customers based on Annual Income and Spending Score. Performed data analysis, selected optimal k with the Elbow Method (WCSS), trained KMeans with k-means++ initialization, and visualized segments and centroids to support marketing strategies.",
    longDescriptionHtml: `
      <p>Developed a customer segmentation model using K-Means clustering to group mall customers based on Annual Income and Spending Score. Performed data analysis, selected the optimal number of clusters using the Elbow Method (WCSS), trained KMeans with k-means++ initialization, and visualized resulting segments and centroids to support marketing and targeting strategies.</p>
      <h4 style="margin-top:12px;">🔍 Key Highlights</h4>
      <ul style="margin-left:18px; margin-top:8px; list-style-type: disc;">
        <li>Analyzed dataset structure (200 customers) and validated no missing values.</li>
        <li>Selected features: Annual Income + Spending Score for segmentation.</li>
        <li>Used WCSS + Elbow Plot to determine the optimal clusters (k = 5).</li>
        <li>Trained K-Means with k-means++ initialization for stable clustering.</li>
        <li>Visualized customer segments and cluster centroids for interpretation.</li>
      </ul>
    `,
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    github: "https://github.com/nikhita-bonu/machine_learning/tree/main/Customer_Segmentation",
    demo: null,
    featured: true,
    status: "Completed"
  },
  {
    id: 4,
    title: "VISTA3D- Medical Image Segmentation",
    category: "3D Medical Imaging · Foundation Models · Interactive Segmentation · Healthcare AI Systems",
    description: "Reimplemented the VISTA3D, 3D medical imaging foundation model and developed lightweight, deployment-friendly enhancements to improve interactive segmentation efficiency and mask quality.",
    longDescription: "Reimplemented the VISTA3D 3D medical imaging foundation model (CVPR) and proposed lightweight, deployment-friendly enhancements to improve interactive segmentation efficiency, CPU inference speed, and mask quality—without retraining the base model. Focused on practical clinical usability by reducing user interactions, accelerating inference via preprocessing, and refining outputs through 3D postprocessing.",
    longDescriptionHtml: `
      <p>Reimplemented the VISTA3D 3D medical imaging foundation model (CVPR) and proposed lightweight, deployment-friendly enhancements to improve interactive segmentation efficiency, CPU inference speed, and mask quality—without retraining the base model. Focused on practical clinical usability by reducing user interactions, accelerating inference via preprocessing, and refining outputs through 3D postprocessing.</p>
      <h4 style="margin-top:12px;">🔍 Key Highlights</h4>
      <ul style="margin-left:18px; margin-top:8px; list-style-type: disc;">
        <li>Reimplemented full VISTA3D automatic + interactive 3D segmentation pipeline using MONAI and PyTorch to establish a validated baseline.</li>
        <li>Smart Prompt Engineering: structured multi-point, multi-organ 3D prompt system to improve interactive segmentation accuracy while reducing user effort.</li>
        <li>Input Preprocessing Optimization: resolution-aware volume downsampling and smoothing to accelerate CPU inference without modifying the base model.</li>
        <li>Output Postprocessing Enhancement: 3D morphological filtering and boundary smoothing to remove noise and improve mask consistency.</li>
        <li>Evaluated segmentation quality and runtime trade-offs across representative organ cases using standard medical imaging metrics.</li>
      </ul>
    `,
    tech: ["PyTorch", "MONAI", "SegResNet", "SimpleITK", "3D Volumetric Imaging", "Sliding Window Inference", "Morphological Operations"],
    github: "https://github.com/nikhita-bonu/machine_learning/tree/main/Vista3D-Medical%20Imaging",
    demo: null,
    featured: true,
    status: "Research"
  },
  {
    id: 5,
    title: "Named Entity Recognition Using Transformer Models",
    category: "NLP · Transformers · Named Entity Recognition · Sequence Labeling",
    description: "Developed an end-to-end Named Entity Recognition (NER) system using transformer-based architectures to extract structured entities from unstructured text. Designed custom preprocessing pipelines for token-level annotations, implemented precise subword token–label alignment for BERT-based models, and fine-tuned transformer models using PyTorch. Evaluated model performance using F1 metrics and optimized inference efficiency by comparing BERT and DistilBERT variants.",
    longDescription: "Developed an end-to-end Named Entity Recognition (NER) system using transformer-based architectures to extract structured entities from unstructured text. Implemented token-level preprocessing, subword token–label alignment, and fine-tuned BERT and DistilBERT variants using PyTorch. Built inference utilities and deployment-ready preprocessing pipelines; evaluated models using precision, recall and F1 metrics and optimized inference latency for deployment.",
    longDescriptionHtml: `
      <p>Developed an end-to-end Named Entity Recognition (NER) system using transformer-based architectures to extract structured entities from unstructured text. Implemented token-level preprocessing, subword token–label alignment, and fine-tuned BERT and DistilBERT variants using PyTorch. Built inference utilities and deployment-ready preprocessing pipelines; evaluated models using precision, recall and F1 metrics and optimized inference latency for deployment.</p>
      <h4 style="margin-top:12px;">🔍 Key Highlights</h4>
      <ul style="margin-left:18px; margin-top:8px; list-style-type: disc;">
        <li>Preprocessed and structured token-level annotated text into sentence-wise sequences for transformer-based Named Entity Recognition (NER) training.</li>
        <li>Implemented precise token–label alignment for subword tokenization using Hugging Face Transformers, applying -100 masking to preserve entity boundary consistency during loss computation.</li>
        <li>Fine-tuned a BERT-based token classification model using a custom PyTorch training loop with validation F1 evaluation and performance tracking.</li>
        <li>Developed optimized inference utilities to generate entity predictions on unseen text and compare model outputs across architectures.</li>
        <li>Trained and evaluated a lightweight DistilBERT variant to reduce inference latency while maintaining competitive NER performance.</li>
      </ul>
    `,
    tech: ["Hugging Face Transformers", "BERT Fine-Tuning", "DistilBERT Optimization", "Token–Label Alignment", "Subword Tokenization", "Sequence Tagging", "Model Evaluation (F1, Precision, Recall)"],
    github: "https://github.com/nikhita-bonu/Named_Entity_Recognition_BERT/tree/main",
    demo: null,
    featured: true,
    status: "Completed"
  },
  {
    id: 6,
    title: "Denoising Diffusion Probabilistic Models (DDPM) for Image Generation",
    category: "Generative AI · Diffusion Models · UNet Architecture · Image Generation",
    description: "Implemented and trained a Denoising Diffusion Probabilistic Model (DDPM) from scratch to model and generate structured data distributions. Completed the forward and reverse diffusion processes, implemented noise scheduling, and extended the architecture to image generation using a time-conditioned 2D UNet.",
    longDescription: "Implemented and trained a Denoising Diffusion Probabilistic Model (DDPM) from scratch to model and generate structured data distributions. Completed the forward and reverse diffusion processes, implemented noise scheduling, and extended the architecture to image generation using a time-conditioned 2D UNet. Trained and evaluated the model on both synthetic data (spiral dataset) and MNIST images, analyzing the impact of beta schedules and diffusion timesteps on generation quality and convergence behavior.",
    longDescriptionHtml: `
      <p>Implemented and trained a Denoising Diffusion Probabilistic Model (DDPM) from scratch to model and generate structured data distributions. Completed the forward and reverse diffusion processes, implemented noise scheduling, and extended the architecture to image generation using a time-conditioned 2D UNet. Trained and evaluated the model on both synthetic data (spiral dataset) and MNIST images, analyzing the impact of beta schedules and diffusion timesteps on generation quality and convergence behavior.</p>
      <h4 style="margin-top:12px;">🔍 Key Highlights</h4>
      <ul style="margin-left:18px; margin-top:8px; list-style-type: disc;">
        <li>Implemented the forward diffusion process (q-sample) and reverse denoising process (p-sample) based on the original DDPM formulation, including noise scheduling and reparameterization.</li>
        <li>Designed and optimized the DDPM training loss to predict noise ε using mean squared error, enabling stable diffusion training across multiple timesteps.</li>
        <li>Experimented with different beta schedules and diffusion step configurations, analyzing their impact on convergence speed, noise corruption rate, and sample quality.</li>
        <li>Extended the diffusion model to image data by integrating a time-conditioned 2D UNet architecture, enabling pixel-level noise prediction for MNIST digit generation.</li>
        <li>Visualized and compared forward corruption and reverse denoising processes across timesteps, demonstrating controlled image generation from pure Gaussian noise.</li>
      </ul>
    `,
    tech: ["DDPM", "UNet (2D)", "Diffusion Models", "MNIST", "Gaussian Noise Scheduling", "MSE Loss Optimization", "Image Generation"],
    github: "https://github.com/nikhita-bonu/Generative_AI/tree/main/Denoising_Diffusion_Probabilistic_Models",
    demo: null,
    featured: true,
    status: "Completed"
  },
  {
    id: 7,
    title: "Generative Adversarial Networks (GANs) for Distribution Learning",
    category: "Generative AI · GANs · Adversarial Training · Distribution Learning",
    description: "Implemented and analyzed Generative Adversarial Networks (GANs) to study adversarial training dynamics and generator–discriminator interactions. Developed modular training functions and conducted experiments on training stability and mode collapse.",
    longDescription: "Implemented and analyzed Generative Adversarial Networks (GANs) to study adversarial training dynamics and generator–discriminator interactions. Developed modular training functions for generator and discriminator, extended real data distributions to complex multimodal settings, and conducted controlled experiments to evaluate training stability, mode collapse behavior, and update frequency effects.",
    longDescriptionHtml: `
      <p>Implemented and analyzed Generative Adversarial Networks (GANs) to study adversarial training dynamics and generator–discriminator interactions. Developed modular training functions for generator and discriminator, extended real data distributions to complex multimodal settings, and conducted controlled experiments to evaluate training stability, mode collapse behavior, and update frequency effects.</p>
      <h4 style="margin-top:12px;">🔍 Key Highlights</h4>
      <ul style="margin-left:18px; margin-top:8px; list-style-type: disc;">
        <li>Implemented modular training steps for discriminator and generator using adversarial loss formulations, ensuring correct gradient flow control via detach() during discriminator updates.</li>
        <li>Trained GAN models on multiple real data distributions (Gaussian and multimodal mixtures) to evaluate generator convergence and distribution learning behavior.</li>
        <li>Extended the real data sampling pipeline to support a custom four-cluster Gaussian mixture distribution, analyzing generator performance under varying variance settings.</li>
        <li>Conducted controlled experiments on update frequency by modifying discriminator-to-generator training ratios, evaluating impact on training stability, mode collapse, and loss oscillations.</li>
        <li>Visualized adversarial training dynamics through loss curves and frame-by-frame sample evolution to qualitatively assess generator learning progression.</li>
      </ul>
    `,
    tech: ["Generative Adversarial Networks (GANs)", "Neural Network Optimization", "Loss Function Engineering", "Data Distribution Modeling", "Matplotlib Visualization"],
    github: "https://github.com/nikhita-bonu/Generative_AI/tree/main/Generative_Adversarial_Networks",
    demo: null,
    featured: true,
    status: "Completed"
  },
  {
    id: 8,
    title: "Generative Modeling with Gaussian Mixture Models and Variational Autoencoders",
    category: "Generative AI · Probabilistic Modeling · Variational Inference · Representation Learning",
    description: "Implemented and analyzed Gaussian Mixture Models (GMMs) and Variational Autoencoders (VAEs) for density estimation and latent representation learning, with sampling, visualization, and evaluation workflows.",
    longDescription: "Implemented and analyzed two core generative modeling approaches: Gaussian Mixture Models (GMMs) for density estimation and Variational Autoencoders (VAEs) for learning compact latent representations of images. Developed sampling + visualization pipelines, Monte Carlo entropy estimation, and a VAE training pipeline using ELBO with reconstruction + KL regularization. Explored mixture weights and latent dimensionality effects via latent traversal, prior sampling, and t-SNE visualizations.",
    longDescriptionHtml: `
      <p>Implemented and analyzed two core generative modeling approaches: Gaussian Mixture Models (GMMs) for density estimation and Variational Autoencoders (VAEs) for learning compact latent representations of images. Developed sampling + visualization pipelines, Monte Carlo entropy estimation, and a VAE training pipeline using ELBO with reconstruction + KL regularization. Explored mixture weights and latent dimensionality effects via latent traversal, prior sampling, and t-SNE visualizations.</p>
      <h4 style="margin-top:12px;">🔍 Key Highlights</h4>
      <ul style="margin-left:18px; margin-top:8px; list-style-type: disc;">
        <li>Constructed a 2D GMM with three components, generated 100k samples, and visualized clusters with component-wise coloring and legends.</li>
        <li>Implemented Monte Carlo estimation of differential entropy for a mixture distribution and plotted entropy convergence vs. sample size.</li>
        <li>Investigated nearly-degenerate mixture weights and compared entropy behavior against the dominant single Gaussian component.</li>
        <li>Developed a VAE (encoder/decoder) with the reparameterization trick and trained using an ELBO loss (Gaussian reconstruction + KL divergence).</li>
        <li>Created interpretability tools: ELBO learning curves, latent traversal, prior sampling, and t-SNE latent space plots, comparing different latent dimensions and architectures.</li>
      </ul>
    `,
    tech: ["Variational Autoencoders (VAE)", "Gaussian Mixture Models (GMM)", "ELBO Optimization", "Probabilistic Modeling", "Latent Space Representation Learning"],
    github: "https://github.com/nikhita-bonu/Generative_AI/tree/main/Gaussian%20Mixture%20_Models%20%26%20Variational_Autoencoders",
    demo: null,
    featured: true,
    status: "Completed"
  },
  {
    id: 9,
    title: "Improving Diffusion Models for Medical Anomaly Detection",
    category: "Generative AI · Diffusion Models · Medical Image Analysis · Anomaly Detection · Weakly Supervised Learning",
    description: "Implemented a diffusion-based anomaly detection framework for brain MRI using classifier-guided DDPM/DDIM ideas, SSIM-weighted scoring, Gaussian postprocessing, and patch-based diffusion to improve localization of small tumors.",
    longDescription: "Implemented a diffusion-based anomaly detection framework for brain MRI inspired by classifier-guided DDPM/DDIM models. Extended the baseline with SSIM-weighted anomaly scoring, Gaussian post-processing, and patch-based diffusion to improve localization of small tumors. Built a ResNet-guided classifier for conditional sampling and packaged the pipeline with a Tkinter GUI for reproducible experiments on BRATS 2020 MRI data.",
    longDescriptionHtml: `
      <p>Implemented a diffusion-based anomaly detection framework for brain MRI inspired by recent research on classifier-guided DDPM/DDIM models. Extended the baseline approach with structural SSIM-weighted anomaly scoring, Gaussian post-processing, and patch-based diffusion to improve localization of small tumors. Designed a ResNet-guided classifier for stronger conditional sampling and packaged the full pipeline with a Tkinter GUI for accessible experimentation on BRATS 2020 MRI data.</p>
      <h4 style="margin-top:12px;">🔍 Key Highlights</h4>
      <ul style="margin-left:18px; margin-top:8px; list-style-type: disc;">
        <li>Re-implemented classifier-guided DDPM/DDIM-based anomaly detection pipeline for BRATS 2020 brain MRI slices.</li>
        <li>Designed a structural SSIM-weighted L2 anomaly score, improving sensitivity to anatomical changes over plain reconstruction error.</li>
        <li>Applied Gaussian smoothing to produce cleaner, clinically interpretable heatmaps.</li>
        <li>Developed a patch-based diffusion variant with a ResNet-style classifier to enhance detection of small, localized tumors.</li>
        <li>Integrated a lightweight Tkinter GUI + CSV export pipeline enabling reproducible experiments and non-expert usability.</li>
      </ul>
    `,
    tech: ["Denoising Diffusion Probabilistic Models (DDPM)", "Classifier-Guided Sampling", "ResNet Architecture", "SSIM", "Medical Image Processing"],
    github: "https://github.com/nikhita-bonu/Generative_AI/tree/main/Diffusion_Models_for_Anomaly_Detection",
    demo: null,
    featured: true,
    status: "Research"
  }
]

const categories = ['all', 'genai', 'machine-learning', 'deep-learning', 'nlp']

const categoryLabels = {
  all: 'All',
  genai: 'GenAI',
  'machine-learning': 'Machine Learning',
  'deep-learning': 'Deep Learning',
  nlp: 'NLP'
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedId, setExpandedId] = useState(null)

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          My <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Machine Learning projects across Generative Modeling, Medical Imaging, NLP, and Predictive Analytics — combining research experimentation with deployable AI systems.
        </p>
      </motion.div>

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap gap-2 justify-center mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full transition-all ${
              filter === cat
                ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white'
                : 'bg-slate-900 text-slate-400 hover:text-slate-300 hover:bg-slate-800'
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {projects.filter(project => filter === 'all' || project.tags.includes(filter)).map((project, index) => {
          const content = project.longDescription || project.description
          const isExpandable = project.longDescription && project.longDescription !== project.description

          return (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-blue-400/50 transition-all hover:scale-[1.02] flex flex-col h-full"
          >
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>

              {project.id !== 1 && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {categoryLabels[tag] || (tag.charAt(0).toUpperCase() + tag.slice(1))}
                    </span>
                  ))}
                </div>
              )}
              
              {project.id === expandedId ? (
                <p className="text-slate-400 mb-4">{content}</p>
              ) : (
                <p className="text-slate-400 mb-4 line-clamp-3">{content}</p>
              )}

              {/* Read more / Show less inline toggle */}
              {isExpandable && (
                <div className="mb-4">
                  {project.id === expandedId ? (
                    <button onClick={() => setExpandedId(null)} className="text-sm text-slate-300 hover:text-blue-400">Show less</button>
                  ) : (
                    <button onClick={() => setExpandedId(project.id)} className="text-sm text-blue-400">Read more</button>
                  )}
                </div>
              )}

              {/* Tech / Category chips: project 1 uses fixed labels; any project with a category shows category segments; otherwise show tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.id === 1 ? (
                  ['Deep Learning', 'Computer Vision', 'Medical AI', 'Biometric Analysis'].map((label) => (
                    <span key={label} className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-300">
                      {label}
                    </span>
                  ))
                ) : project.category ? (
                  project.category.split(/·|•/).map((seg) => (
                    <span key={seg.trim()} className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-300">
                      {seg.trim()}
                    </span>
                  ))
                ) : (
                  project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))
                )}
              </div>

              {/* Links */}
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-800">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  View Details →
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  View Code
                </a>
              </div>
             </div>
           </motion.div>
           )
         })}
       </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-sm text-slate-400 mb-1">{selectedProject.category}</p>
                  <h3 className="text-2xl font-bold text-slate-50">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="h-8 w-8 rounded-full border border-slate-700 text-sm text-slate-400 hover:border-slate-500 hover:bg-slate-800 hover:text-slate-100"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-2">Description</h4>
                  {selectedProject.longDescriptionHtml ? (
                    <div className="text-slate-300" dangerouslySetInnerHTML={{ __html: selectedProject.longDescriptionHtml }} />
                  ) : (
                    <p className="text-slate-300">{selectedProject.longDescription}</p>
                  )}
                </div>

                {/* Technologies section (shown for all projects) */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center rounded-lg bg-slate-800 px-4 py-3 text-slate-300 hover:bg-slate-700 transition-colors"
                  >
                    View on GitHub
                  </a>
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-3 text-white hover:opacity-90 transition-opacity"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}