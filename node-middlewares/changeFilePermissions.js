const fs = require('fs');
export async function changeFilePermissions(path){
    try{
        //0o666 - read and write permissions to owner, users and others
        await fs.promises.chmod(path,'0o666');
        return true;
    }
    catch(error){
        console.error(`Error changing file permissions: ${error.message}`);
        return false;
    }
}