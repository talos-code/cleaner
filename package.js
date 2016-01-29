Package.describe({
  name: 'talos:cleaner',
  version: '1.0.0',
  summary: 'Gives you methods to clear your Mongo database and collections for testing purposes'
});

Package.onUse(function(api) {
  api.addFiles([
    'cleaner.js'
  ], 'server');
  api.export('resetDatabase', 'server');
});
