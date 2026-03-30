# Cloudflare Pages 部署設定

## GitHub Secrets 設定

在 GitHub repo 設定中新增以下 secrets：

### 1. `CLOUDFLARE_API_TOKEN`
1. 前往 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 我的個人資料 → API Tokens
3. 建立自訂 Token
4. 權限設定：
   - **Account**: `Cloudflare Pages` → `Edit`
   - **Zone**: `Cloudflare Pages` → `Edit`
5. 建立後複製 token

### 2. `CLOUDFLARE_ACCOUNT_ID`
1. 登入 Cloudflare Dashboard
2. 右上角我的個人資料 → 概觀
3. 複製右側的 "Account ID"

## 設定位置
GitHub Repo → Settings → Secrets and variables → Actions → New repository secret

## 本地部署 (CLI)

```bash
# 登入
npx wrangler login

# 部署
npm run build
npx wrangler pages deploy out --project-name=featin-website
```

## 部署完成
成功後網站會在 `https://featin-website.pages.dev` 運行
