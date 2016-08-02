var FileHelper = require('./file-helper');

var CleanHelper = (function () {
    var defaultOptions = {
        directory: 'public/css',
        includeSubDirectories: true,
        excludedSubDirectories: []
    };

    function CleanHelper(options) {
        this.options = Object.create(defaultOptions);
        this.bindOptions(options);
    }

    CleanHelper.prototype.bindOptions = function (options) {
        if(options) {
            for (var option in defaultOptions) {
                this.options[option] = options[option] || defaultOptions[option];
            }
        }
    };

    CleanHelper.prototype.getDirectoriesToRemove = function () {
        if (this.options.includeSubDirectories) {
            return FileHelper.addSubDirectories(this.options.directory);
        }

        var directories = [FileHelper.addFiles(this.options.directory, '*')];


        return directories;
    };

    CleanHelper.prototype.getExcludedDirectories = function () {
        var self = this;

        var excludedDirectories = self.options.excludedSubDirectories.map(function (directory) {
            return FileHelper.excludeDirectory(self.options.directory, directory);
        });

        return excludedDirectories;
    };

    CleanHelper.prototype.buildSources = function () {
        return this.getDirectoriesToRemove().concat(this.getExcludedDirectories());
    };

    return CleanHelper;
})();

module.exports = CleanHelper;
