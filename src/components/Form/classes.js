// @flow

import type { EncodedImage } from '../../types/general';

/*
  The properties "fileName" and "filePath" appear both in ImageForUpload and
  in EncodedImage.
  This is done to semplify the mapping from the object received from the
  backend to an instance of ImageForUpload, which is used as a value for
  the Image field in the Form component.
*/
export class ImageForUpload { // eslint-disable-line import/prefer-default-export
  constructor(
    encodedImage: EncodedImage,
    fileObject: ?File,
  ) {
    this.encodedImage = encodedImage;
    this.fileName = this.encodedImage.fileName;
    this.filePath = this.encodedImage.filePath;
    this.fileObject = fileObject;
  }

  setFileName = (fileName: string): void => {
    this.fileName = fileName;
    this.encodedImage.fileName = fileName;
  };

  setFilePath = (filePath: string): void => {
    this.filePath = filePath;
    this.encodedImage.filePath = filePath;
  };

  encodedImage: EncodedImage;
  fileObject: ?File;
  fileName: ?string;
  filePath: ?string;
}
