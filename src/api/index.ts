import { BrandReply } from './types';

class Api {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  private static Fetch<
    Query extends {},
    Body extends {},
    Reply extends { status?: 'Success' | 'Failure' }
  >(path: string, options: RequestInit) {
    return async (query?: Query, body?: Body) => {
      console.log(query, body);

      try {
        const response = await fetch(path, options);
        const data = await response.json();

        return { status: 'Success', brands: data } as unknown as Reply;
      } catch (_) {
        return { status: 'Failure' } as Reply;
      }
    };
  }

  static getBrands(query: {}) {
    return Api.Fetch<{}, {}, BrandReply>('/jsons/brands.json', {})(query);
  }
}

export default Api;
