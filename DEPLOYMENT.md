# デプロイメント設定

このプロジェクトはCloudflare Workersにデプロイされます。

## 必要なGitHub Secrets

以下のシークレットをGitHubリポジトリに設定する必要があります：

### 1. CLOUDFLARE_API_TOKEN
Cloudflare APIトークンを作成します：
1. [Cloudflareダッシュボード](https://dash.cloudflare.com/profile/api-tokens)にアクセス
2. "Create Token"をクリック
3. "Custom token"を選択
4. 以下の権限を設定：
   - Account: Workers Scripts:Edit
   - Account: Workers KV Storage:Edit (必要に応じて)
5. トークンを作成してGitHub Secretsに保存

### 2. CLOUDFLARE_ACCOUNT_ID
1. [Cloudflareダッシュボード](https://dash.cloudflare.com/)にアクセス
2. 右サイドバーからAccount IDをコピー
3. GitHub Secretsに保存

### 3. CLOUDFLARE_ACCOUNT_SUBDOMAIN
1. Cloudflare Workersのサブドメインを確認（例: your-subdomain）
2. GitHub Secretsに保存

## デプロイフロー

### 本番デプロイ
- `main`ブランチへのpush時に自動デプロイ
- 手動でのワークフロー実行も可能
- デプロイ後、自動的にリリースタグが作成されます
- URL: `https://gdsopen-website.{your-subdomain}.workers.dev`

### プレビューデプロイ
- PRを作成すると自動的にプレビュー環境が作成されます
- プレビューURL: `https://gdsopen-website-preview.{your-subdomain}.workers.dev`
- PRにプレビューURLがコメントで通知されます

## Cloudflare Workers設定

Worker名: 
- 本番: `gdsopen-website`
- プレビュー: `gdsopen-website-preview`

ビルド設定：
- ビルドコマンド: `pnpm run build:workers`
- ビルド出力ディレクトリ: `dist`
- Functionsディレクトリ: `functions`