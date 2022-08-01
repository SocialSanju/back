import aws from 'aws-sdk';
import { v4 as uuid } from 'uuid';

const region = "ap-south-1"
const bucketName = "sanjusk.com"
const accessKeyId = "AKIAV4F7GLMEUI5V44AZ"
const secretAccessKey = "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"


const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})


export async function generateUploadURL() {
 
        const imageName = uuid();
        const params = {
          Bucket: bucketName,
          Key: imageName,
          Expires: 60,
        };
        const uploadURL = await s3.getSignedUrlPromise("putObject", params);
        return uploadURL;
      
}