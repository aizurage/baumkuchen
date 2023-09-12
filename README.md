# バームクーヘンプロジェクト

## 最初に起動するまでの準備
1. リポジトリをcloneする。
2. チームメンバーから `.env` ファイルを受け取り、cloneして取得したプロジェクトの直下に配置する。
3. 以降のコマンドを実行するためにカレントディレクトリを、リポジトリをcloneして作成されたディレクトリに変更する(`cd` コマンドを使う等で変更する)。
4. `npm init` を実行する。
5. `npx prisma migrate dev --name "create post model"` を実行する。
6. `npx prisma db seed` を実行する。

## 起動方法
`npm run dev` を実行し、`http://localhost:3000` をブラウザで表示する

## 追加ファイル　

- app/routes/test_index.jsx  　　
- app/routes/test.second_index.jsx　　　　　　
- app/routes/test.second.third.jsx　　　　　　

・３つあるのでゲーム画面（上からカード表示画面->回答画面->リザルト表示に使おうと思います
