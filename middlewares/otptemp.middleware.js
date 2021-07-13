
// otp format 

module.exports = {

OtpFormat:async function (otp,curTime,from) {
   
    const format =`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <style>
    /*
    CONFIG STYLES
    Please do not delete and edit CSS styles below
    */
    /* IMPORTANT THIS STYLES MUST BE ON FINAL EMAIL */
    #outlook a {
    padding: 0;
    }

    .ExternalClass {
    width: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
    line-height: 100%;
    }

    .es-button {
    mso-style-priority: 100 !important;
    text-decoration: none !important;
    }

    a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    }

    .es-desk-hidden {
    display: none;
    float: left;
    overflow: hidden;
    width: 0;
    max-height: 0;
    line-height: 0;
    mso-hide: all;
    }

    [data-ogsb] .es-button {
    border-width: 0 !important;
    padding: 6px 25px 6px 25px !important;
    }

    /*
    END OF IMPORTANT
    */
    s {
    text-decoration: line-through;
    }

    html,
    body {
    width: 100%;
    font-family: arial, 'helvetica neue', helvetica, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    }

    table {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
    border-collapse: collapse;
    border-spacing: 0px;
    }

    table td,
    html,
    body,
    .es-wrapper {
    padding: 0;
    Margin: 0;
    }

    .es-content,
    .es-header,
    .es-footer {
    table-layout: fixed !important;
    width: 100%;
    }

    img {
    display: block;
    border: 0;
    outline: none;
    text-decoration: none;
    -ms-interpolation-mode: bicubic;
    }

    table tr {
    border-collapse: collapse;
    }

    p,
    hr {
    Margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
    Margin: 0;
    line-height: 120%;
    mso-line-height-rule: exactly;
    font-family: arial, 'helvetica neue', helvetica, sans-serif;
    }

    p,
    ul li,
    ol li,
    a {
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
    mso-line-height-rule: exactly;
    }

    .es-left {
    float: left;
    }

    .es-right {
    float: right;
    }

    .es-p5 {
    padding: 5px;
    }

    .es-p5t {
    padding-top: 5px;
    }

    .es-p5b {
    padding-bottom: 5px;
    }

    .es-p5l {
    padding-left: 5px;
    }

    .es-p5r {
    padding-right: 5px;
    }

    .es-p10 {
    padding: 10px;
    }

    .es-p10t {
    padding-top: 10px;
    }

    .es-p10b {
    padding-bottom: 10px;
    }

    .es-p10l {
    padding-left: 10px;
    }

    .es-p10r {
    padding-right: 10px;
    }

    .es-p15 {
    padding: 15px;
    }

    .es-p15t {
    padding-top: 15px;
    }

    .es-p15b {
    padding-bottom: 15px;
    }

    .es-p15l {
    padding-left: 15px;
    }

    .es-p15r {
    padding-right: 15px;
    }

    .es-p20 {
    padding: 20px;
    }

    .es-p20t {
    padding-top: 20px;
    }

    .es-p20b {
    padding-bottom: 20px;
    }

    .es-p20l {
    padding-left: 20px;
    }

    .es-p20r {
    padding-right: 20px;
    }

    .es-p25 {
    padding: 25px;
    }

    .es-p25t {
    padding-top: 25px;
    }

    .es-p25b {
    padding-bottom: 25px;
    }

    .es-p25l {
    padding-left: 25px;
    }

    .es-p25r {
    padding-right: 25px;
    }

    .es-p30 {
    padding: 30px;
    }

    .es-p30t {
    padding-top: 30px;
    }

    .es-p30b {
    padding-bottom: 30px;
    }

    .es-p30l {
    padding-left: 30px;
    }

    .es-p30r {
    padding-right: 30px;
    }

    .es-p35 {
    padding: 35px;
    }

    .es-p35t {
    padding-top: 35px;
    }

    .es-p35b {
    padding-bottom: 35px;
    }

    .es-p35l {
    padding-left: 35px;
    }

    .es-p35r {
    padding-right: 35px;
    }

    .es-p40 {
    padding: 40px;
    }

    .es-p40t {
    padding-top: 40px;
    }

    .es-p40b {
    padding-bottom: 40px;
    }

    .es-p40l {
    padding-left: 40px;
    }

    .es-p40r {
    padding-right: 40px;
    }

    .es-menu td {
    border: 0;
    }

    .es-menu td a img {
    display: inline-block !important;
    }

    /*
    END CONFIG STYLES
    */
    a {
    text-decoration: underline;
    }

    p,
    ul li,
    ol li {
    font-family: arial, 'helvetica neue', helvetica, sans-serif;
    line-height: 150%;
    }

    ul li,
    ol li {
    Margin-bottom: 15px;
    }

    .es-menu td a {
    text-decoration: none;
    display: block;
    }

    .es-wrapper {
    width: 100%;
    height: 100%;
    background-image: ;
    background-repeat: repeat;
    background-position: center top;
    }

    .es-wrapper-color {
    background-color: skyblue;
    }

    .es-header {
    background-color: transparent;
    background-image: ;
    background-repeat: repeat;
    background-position: center top;

    }

    .es-header-body {
    background-color: #fff;
    /*           background-color:#18769a;*/
    }

    .es-header-body p,
    .es-header-body ul li,
    .es-header-body ol li {
    color: #333333;
    font-size: 14px;
    }

    .es-header-body a {
    color: #ee6c6d;
    font-size: 14px;
    }

    .es-content-body {
    background-color: #ffffff;
    }

    .es-content-body p,
    .es-content-body ul li,
    .es-content-body ol li {
    color: #333333;
    font-size: 14px;
    }

    .es-content-body a {
    color: #ee6c6d;
    font-size: 14px;
    }

    .es-footer {
    background-color: transparent;
    background-image: ;
    background-repeat: repeat;
    background-position: center top;
    }

    .es-footer-body {
    background-color: #f7f7f7;
    }

    .es-footer-body p,
    .es-footer-body ul li,
    .es-footer-body ol li {
    color: #333333;
    font-size: 14px;
    }

    .es-footer-body a {
    color: #333333;
    font-size: 14px;
    }

    .es-infoblock,
    .es-infoblock p,
    .es-infoblock ul li,
    .es-infoblock ol li {
    line-height: 120%;
    font-size: 12px;
    color: #cccccc;
    }

    .es-infoblock a {
    font-size: 12px;
    color: #cccccc;
    }

    h1 {
    font-size: 30px;
    font-style: normal;
    font-weight: normal;
    color: #333333;
    }

    h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: normal;
    color: #333333;
    }

    h3 {
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    color: #333333;
    }

    .es-header-body h1 a,
    .es-content-body h1 a,
    .es-footer-body h1 a {
    font-size: 30px;
    }

    .es-header-body h2 a,
    .es-content-body h2 a,
    .es-footer-body h2 a {
    font-size: 24px;
    }

    .es-header-body h3 a,
    .es-content-body h3 a,
    .es-footer-body h3 a {
    font-size: 20px;
    }

    a.es-button,
    button.es-button {
    border-style: solid;
    border-color: #474745;
    border-width: 6px 25px 6px 25px;
    display: inline-block;
    background: #474745;
    border-radius: 20px;
    font-size: 16px;
    font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
    font-weight: normal;
    font-style: normal;
    line-height: 120%;
    color: #efefef;
    text-decoration: none;
    width: auto;
    text-align: center;
    }

    .es-button-border {
    border-style: solid solid solid solid;
    border-color: #474745 #474745 #474745 #474745;
    background: #474745;
    border-width: 0px 0px 0px 0px;
    display: inline-block;
    border-radius: 20px;
    width: auto;
    }

    /*
    RESPONSIVE STYLES
    Please do not delete and edit CSS styles below.

    If you don't need responsive layout, please delete this section.
    */
    @media only screen and (max-width: 600px) {

    p,
    ul li,
    ol li,
    a {
        line-height: 150% !important;
    }

    h1 {
        font-size: 30px !important;
        text-align: center;
        line-height: 120% !important;
    }

    h2 {
        font-size: 26px !important;
        text-align: center;
        line-height: 120% !important;
    }

    h3 {
        font-size: 20px !important;
        text-align: center;
        line-height: 120% !important;
    }

    .es-header-body h1 a,
    .es-content-body h1 a,
    .es-footer-body h1 a {
        font-size: 30px !important;
    }

    .es-header-body h2 a,
    .es-content-body h2 a,
    .es-footer-body h2 a {
        font-size: 26px !important;
    }

    .es-header-body h3 a,
    .es-content-body h3 a,
    .es-footer-body h3 a {
        font-size: 20px !important;
    }

    .es-menu td a {
        font-size: 16px !important;
    }

    .es-header-body p,
    .es-header-body ul li,
    .es-header-body ol li,
    .es-header-body a {
        font-size: 16px !important;
    }

    .es-content-body p,
    .es-content-body ul li,
    .es-content-body ol li,
    .es-content-body a {
        font-size: 16px !important;
    }

    .es-footer-body p,
    .es-footer-body ul li,
    .es-footer-body ol li,
    .es-footer-body a {
        font-size: 16px !important;
    }

    .es-infoblock p,
    .es-infoblock ul li,
    .es-infoblock ol li,
    .es-infoblock a {
        font-size: 12px !important;
    }

    *[class="gmail-fix"] {
        display: none !important;
    }

    .es-m-txt-c,
    .es-m-txt-c h1,
    .es-m-txt-c h2,
    .es-m-txt-c h3 {
        text-align: center !important;
    }

    .es-m-txt-r,
    .es-m-txt-r h1,
    .es-m-txt-r h2,
    .es-m-txt-r h3 {
        text-align: right !important;
    }

    .es-m-txt-l,
    .es-m-txt-l h1,
    .es-m-txt-l h2,
    .es-m-txt-l h3 {
        text-align: left !important;
    }

    .es-m-txt-r img,
    .es-m-txt-c img,
    .es-m-txt-l img {
        display: inline !important;
    }

    .es-button-border {
        display: inline-block !important;
    }

    a.es-button,
    button.es-button {
        font-size: 20px !important;
        display: inline-block !important;
        border-width: 6px 25px 6px 25px !important;
    }

    .es-btn-fw {
        border-width: 10px 0px !important;
        text-align: center !important;
    }

    .es-adaptive table,
    .es-btn-fw,
    .es-btn-fw-brdr,
    .es-left,
    .es-right {
        width: 100% !important;
    }

    .es-content table,
    .es-header table,
    .es-footer table,
    .es-content,
    .es-footer,
    .es-header {
        width: 100% !important;
        max-width: 600px !important;
    }

    .es-adapt-td {
        display: block !important;
        width: 100% !important;
    }

    .adapt-img {
        width: 100% !important;
        height: auto !important;
    }

    .es-m-p0 {
        padding: 0px !important;
    }

    .es-m-p0r {
        padding-right: 0px !important;
    }

    .es-m-p0l {
        padding-left: 0px !important;
    }

    .es-m-p0t {
        padding-top: 0px !important;
    }

    .es-m-p0b {
        padding-bottom: 0 !important;
    }

    .es-m-p20b {
        padding-bottom: 20px !important;
    }

    .es-mobile-hidden,
    .es-hidden {
        display: none !important;
    }

    tr.es-desk-hidden,
    td.es-desk-hidden,
    table.es-desk-hidden {
        width: auto !important;
        overflow: visible !important;
        float: none !important;
        max-height: inherit !important;
        line-height: inherit !important;
    }

    tr.es-desk-hidden {
        display: table-row !important;
    }

    table.es-desk-hidden {
        display: table !important;
    }

    td.es-desk-menu-hidden {
        display: table-cell !important;
    }

    .es-menu td {
        width: 1% !important;
    }

    table.es-table-not-adapt,
    .esd-block-html table {
        width: auto !important;
    }

    table.es-social {
        display: inline-block !important;
    }

    table.es-social td {
        display: inline-block !important;
    }
    }



    /*
    END RESPONSIVE STYLES
    */
    </style>
    <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    </head>

    <body>
    <div class="es-wrapper-color">
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
    <v:fill type="tile" color="#ffffff"></v:fill>
    </v:background>
    <![endif]-->
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td class="esd-email-paddings" valign="top">
    <table class="es-header esd-header-popover" align="center" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td class="es-adaptive esd-stripe" esd-custom-block-id="8429" align="center">
    <table class="es-header-body" align="center" width="600" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td class="esd-structure es-p25t es-p10b es-p20r es-p20l" align="left">
    <!--[if mso]><table width="560" cellpadding="0"
    cellspacing="0"><tr><td width="205" valign="top"><![endif]-->
    <table class="es-left" align="left" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td class="es-m-p0r es-m-p20b esd-container-frame" align="center" width="205" valign="top">
    <table width="100%" cellspacing="0" cellpadding="0">

    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]></td><td width="10"></td><td width="345" valign="top"><![endif]-->
    <table align="right" cellspacing="0" cellpadding="0">

    <tbody>
    <tr>
    <td class="esd-container-frame" align="left" width="345">
    <table width="100%" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td class="esd-block-menu" esd-img-prev-h="16" esd-img-prev-w="16" esd-tmp-divider="6|solid|#000000" esd-tmp-menu-font-size="18px">

    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]></td></tr></table><![endif]-->
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table class="es-content" align="center" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td class="esd-stripe" align="center">
    <table class="es-content-body" align="center" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
    <tbody>
    <tr>
    <td class="esd-structure es-p20t" esd-custom-block-id="8430" align="left">
    <table width="100%" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td class="esd-container-frame" align="center" width="600" valign="top">
    <table width="100%" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td class="esd-block-image es-p20r es-p20l" align="center" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://demo.stripocdn.email/content/guids/videoImgGuid/images/29731622031912891.png" alt="Image" style="display: block;" title="Image" width="260"></a></td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table class="es-content" align="center" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td class="esd-stripe" align="center">
    <table class="es-content-body" style="border-left:1px solid transparent;border-right:1px solid transparent;border-top:1px solid transparent;border-bottom:1px solid transparent;" align="center" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
    <tbody>
    <tr>
    <td class="esd-structure es-p20t es-p40b es-p40r es-p40l" esd-custom-block-id="8537" align="left">
    <table width="100%" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td class="esd-container-frame" align="left" width="518">
    <table width="100%" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td class="esd-block-image es-m-txt-c es-p5b" align="center" style="font-size:0"><a target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_944049925f70694686e3cfdb5a5862f4/images/69781523356282391.png" alt="Logo" style="display: block;" title="Logo" width="78"></a></td>
    </tr>
    <tr>
    <td class="esd-block-text es-m-txt-c" align="center">
    <h2>Hey there!  from ${from}<br></h2>
    </td>
    </tr>
    <tr>
    <td class="esd-block-text es-m-txt-c es-p15t" align="center">
    <p>To authenticate, please use the following One Time Password (OTP):<br><br></p>
    <h1>${otp}</h1>
    <p>Do not share this OTP with anyone.&nbsp;<br>We hope to see you again soon.<br></p>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table cellpadding="0" cellspacing="0" class="es-footer esd-footer-popover" align="center">
    <tbody>
    <tr>
    <td class="esd-stripe" esd-custom-block-id="8442" style="background-color: #f7f7f7;" bgcolor="#f7f7f7" align="center">
    <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" align="center">
    <tbody style="background:white;">
    <tr>
    <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" esd-general-paddings-checked="false" align="left">
    <table width="100%" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td class="esd-container-frame" width="560" valign="top" align="center">
    <table width="100%" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td class="esd-block-text es-p5b" align="center">
    <h3 style="line-height: 150%;">Let's get social</h3>
    </td>
    </tr>
    <tr>
    <td class="esd-block-social es-p10t es-p10b" align="center" style="font-size:0">
    <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td class="es-p20r" valign="top" align="center"><a href="https://www.youtube.com/channel/UCnIlggpxqkVzBoaEhP8S-3A"><img title="Youtube" src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" width="32" height="32"></a></td>
    <td class="es-p20r" valign="top" align="center"><a href="https://www.instagram.com/amitgujarpatil/" target="_blank"><img title="Instagram" src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Ig" width="32" height="32"></a></td>
    <td valign="top" align="center" esd-tmp-icon-type="linkedin"><a href="https://www.linkedin.com/in/amit-gujar-3b269a1b3/" target="_blank"><img title="Linkedin" src="https://stripo.email/static/assets/img/social-icons/logo-black/linkedin-logo-black.png" alt="In" width="32" height="32"></a></td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    <tr>
    <td align="center" class="esd-block-text es-p10t es-p10b">
    <p style="line-height: 150%;">You are receiving this email because you have visited our site .&nbsp;</p>
    </td>
    </tr>
    <tr>
    <td class="esd-block-text es-p10t es-p10b" align="center">
    <p>© 2021 code with amit</p>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>

    <h1> Current Time : ${curTime}</h1>

    </div>
    <div style="position: absolute; left: -9999px; top: -9999px; margin: 0px;"></div>
    </body>

    </html>
    `;
    return format;
    
}

};