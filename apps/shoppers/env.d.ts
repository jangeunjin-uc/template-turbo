/// <reference types="vite/client" />

export interface ImportMetaEnv {
  readonly VITE_Firebase_API_KEY: string;
  readonly VITE_Firebase_AUTH_DOMAIN: string;
  readonly VITE_Firebase_DATABASE_URL: string;
  readonly VITE_Firebase_PROJECT_ID: string;
  readonly VITE_Firebase_STORAGE_BUCKET: string;
  readonly VITE_Firebase_MESSAGING_SENDER_ID: string;
  readonly VITE_Firebase_ID: string;
  readonly VITE_Firebase_Clinet_ID: string;
  readonly VITE_Firebase_Client_PSWD: string;
}
export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
