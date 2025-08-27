REPORT

---

Project Name:
Scalable Static Website with S3 + Cloudflare + GitHub Actions

---

1. Introduction
   In today's digital landscape, fast-loading, globally accessible websites are essential for businesses. This project demonstrates how to host a static website on AWS S3 with automatic deployment via GitHub Actions and global delivery using Cloudflare. The goal was to create a scalable, secure, and professional static website with minimal manual intervention.

---

2. Abstract
   This project focuses on building a fully automated pipeline for deploying static websites. By combining AWS S3 (for storage and hosting), GitHub Actions (for CI/CD), and Cloudflare (for DNS, HTTPS, and caching), the website achieves high availability, SSL encryption, and efficient global delivery. Any changes pushed to GitHub are automatically reflected on the live website, reducing manual deployment effort.

---

3. Tools Used
   • AWS S3 (Free Tier) – Static website hosting
   • GitHub Actions – CI/CD for automated deployment
   • Cloudflare – Domain management, HTTPS, and CDN caching
   • HTML/CSS – Frontend design
   • Bash – Optional scripting for automation

---

4. Steps Involved in Building the Project
1. Website Development
   o Designed responsive HTML pages with CSS
   o Verified locally before deployment
1. GitHub Repository Setup
   o Initialized GitHub repo and pushed website files
   o Configured repository for continuous deployment
1. CI/CD with GitHub Actions
   o Created .github/workflows/deploy.yml workflow to sync files to S3 on commits
   o Secured AWS credentials using GitHub Secrets
1. AWS S3 Configuration
   o Enabled Static Website Hosting for the bucket
   o Set public access permissions
   o Enabled versioning for file history
1. Domain Integration via Cloudflare
   o Pointed globalascend.online to the S3 bucket using DNS records
   o Enabled SSL for HTTPS
   o Configured caching rules for fast content delivery
1. Testing & Verification
   o Verified website functionality on multiple devices
   o Tested automated deployment by pushing changes to GitHub

---

5. Conclusion
   The project successfully demonstrates a scalable, automated static website deployment pipeline. Leveraging free-tier tools ensures security, speed, and global accessibility. CI/CD with GitHub Actions eliminates manual deployment errors, while Cloudflare provides optimal performance and SSL protection. This setup is replicable for future projects, offering a robust and professional web hosting solution.
