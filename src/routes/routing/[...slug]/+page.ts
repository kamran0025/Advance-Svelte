import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
  return {
    rest: params.slug.split('/')
  };
}
