Package.describe({
  summary: "constructive solid geometry on meshes using BSP trees in Javascript"
});

Package.on_use(function (api) {
  var both = ['client', 'server']
  api.add_files('lib/csg.js/csg.js', both);
  api.export && api.export('CSG', both);
});
