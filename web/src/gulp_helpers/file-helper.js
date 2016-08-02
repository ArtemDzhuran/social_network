var FileHelper = (function () {

    function FileHelper() {

    }

    FileHelper.addFile = function(folder, fileName, fileExtension){
        return folder + '/' + fileName + '.' + fileExtension;
    };

    FileHelper.addExtension = function(fileName, fileExtension){
        return fileName + '.' + fileExtension;
    };

    FileHelper.addSubDirectories = function(folder){
        return folder + '/**'
    };

    FileHelper.addFiles = function(folder, fileExtension){
        return folder + '/*.' + fileExtension;
    };

    FileHelper.addDirectory = function(parentFolder, folder){
        return parentFolder + '/' + folder;
    };

    FileHelper.excludeDirectory = function(parentFolder, excludedFolder){
         return '!' + parentFolder + '/' + excludedFolder;
    };

    FileHelper.excludeSubDirectories = function(folder){
        return '!' + folder + '/**';
    };

    FileHelper.excludeFile = function(parentFolder, excludedFile){
        return '!' + parentFolder + '/' + excludedFile;
    };

    return FileHelper;
})();

module.exports = FileHelper;