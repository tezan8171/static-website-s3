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

---

## 🛠️ Prerequisites

Before starting, make sure you have the following:

- **AWS Account** → to create and manage the S3 bucket.
- **Cloudflare Account** → for domain + SSL + caching.
- **GitHub Account** → to host repository and setup CI/CD.
- **Domain Name** → (Purchased from Hostinger, using Cloudflare).
- **Basic Tools Installed**:
  - Git
  - VS Code
  - AWS CLI (configured with `aws configure`)

---

---

## ⚙️ Setup Guide

Follow these steps to deploy the project:

### 1. Create an S3 Bucket

- Go to AWS S3 console.
- Create a bucket with your domain name (e.g., `globalascend.online`).
- Enable **Static Website Hosting** in bucket properties.
- Set index document → `index.html`.
- Update **bucket policy** for public read access.

### 2. Configure GitHub Actions (CI/CD)

- In your GitHub repo, add `.github/workflows/deploy.yml`.
- This workflow:
  - Builds and uploads files to S3 when you push to `main` branch.
  - Uses AWS credentials stored in GitHub **Secrets**.
- Secrets required:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `AWS_REGION`
  - `S3_BUCKET`

### 3. Connect Cloudflare with Domain

- Add your domain to Cloudflare (`globalascend.online`).
- Update **nameservers** in Hostinger → point to Cloudflare.
- In Cloudflare:
  - Create a DNS record (CNAME / A) pointing domain to S3 website endpoint.
  - Enable **SSL/TLS** → Flexible or Full (recommended).
  - Add a **Page Rule / Redirect Rule** to forward `www.globalascend.online` → `https://globalascend.online`.

### 4. Enable Caching & Performance

- Go to Cloudflare Dashboard → **Caching → Rules**.
- Create rule:
  - **If URL Path = `*`**
  - **Cache Level = Cache Everything**
  - **Edge TTL =**

---

## 📦 Deliverables

1. **CI/CD Pipeline**

   - GitHub Actions workflow that automatically deploys to S3 when new code is pushed.

2. **Domain + CDN Integration**

   - Website hosted on S3 with Cloudflare providing HTTPS and global caching.

3. **Responsive Company Website**

   - Deployed responsive website for **T&T Global Ascend** with animations and services section.

4. **Caching & Performance**
   - Configured Cloudflare Cache Rules for faster delivery.

---

## 🔗 Live Demo

🌐 Website: [https://globalascend.online](https://globalascend.online)

✅ Hosted via **AWS S3 + Cloudflare + GitHub Actions**.  
✅ SSL Enabled (HTTPS).  
✅ Automatic Deployment on `git push`.

---

## 📸 Screenshots

(Add screenshots of your homepage, GitHub Actions workflow success, and Cloudflare settings here for documentation.)
