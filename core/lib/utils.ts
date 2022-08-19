export interface Secret {
  name: string;
  value: string;
}

export function createPayload(secrets: Secret[]) {
  return JSON.stringify({
    secrets: secrets,
    timestamp: Date.now(),
    version: 1,
  });
}

export function buildURLSafeBase64(base64: string) {
  return base64.replace(/\+/g, "-").replace(/\//g, "_");
}
