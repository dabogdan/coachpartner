<?php
// Подключим composer, defines
require_once __DIR__ .'/../../../../../system/defines.php';
require_once __DIR__ .'/../../../../../system/vendor/autoload.php';

// e-mail кому отправить
$emailto = _ADMIN_EMAIL_;

// Получим данные
$data = $_POST;

// Если включена капча, то проверяем капчу
if(_RECAPTCHA_){
    if(!\core\ReCaptcha::instance()->checkRecaptcha()){
        echo json_encode(['error' => 1, 'data' => 'Помилка капчі']);
        exit();
    }
}

// Проверим поле на пустоту
if(empty($data['email'])){
    echo json_encode(['error' => 1, 'data' => 'Введіть email']);
    exit();
}

//Сохраним файл
$attachments=[];
$uploaddir =  __DIR__.'/../../../../../temp/';
if (!file_exists($uploaddir)) {
    mkdir($uploaddir, 0777, true);
}
if(!empty($_FILES['file']['tmp_name'])){
    $uploadfile = $uploaddir . basename($_FILES['file']['name']);
    if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile)) {
        // echo "Файл корректен и был успешно загружен.\n";
    } else {
        echo json_encode(['error' => 1, 'data' => 'Можлива атака за Допомогою файлового завантаження!']);
        exit();
    }
    $attachments[]=$uploadfile;
}

$message = "<p>Нове повідомлення з форми зворотнього зв'язку.</p>";

// Прикрепим все данные из формы
$message .= \modules\mail\services\sMail::instance()->getBlockBuffer($data);

$message2 = "<h1> Вітаю!</h1>
            <p> Дякую за Вашу заявку на моєму сайті.</p>
            <p>Я зконтактую з Вами в найближчий час.</p>
            <p>З повагою,</p>
            <p>Ірина Лапіна</p>";


\core\PHPMail::instance()->sendSMTPMail($emailto, 'Нове повідомлення з сайту '.$_SERVER['HTTP_HOST'], $message, $attachments);

\core\PHPMail::instance()->sendSMTPMail($data['email'], 'Ваша заявка', $message2, $attachments);

echo json_encode(['error' => 0, 'data' => 'Повідомлення успішно відправлено']);
exit();