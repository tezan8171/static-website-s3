# Scalable Static Website — S3 + Cloudflare + GitHub Actions

[![Deploy](https://github.com/tezan8171/static-website-s3/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/tezan8171/static-website-s3/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#license)

**Live:** https://globalascend.online  
**Org:** **T&T Global Ascend** — _Where Strategy Meets Elevation_  
**Contact:** theglobalscend@gmail.com • +91-8171469371

A production-style static site pipeline:

- Source on GitHub → CI/CD via GitHub Actions → Deploy to **AWS S3** (Static Website Hosting)
- Fronted by **Cloudflare** for global CDN, HTTPS, caching, redirects
- Zero-touch deploys on every `main` push

> This repository also contains the marketing landing page for T&T Global Ascend (responsive, animated, 3D-feel).

---

## Table of Contents

- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Repository Structure](#repository-structure)
- [AWS S3 Setup](#aws-s3-setup)
- [IAM & GitHub Secrets](#iam--github-secrets)
- [GitHub Actions (CI/CD)](#github-actions-cicd)
- [Cloudflare Setup](#cloudflare-setup)
- [Caching & Versioning](#caching--versioning)
- [Verify Deployment](#verify-deployment)
- [Screenshots](#screenshots)
- [Deployment Report](#deployment-report)
- [License](#license)

---

## 📐 Architecture

This project follows a **scalable static website deployment model**:

- **S3 (AWS Simple Storage Service):**  
  Stores the static files (HTML, CSS, JS, images).  
  Acts as the origin server.

- **GitHub Actions:**  
  Automates deployment.  
  Every commit → triggers workflow → uploads site to S3.

- **Cloudflare (CDN + SSL):**  
  Provides global content delivery, caching, and free HTTPS.  
  Handles custom domain (globalascend.online) + performance optimization.

---

### 🔗 Flow Diagram

```ascii
[ Developer ]
     |
     |  git push
     v
[ GitHub Repo ] --- (CI/CD via GitHub Actions) ---> [ AWS S3 Bucket ]
                                                          |
                                                          v
                                                [ Cloudflare CDN + SSL ]
                                                          |
                                                          v
                                                [ End Users Worldwide ]
```
