import AWS from "aws-sdk";
import fs from 'fs';
const s3 = new AWS.S3({
    accessKeyId: 'AKIAV4F7GLMEUI5V44AZ',
    secretAccessKey: '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'
});

const getFileStream = (fileKey) => {
    

    const downloadParams = {
        Bucket: 'sanjusk.com',
        Key: fileKey,
    }
   return s3.getObject(downloadParams).createReadStream()
}

export default getFileStream; 