import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getUserByEmail } from "~/models/user.server";

export const action: LoaderArgs = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return json({
      hometown: existingUser.hometown,
    });
  } else {
    return json(
      {
        errors: {
          email: "A user does not exist with this email",
        },
      },
      { status: 404 },
    );
  }
};
