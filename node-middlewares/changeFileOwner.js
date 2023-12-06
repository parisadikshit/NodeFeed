const fs = require('fs');
export async function changeFileOwner(path,uid,gid){
    try{
        await fs.promises.chown(path,uid,gid);
        return true;
    }
    catch(error){
        console.error(`Error changing file owner: ${error.message}`);
        return false;
    }
}