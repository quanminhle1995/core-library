export interface IAxiosService {
  get: () => void
}

export const AxiosService = (accessToken: string): IAxiosService => {

  const get = () => {
    console.log(accessToken);
  }

  return {
    get
  }
}
