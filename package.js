Package.describe({
  summary: "Plugin for flashing messages in the browser title bar."
});

Package.on_use(function (api) {
  api.add_files('jquery-titlealert.js', 'client');
});
