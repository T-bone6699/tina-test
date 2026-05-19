import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { HomepageQuery, HomepageQueryVariables } from "../../tina/__generated__/types";

interface Props {
  query: string;
  variables: HomepageQueryVariables;
  data: HomepageQuery;
}

export default function HomePage({ query, variables, data }: Props) {
  const { data: liveData } = useTina({ query, variables, data });
  const { heroText, image, body } = liveData.homepage;

  return (
    <div>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{heroText}</h1>
      {image && (
        <img
          src={image}
          alt=""
          style={{ maxWidth: "100%", borderRadius: "8px", marginBottom: "1.5rem" }}
        />
      )}
      <div style={{ lineHeight: 1.7, fontSize: "1.1rem" }}>
        <TinaMarkdown content={body} />
      </div>
    </div>
  );
}
