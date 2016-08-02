<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Social | Login</title>
    <link rel="stylesheet" href="{{asset('css/social.css')}}">
    <link rel="stylesheet" href="{{asset('css/themes/social-default-theme.css')}}">
    <link rel="stylesheet" href="{{asset('css/customization/sign_in_sign_up/sign-in.css')}}">
</head>
<body>
<div class="container">
    <form id="sign-in-form" action="">
        <fieldset>
            <legend>
                CNU Social
            </legend>

            <input id="email" type="email" class="input" placeholder="Email" required>
            <input id="password" type="password" class="input" placeholder="Password" required>

            <button class="btn btn-primary btn-block">Увійти</button>

            <p class="alternative-message">
                Ще не з нами?
                <span>
                    <a href="{{URL::to('auth/register')}}"> Приеднуйся до Social</a>
                </span>
            </p>

        </fieldset>
    </form>

    <script data-main="{{asset('js/custom/sign_in/bootstrap')}}" src="{{asset('js/libs/require.js')}}"></script>
</div>
</body>
</html>
