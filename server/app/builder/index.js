// @flow

export interface BundleInterface {
  construct(): void;
}

class Builder {
  _bundles: BundleInterface[] = [];
  _app: Object; // TODO change with flow-typed

  registerApp(instance: Object): void {
    this._app = instance;
  };

  registerBundle(bundle: BundleInterface): void {
    this._bundles.push(bundle);
  }

  build(): void {
    this._bundles.forEach((bundle: BundleInterface) => {
      bundle.construct(this._app);
    })
  }
}

export default new Builder();
