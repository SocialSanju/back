import AWS from "aws-sdk";
import fs from 'fs';
const s3 = new AWS.S3({
    accessKeyId: 'AKIAV4F7GLMEUDNR2NW2',
    secretAccessKey: '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'
});

const uploadFile = (file, path, fileName) => {
    const fileContent = fs.readFileSync(file.path);

    const params = {
        Bucket: 'sanjusk.com',
        Key: 'uploads/' + path + '/' + fileName,
        Body: fileContent,
        ContentType: "image/jpeg"
    }
    s3.upload(params, (err, data) => {
        if (err) {
            throw err
        }
    })
}
const uploadFileWithReturnPath = (file, path, fileName) => {
    return new Promise((resolve,reject) => {
        const fileContent = fs.readFileSync(file.path);

        const params = {
            Bucket: 'sanjusk.com',
            Key: 'uploads/' + path + '/' + fileName,
            Body: fileContent,
            ContentType: "image/jpeg"
        }
        s3.upload(params, (err, data) => {
                if (err) {
                    return reject(new Error(err))
                }
                return resolve(data);
            }).on('error',(err)=>{
                return reject(new Error(err))
             })
            
               
    }); 
}


// const uploadVideoFile = (file, path, fileName) => {
//     const fileContent = fs.readFileSync('uploads/' + path + '/' + fileName);

//     const params = {
//         Bucket: 'sanjusk.com',
//         Key: 'uploads/' + path + '/' + fileName,
//         Body: fileContent,
//         ContentType: "video/mp4"
//     }
//     s3.upload(params, (err, data) => {
//         if (err) {
//             throw err
//         }else{
//             console.log(data,"$$$$$$$$$$$");
//             return data;
//         }
//     })
// }


export default uploadFile;
