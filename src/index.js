export function configure(config) {
  config.globalizeResources(
    './dialog',
    './dialog-header',
    './dialog-body',
    './dialog-footer',
    './attach-focus',
    './examples/prompt'
  );
}
export * from './dialog-service';
export * from './dialog-controller';
export * from './examples/prompt';
