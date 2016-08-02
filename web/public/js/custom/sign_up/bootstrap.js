var scriptsFolder =  '../../',
    nodeModules =  scriptsFolder + 'node_modules/',
    core = scriptsFolder + 'core/';

requirejs.config({
    packages: [
        {
            name: 'jquery',
            location: nodeModules + 'jquery/dist',
            main: 'jquery'
        },
        {
            name: 'jquery-validate',
            location: nodeModules + 'jquery-validation/dist',
            main: 'jquery.validate'
        }
    ],
    paths: {
        //core
        'validation': core + 'validation/validate',
        'validation-translations': core + 'validation/validate-translations',
        'sign-in': 'sign-up'
    }
});

requirejs(['sign-up'], function(signUp){
    new signUp.SignUpManager();
});
