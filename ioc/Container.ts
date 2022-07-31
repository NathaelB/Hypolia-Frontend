
export default class IocContainer {

  private services: Map<Symbol, any> = new Map()

  public static services = {
    HTTP: Symbol('http'),
  }

  private static $instance: IocContainer

  public static init () {
    this.$instance = new IocContainer()
  }

  public static bind<T> (namespace: Symbol, service: T) {
    IocContainer.$instance.services.set(namespace, service)
  }

  public static singleton<T> (namespace: Symbol): T {
    return IocContainer.$instance.services.get(namespace)
  }
}