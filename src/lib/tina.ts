import { createClient } from "tinacms/dist/client";
import { queries } from "../../tina/__generated__/types.js";

const clientId = import.meta.env.TINA_PUBLIC_CLIENT_ID;
const url = clientId
  ? `https://content.tinajs.io/2.4/content/${clientId}/github/main`
  : "http://localhost:4001/graphql";
const token = import.meta.env.TINA_TOKEN || "local";

export const client = createClient({ url, token, queries });
