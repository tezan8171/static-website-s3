# Scalable Static Website with S3 + Cloudflare + GitHub Actions

## 📌 Objective

Host and auto-deploy a static website using:

- **AWS S3** (Free tier)
- **Cloudflare** (Free CDN + SSL)
- **GitHub Actions** (CI/CD)

## 🚀 How It Works

1. Push code → GitHub
2. GitHub Actions → Sync files to S3 bucket
3. Cloudflare → Custom domain + HTTPS + Caching
4. Live site → Always up-to-date
