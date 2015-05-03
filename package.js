Package.describe({
  name: 'danimal:svgexport',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Npm package svgexport for Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dan335/meteor-svgexport',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('svgexport.js');
  api.export('Svgexport', 'server');
});

Npm.depends({
    svgexport: '0.2.4'
});
