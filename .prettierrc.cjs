module.exports = {
  ...require('@raccord/prettier-config-as'),
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
    {
      files: '*.css',
      options: {
        parser: 'css',
      },
    },
  ],
}; 
