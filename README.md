# バームクーヘンプロジェクト

## 最初に起動するまでの準備
1. リポジトリをcloneする。
2. チームメンバーから `.env` ファイルを受け取り、cloneして取得したプロジェクトの直下に配置する。
3. 以降のコマンドを実行するためにカレントディレクトリを、リポジトリをcloneして作成されたディレクトリに変更する(`cd` コマンドを使う等で変更する)。
4. `npm install` を実行する。
5. `npx prisma migrate dev --name "create post model"` を実行する。
6. `npx prisma db seed` を実行する。

## 起動方法
`npm run dev` を実行し、`http://localhost:3000` をブラウザで表示する

## 追加ファイル　

- app/routes/test_index.jsx :
  ゲームの入口、ゲーム登録の入口へのリンクがあります。　
- app/routes/test.game._index :
  ゲームの各ページへのリンク
- app/routes/test.game.cardPage :
  カードを表示する画面
- app/routes/test.game.Answer :
  回答画面 になる予定でしたが、quiz.tsxを作ってくれたので、そっちにリンクしてあります。のでこのファイルは使ってません。　　　　　
- app/routes/test.register._index :
  ゲームの登録に関するページへのリンク
- app/routes/test.register.postNew　:
  ゲームを新規登録する。名前newPostにすればよかった
- app/routes/test.register.forum :
  新規登録されたゲームを表示する画面　　　　


