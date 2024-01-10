import { ActionArgs, json } from '@remix-run/node';
import { prisma } from "~/db.server"; // Prismaクライアントのインポート
import { promises as fs } from 'fs';
import path from 'path';
// import { updateUserIcon } from "~/models/user.server";
import { useOptionalUser } from '~/utils';
import { Form, useActionData } from "@remix-run/react";
// import { ActionFunctionArgs } from '@remix-run/node';

// アップロードされたファイルを保存するディレクトリ
const uploadDir = path.join(__dirname, '..', 'public', 'images/userIcon');

export const action = async ({ request }: ActionArgs) => {
  // リクエストからフォームデータを取得
  let formData = await request.formData();
  let file = formData.get('image'); // 'image' は input の name 属性

  // ファイルが存在し、Fileインスタンスであることを確認
  if (!(file && file instanceof File)) {
    throw new Error("The form didn't include a file.");
  }

  // ファイルの保存先のパスを設定
  let filePath = path.join(uploadDir, file.name);

  // ファイルをサーバーに保存
  let fileData = new Uint8Array(await file.arrayBuffer());
  await fs.writeFile(filePath, fileData);

  // 保存したファイルのURLを生成
  let url = `/userIcon/${file.name}`;

  // URLをデータベースに保存
//   await prisma.image.create({
//     data: {
//       url: url
//     }
//   });

  return json({ url: url });
};

export default function UploadIcon() {
    const user = useOptionalUser();
    return(
        <Form method="post" encType="multipart/form-data">
            {/* <input type="hidden" value={user.id} />  */}
            <input type="file" name="image" />
            <button type="submit">Upload</button>
        </Form>
    );
}