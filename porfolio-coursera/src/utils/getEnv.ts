const Envs: Record<string, string> = {
  API_URL: import.meta.env.VITE_API_URL,
  VITE_EMAIL_JS_SERVICE_ID: import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
  VITE_EMAIL_JS_TEMPLATE_ID: import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
  VITE_EMAIL_JS_KEY: import.meta.env.VITE_EMAIL_JS_KEY,
};

export function getEnv(key: string) {
  return Envs[key];
}
