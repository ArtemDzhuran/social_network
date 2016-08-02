define(['require', 'exports', 'module', 'jquery', 'jquery-validate', 'validation-translations'],
    function (require, exports, module, jQuery, validation, validationTranslations) {
        "use strict";

        (function ($) {

            $.fn.validateWith = function (options) {
                this.options = $.fn.validateWith.bindOptions(options);
                $.fn.validateWith.applyTranslation(this.options.translation);

                this.validate(this.options);

                return this;
            };

            $.fn.validateWith.defaults = {
                submitHandler: function (form) {
                    form.submit();
                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                    error.insertAfter(element);
                    error.addClass('not-valid');
                },
                focusInvalid: true,
                translation: 'en'
            };

            $.fn.validateWith.bindOptions = function(options){
                return $.extend($.fn.validateWith.defaults, options);
            };

            $.fn.validateWith.applyTranslation = function(translation){
                $.extend($.validator.messages, $.fn.validateWith.messages[translation]);
            };

            //Translations for messages
            $.fn.validateWith.messages = {
                en: validationTranslations.en,
                ua: validationTranslations.ua,
                ru: validationTranslations.ru
            }

        }(jQuery));
    });
