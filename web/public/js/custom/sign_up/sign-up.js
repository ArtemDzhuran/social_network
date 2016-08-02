define(['require', 'exports', 'module', 'jquery', 'validation'],
    function (require, exports, module, $, validation) {
        "use strict"

        var SignUpManager = (function () {

            function SignUpManager() {
                this.$form = $('#sign-up-form');

                this.CacheElements();
                this.BindEvents();
                this.BindValidation();
            }

            SignUpManager.prototype.CacheElements = function () {
                this.$firstNameInput = this.$form.find('#first-name');
                this.$lastNameInput = this.$form.find('#last-name');

                this.$emailInput = this.$form.find('#email');
                this.$passwordInput = this.$form.find('#password');
                this.$confirmPasswordInput = this.$form.find('#confirm-password');
            };

            SignUpManager.prototype.BindEvents = function () {

            };

            SignUpManager.prototype.BindValidation = function () {
                this.$form.validateWith({
                    errorElement: 'span',
                    errorPlacement: function (error, element) {
                        error.insertAfter(element);
                        error.addClass('not-valid');
                    },
                    translation: 'ua'
                });
            };

            return SignUpManager;
        })();

        exports.SignUpManager = SignUpManager;
    });
