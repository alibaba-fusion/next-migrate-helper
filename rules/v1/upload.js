const helper = require('../../lib/helpers/index');

module.exports = [
  helper.replaceProp('Upload', 'fileList', 'value'),
  helper.replaceProp('Upload', 'defaultFileList', 'defaultValue'),
  helper.replaceProp('Upload', 'listType=text-image', 'listType=image'),
  helper.replaceProp('Upload', 'listType=picture-card', 'listType=card'),
  helper.deprecateComponent('Upload.CropUpload'),
  helper.replaceComponent('Upload.ImageUpload', 'Upload.Card' , {
    reason: '如果用到国际化 locale,  请把 locale.image 手动改为 locale.card'
  }),
  helper.removeProp('Upload.Card', 'listType=picture-card'),
];
