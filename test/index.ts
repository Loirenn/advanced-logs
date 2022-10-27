import '../src';

console.setConfig({
    background: true,
    timestamp: true
});

let getConfig = console.getConfig();
console.log(getConfig);

console.success('Success func');
console.error('Error func');
console.info('Info func');
console.warn('Warn func');
console.debug('Debug func');
console.info('Custom', 'CUSTOM');