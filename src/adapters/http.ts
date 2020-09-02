const buildUrl = (entity: string, id?: number) =>
  `${window.origin}/api/${entity}/${id || ''}`;

export default async (
  entity: RequestEntity,
  method: RequestMethod,
  payload?: { [key: string]: any },
  id?: number,
) => {
  const url = buildUrl(entity, id);

  const config: RequestConfig = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (payload) {
    config.body = JSON.stringify(payload);
  }

  const response = await fetch(url, config);

  if (!response.ok) {
    const responseBody = await response.json();
    throw new Error(`${responseBody.status}: ${responseBody.message}`);
  }

  const contentType = response.headers.get('Content-Type') || '';
  if (contentType.includes('application/json')) {
    return await response.json();
  }

  return;
};
