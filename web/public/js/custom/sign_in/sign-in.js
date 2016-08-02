define(['require', 'exports', 'module', 'jquery', 'validation', 'validation-translations'],
    function (require, exports, module, $, validation, validationTranslations) {
        "use strict"

        var SignInManager = (function () {

            function SignInManager() {
                this.$form = $('#sign-in-form');

                this.CacheElements();
                this.BindEvents();
                this.BindValidation();
            }

            SignInManager.prototype.CacheElements = function () {
                this.$emailInput = this.$form.find('#email');
                this.$passwordInput = this.$form.find('#password');
            };

            SignInManager.prototype.BindEvents = function () {

            };

            SignInManager.prototype.BindValidation = function () {
                this.$form.validateWith({
                    errorElement: 'label',
                    errorPlacement: function(error, element){
                        error.insertBefore(element);
                        error.addClass('not-valid');
                    },
                    translation: 'ua'
                })
            };

            return SignInManager;
        })();

        exports.SignInManager = SignInManager;
    });
