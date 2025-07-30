interface RequestContext {
  env: {
    ASSETS: {
      fetch: (request: Request) => Promise<Response>;
    };
  };
  request: Request;
}

export async function onRequest(context: RequestContext) {
  // SPAのためのフォールバック処理
  try {
    return await context.env.ASSETS.fetch(context.request);
  } catch (_e) {
    // 404の場合はindex.htmlを返す
    const url = new URL(context.request.url);
    url.pathname = "/index.html";
    return context.env.ASSETS.fetch(new Request(url.toString(), context.request));
  }
}
