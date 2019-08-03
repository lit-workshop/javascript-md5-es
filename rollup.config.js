import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: './node_modules/blueimp-md5/js/md5.js',
    output: {
      file: './md5.js',
      format: 'es'
    },
    plugins: [
      commonjs()
    ]
  }
]