var FileHelper = require('./file-helper');

var CompileStylesHelper = (function () {
    var defaultOptions = {
        sass: {
            directory: 'src/styles/sass',
            includeSubDirectories: true,
            fileExtensions: ['sass', 'scss'],
            excludeDirectories: [],
            excludeFiles: []
        }
    };

    function CompileStylesHelper(options) {
        this.options = Object.create(defaultOptions);
        this.bindOptions(options);
    }

    CompileStylesHelper.prototype.bindOptions = function (options) {
        if (options && options.sass) {
            for (var option in defaultOptions.sass) {
                this.options.sass[option] = options.sass[option] || defaultOptions.sass[option];
            }
        }
    };

    CompileStylesHelper.prototype.getCompiledFiles = function (preprocessor) {
        var options = this.options[preprocessor];

        var compiledFiles = options.fileExtensions.length > 0
            ? options.fileExtensions.map(function (fileExtension) {
            return FileHelper.addFile(options.directory, "*", fileExtension);
        })
            : [options.directory];

        if (options.includeSubDirectories) {
            compiledFiles = options.fileExtensions.length > 0
                ? compiledFiles.concat(
                options.fileExtensions.map(function (fileExtension) {
                    var subDirectories = FileHelper.addSubDirectories(options.directory);
                    return FileHelper.addFile(subDirectories, "*", fileExtension);
                }))
                : compiledFiles.concat([FileHelper.addSubDirectories(options.directory)]);
        }

        return compiledFiles;
    };

    CompileStylesHelper.prototype.getExcludedFiles = function (preprocessor) {
        var options = this.options[preprocessor];

        var excludedDirectories = options.excludeDirectories.map(function (directory) {
            return FileHelper.excludeDirectory(options.directory, directory);
        });

        var excludedFiles = excludedDirectories.concat(options.excludeDirectories.map(function (excludedDirectory) {
            var directoryPath = FileHelper.addDirectory(options.directory, excludedDirectory);
            return FileHelper.excludeSubDirectories(directoryPath);
        }));

        options.excludeFiles.forEach(function (file) {
            excludedFiles.push(FileHelper.excludeFile(options.directory, file));
        });

        return excludedFiles;
    };

    CompileStylesHelper.prototype.buildSources = function (preprocessor) {
        return this.getCompiledFiles(preprocessor).concat(this.getExcludedFiles(preprocessor));
    };

    return CompileStylesHelper;

})();

module.exports = CompileStylesHelper;