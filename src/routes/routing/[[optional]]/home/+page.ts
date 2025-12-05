import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const lang = params.optional

  return {
    lang,
  };
};
