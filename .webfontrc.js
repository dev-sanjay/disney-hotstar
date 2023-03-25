module.exports = {
  files: 'src/designs/iconography/**/*.svg',
  fontName: 'icon',
  formats: ['ttf', 'woff', 'woff2'],
  templateFontName: 'icon',
  templateFontPath: './fonts',
  template: 'css',
  destTemplate: './src/styles',
  dest: './src/styles/fonts',
  verbose: true,
};
