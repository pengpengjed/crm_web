declare interface ImportMetaEnv {
  readonly VITE_BASE_API: string;
  readonly VITE_WXCOM_APPID: string;
  readonly VITE_WXCOM_AGENTID: string;
  readonly VITE_WECHAT_APPID: string;
  readonly VITE_WXCOM_REDIRECT_URL: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
