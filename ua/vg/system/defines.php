<?php

//Почта администратора, кому будут приходить письма
define("_ADMIN_EMAIL_", "iryna.lapina@outlook.com");

/*
 * Настройки почты по умолчанию
 */
define('_MAIL_TYPE_', 'SMTP');
define('_SMTP_HOST_', 'smtp.office365.com');
define('_SMTP_LOGIN_', 'iryna.lapina@outlook.com'); // email с которого будут отправлятся письма
define('_SMTP_PASSWORD_', 'mi609290'); // пароль от почты с которой будут отправлятся письма
define('_SMTP_SECURE_', 'STARTTLS'); // tls
define('_SMTP_PORT_', 587);

/*
 * Настрйоки ReCaptha
 */
define('_RECAPTCHA_', true); // Если включить CAPTCHA то true, если отключить то false
define('_PRIVATE_KEY_', '6LcGIKwaAAAAADUV376c3xQKGKxWug7ZMUJKUUYs'); //секретный ключ
define('_RESPONCE_NAME_', 'g-recaptcha-response');


