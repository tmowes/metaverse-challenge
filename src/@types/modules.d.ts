type CustomEnvVar = 'NEXT_PUBLIC_APP_ID' | 'NEXT_PUBLIC_SERVER_URL'

type ProcessEnvExtended = {
  [key in CustomEnvVar]: string
}

declare namespace NodeJS {
  export interface ProcessEnv extends ProcessEnvExtended {}
}
