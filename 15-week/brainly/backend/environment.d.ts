
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DBURL: string,
      JWT_SECRET_KEY: string,
    }
  }
}
export { }
