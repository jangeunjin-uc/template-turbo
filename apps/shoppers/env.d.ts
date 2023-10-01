/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly Firebase_API_KEY: string;
  readonly Firebase_AUTH_DOMAIN: string;
  readonly Firebase_DATABASE_URL: string;
  readonly Firebase_PROJECT_ID: string;
  readonly Firebase_STORAGE_BUCKET: string;
  readonly Firebase_MESSAGING_SENDER_ID: string;
  readonly Firebase_ID: string;
  readonly Firebase_MEASUREMENT_ID: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
