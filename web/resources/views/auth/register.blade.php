<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Social | Sign up</title>
    <link rel="stylesheet" href="{{asset('css/social.css')}}">
    <link rel="stylesheet" href="{{asset('css/themes/social-default-theme.css')}}">
    <link rel="stylesheet" href="{{asset('css/customization/sign_in_sign_up/sign-up.css')}}">
</head>
<body>
<div class="container">
    <div class="header text-center">
        <p>
        CNU Social
        </p>
        <p>
            Приєднуйся до нас. Стань частиною Social
        </p>
    </div>
    <form id="sign-up-form" action="">
        <fieldset>
            <label for="" class="label">Ім'я</label>
            <input id="first-name" type="text" class="input" required>

            <label for="" class="label">Прізвище</label>
            <input id="last-name" type="text" class="input" required>

            <label for="" class="label">Email</label>
            <input id="email" type="email" class="input" required>

            <label for="" class="label">Пароль</label>
            <input id="password" type="password" class="input" required minlength="6">

            <label for="" class="label">Підтвердження паролю</label>
            <input id="confirm-password" type="password" class="input" required minlength="6" equalto="#password">

            <button class="btn btn-primary btn-block">Приєднатися</button>

            <div class="alternative-message">
                Вже в Social? <a href="{{URL::to('auth/login')}}">Увійти</a>
            </div>
        </fieldset>
    </form>

    <script data-main="{{asset('js/custom/sign_up/bootstrap')}}" src="{{asset('js/libs/require.js')}}"></script>
</div>
</body>
</html>
