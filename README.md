# 使い方

-https://remix.run/docs/en/main/tutorials/blogを
  ```sh
  npx create-remix@latest --template remix-run/indie-stack blog-tutorial
  ? Do you want me to run `npm install`? Yes
  ```
 のところまでやる

-pullしてエラーが出たら以下
  ```sh
  git fetch origin
　git reset --hard FETCH_HEAD
  ```
 を実行してからpull

-blog-tutorialのディレクトリで以下のコマンドを実行（順番に）
  ```sh
  npx prisma migrate dev --name "create post model"
  npx prisma db seed

  npm add marked@^4.3.0
  npm add @types/marked@^4.3.1 -D

  npm run dev
  ```

それからhttp://localhost:3000を開けばみれる（はず）
