<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\ResumeRecommendation;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $user = new User;
        $user->fname = "Aayam";
        $user->lname = "Khatiwada";
        $user->email = "aayam@gmail.com";
        $user->phoneno = "9818354005";
        $user->password = Hash::make("123");
        $user->save();

        $slug = array(
            'random_1', 'random_2'
        );

        $title = array(
            'Random 1', 'Random 2'
        );

        $resumeData = array(
            '"<table style=\"border:none;border-collapse:collapse;\"><colgroup><col><col></colgroup><tbody><tr style=\"height:0pt\"><td style=\"vertical-align:top;padding:0pt 5.4pt 0pt 5.4pt;overflow:hidden;overflow-wrap:break-word;\"><p style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"border:none;display:inline-block;overflow:hidden;width:152px;height:152px;\"><img src=\"https://lh4.googleusercontent.com/O4DlxQubumvb7w1F7MgOuQj0wGKAlGfR3iyFwjMnB9aExMzqmkxKz_ppxzbEleJzwRLHJv5Vkq3LN7axbUQKGMmPihJyYNA2A1-JTrVyo6Vp8I1gKlNt5z3ceHKh90EvLuxw4WFTzMJ4dUArUZHBbg\" width=\"152\" height=\"152\" style=\"margin-left:0px;margin-top:0px;\"></span></p></td><td style=\"vertical-align:top;padding:0pt 5.4pt 0pt 5.4pt;overflow:hidden;overflow-wrap:break-word;\"><p style=\"line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:17pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Aayam Khatiwada</span><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"><br>D.O.B.: April 11, 2003&nbsp;</span></p><p style=\"line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Address: RadheRadhe, Bhaktapur <br>Mobile No: 9818354005 <br>Email: </span><a style=\"text-decoration:none;\" href=\"mailto:khatiwadaaayam@gmail.com\"><span style=\"font-size:10pt;font-family:Arial;color:#0000ff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">khatiwadaaayam@gmail.com</span></a></p><p style=\"line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Portfolio: https://aayamkhatiwada.github.io/Portfolio_1/</span></p></td></tr></tbody></table><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:10pt;\"></p><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:10pt;\"><span style=\"font-size:13pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Personal Profile</span></p><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:10pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">An undergraduate, with a desire and dedication to learn new skills and improve it. Have some understanding of programming languages and also have basic understanding on the platform. Self-learner with a strong passion for new and creative working and want to get experience through mentorship.</span></p><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:10pt;\"><span style=\"font-size:13pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Education</span></p><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:10pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Bachelors (BSc (HONS) Computer Science) <br>Herald College, University of Wolverhampton <br>2020 – Ongoing</span></p><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:10pt;\"><span style=\"font-size:13pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Employment History</span></p><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:10pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Full-stack intern and developer at Nerd Platoon (worked from September 2022 to January 2023)</span></p><ul style=\"margin-top:0;margin-bottom:0;padding-inline-start:48px;\"><li style=\"list-style-type:disc;font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\"><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Worked on some React projects</span></p></li><li style=\"list-style-type:disc;font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\"><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Worked on the few Shopify Projects as the react developer</span></p></li><li style=\"list-style-type:disc;font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\"><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:10pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Created an api documentation for some website</span></p></li></ul><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:10pt;\"><span style=\"font-size:13pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Technical and Soft Skills</span></p><ol style=\"margin-top:0;margin-bottom:0;padding-inline-start:48px;\"><li style=\"list-style-type:decimal;font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\"><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Programming skills : HTML, CSS, JavaScript, PHP</span></p></li><li style=\"list-style-type:decimal;font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\"><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Platform : React, Vue js, Laravel, Shopify</span></p></li><li style=\"list-style-type:decimal;font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\"><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Other used software : MongoDB, postman, Figma</span></p></li><li style=\"list-style-type:decimal;font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\"><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Version Control System: Git</span></p></li><li style=\"list-style-type:decimal;font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\"><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:10pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Soft skill : Adaptability, Time management, Creativity, good communication&nbsp;</span></p></li></ol><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:10pt;\"><span style=\"font-size:13pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Few Projects</span></p><ol style=\"margin-top:0;margin-bottom:0;padding-inline-start:48px;\"><li style=\"list-style-type:decimal;font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\"><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Course management System using java</span></p></li><li style=\"list-style-type:decimal;font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\"><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Weather forecasting using REST API</span></p></li><li style=\"list-style-type:decimal;font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\"><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Tour Management System using php</span></p></li><li style=\"list-style-type:decimal;font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\"><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Simple chess using react</span></p></li><li style=\"list-style-type:decimal;font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\"><p style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Many other simple projects</span></p></li></ol><p></p><p style=\"line-height:1.3800000000000001;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">To see more projects: Visit: </span><a style=\"text-decoration:none;\" href=\"https://github.com/AayamKhatiwada\"><span style=\"font-size:10pt;font-family:Arial;color:#0000ff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">https://github.com/AayamKhatiwada</span></a><span style=\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">&nbsp;</span></p>"'
            , '"<table style=\"border:none;border-collapse:collapse;\"><colgroup><col><col></colgroup><tbody><tr style=\"height:120pt\"><td style=\"vertical-align:top;padding:3.6pt 3.6pt 3.6pt 3.6pt;overflow:hidden;overflow-wrap:break-word;\"><p style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:24pt;font-family:Raleway,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Your<br>Name</span></p><p style=\"line-height:1.2;margin-top:3pt;margin-bottom:0pt;\"><span style=\"font-size:16pt;font-family:Raleway,sans-serif;color:#f2511b;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Creative Director</span></p></td><td style=\"vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;\"><p style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"border:none;display:inline-block;overflow:hidden;width:418px;height:3px;\"><img src=\"https://lh6.googleusercontent.com/_Ukg1PLAv5Zt4G5yO2ISqOk5OsdxLV9Z2MB9V2ydEBfXs__vDrLOUrvUqCVhUOJDhg4p6cOoAMP-OIWvO7ldNYCgQvjVZak6WtbFoGIkq-0Eq-TgNju9NxVu-XQurDYgWzv65I1H1lWiyS_KYu7hNTk\" title=\"horizontal line\" width=\"418\" height=\"3\" style=\"margin-left:0px;margin-top:0px;\"></span></p><h1 style=\"line-height:1.38;margin-top:6pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Raleway,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Your Name</span></h1><p style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">123 Your Street</span></p><p style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Your City, ST 12345</span></p><p style=\"line-height:1.2;margin-top:10pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Lato,sans-serif;color:#d44500;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">123.456.7890</span></p><p style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Lato,sans-serif;color:#d44500;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">no_reply@example.com</span></p></td></tr><tr style=\"height:72pt\"><td style=\"vertical-align:top;padding:3.6pt 3.6pt 3.6pt 3.6pt;overflow:hidden;overflow-wrap:break-word;\"><p style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:13.999999999999998pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">ㅡ</span></p><h1 style=\"line-height:1.38;margin-top:4pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Raleway,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Skills</span></h1></td><td style=\"vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;\"><p style=\"line-height:1.38;margin-top:0pt;margin-bottom:0pt;\"><span style=\"border:none;display:inline-block;overflow:hidden;width:418px;height:3px;\"><img src=\"https://lh3.googleusercontent.com/sL2Dx0rVwKDVBtQHlkiIqhiySQpMNUPA8V8cLqKWuknhwQuHiQsk2QVOfK273h0UsYdHCrD36oMZJgSXRMIHUBXhjKuNU_4DuOqQpbvGM3zgJM4aqTKyzi_TgQgWdWEAPy-r7TF91A-4OdJMvpCMkdA\" title=\"horizontal line\" width=\"418\" height=\"3\" style=\"margin-left:0px;margin-top:0px;\"></span></p><p style=\"line-height:1.38;margin-top:6pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac interdum nisi. Sed in consequat mi. Sed pulvinar lacinia felis eu finibus.</span></p></td></tr><tr style=\"height:265pt\"><td style=\"vertical-align:top;padding:3.6pt 3.6pt 3.6pt 3.6pt;overflow:hidden;overflow-wrap:break-word;\"><p style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:13.999999999999998pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">ㅡ</span></p><h1 style=\"line-height:1.38;margin-top:4pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Raleway,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Experience</span></h1></td><td style=\"vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;\"><p style=\"line-height:1.38;margin-top:0pt;margin-bottom:0pt;\"><span style=\"border:none;display:inline-block;overflow:hidden;width:418px;height:3px;\"><img src=\"https://lh3.googleusercontent.com/TGk6JJtHOM-Hd37DU56L8CrD4hAFMYFcygHh60VbC6QJSLXh6eGwg5ns4gH9XSw1eyg4SQATSpNDOKEsCr99IYMKjv2XjwC0m37HUvrct-HmhqvzMmfLV4DwgkrINHGfdQ60uZkjtFfzUxNUBhNILC4\" title=\"horizontal line\" width=\"418\" height=\"3\" style=\"margin-left:0px;margin-top:0px;\"></span></p><h2 style=\"line-height:1.38;margin-top:6pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Company Name / </span><span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Job Title</span></h2><h3 style=\"line-height:1.38;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:9pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">MONTH 20XX - PRESENT,&nbsp; LOCATION</span></h3><p style=\"line-height:1.2;margin-top:5pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac interdum nisi. Sed in consequat mi. Sed in consequat mi, sed pulvinar lacinia felis eu finibus.</span></p><h2 style=\"line-height:1.38;margin-top:16pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Company Name / </span><span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Job Title</span></h2><h3 style=\"line-height:1.38;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:9pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">MONTH 20XX - MONTH 20XX,&nbsp; LOCATION</span></h3><p style=\"line-height:1.38;margin-top:5pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac interdum nisi. Sed in consequat mi.&nbsp;</span></p><h2 style=\"line-height:1.38;margin-top:16pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Company Name / </span><span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Job Title</span></h2><h3 style=\"line-height:1.38;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:9pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">MONTH 20XX - MONTH 20XX,&nbsp; LOCATION</span></h3><p style=\"line-height:1.2;margin-top:5pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac interdum nisi. Sed in consequat mi. Sed pulvinar lacinia felis eu finibus.&nbsp;</span></p></td></tr><tr style=\"height:182pt\"><td style=\"vertical-align:top;padding:3.6pt 3.6pt 3.6pt 3.6pt;overflow:hidden;overflow-wrap:break-word;\"><p style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:13.999999999999998pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">ㅡ</span></p><h1 style=\"line-height:1.38;margin-top:4pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Raleway,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Education</span></h1></td><td style=\"vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;\"><p style=\"line-height:1.38;margin-top:0pt;margin-bottom:0pt;\"><span style=\"border:none;display:inline-block;overflow:hidden;width:418px;height:3px;\"><img src=\"https://lh6.googleusercontent.com/dkMQfoK2i1oSMOLpTc3EuDOxcgiwC6pMAEV98cF7nH7okvagx8M1KLePQANmalaII8J1Gyb_Z6coG_MkE1hszFIJ6pqZE-S89l7-swQZ4mIgH2R7LLEQpXlkY3K8I10wiKwW5KyNNHM-XUdffRk13I4\" title=\"horizontal line\" width=\"418\" height=\"3\" style=\"margin-left:0px;margin-top:0px;\"></span></p><h2 style=\"line-height:1.38;margin-top:6pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">School Name / </span><span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Degree</span></h2><h3 style=\"line-height:1.38;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:9pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">MONTH 20XX - MONTH 20XX,&nbsp; LOCATION</span></h3><p style=\"line-height:1.38;margin-top:5pt;margin-bottom:0pt;\"><span style=\"font-size:9pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Lorem i</span><span style=\"font-size:10pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">psum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib</span><span style=\"font-size:9pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">h euismod tincidunt ut laoreet dolore.</span></p><h2 style=\"line-height:1.38;margin-top:16pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">School Name </span><span style=\"font-size:11pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">/ Degree</span></h2><h3 style=\"line-height:1.38;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:9pt;font-family:Lato,sans-serif;color:#666666;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">MONTH 20XX - MONTH 20XX,&nbsp; LOCATION</span></h3><p style=\"line-height:1.38;margin-top:5pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</span></p></td></tr><tr style=\"height:0pt\"><td style=\"vertical-align:top;padding:3.6pt 3.6pt 3.6pt 3.6pt;overflow:hidden;overflow-wrap:break-word;\"><p style=\"line-height:1.2;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:13.999999999999998pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">ㅡ</span></p><h1 style=\"line-height:1.38;margin-top:4pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Raleway,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Awards</span></h1></td><td style=\"vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;\"><p style=\"line-height:1.38;margin-top:0pt;margin-bottom:0pt;\"><span style=\"border:none;display:inline-block;overflow:hidden;width:418px;height:3px;\"><img src=\"https://lh6.googleusercontent.com/8AwUlakfEkns-kPa84iHziuD_GqIiS06BcHUeMWpCgK4YTMn0yesEt7MUeLgKtOFQbvBUIijM5NPVaRcTNGUSQ8cX62t1mTCEy9h0348FQMPP13sSibCwIDHn-jBnZKnn7_LT0iT-snFhUdr-UjrzX4\" title=\"horizontal line\" width=\"418\" height=\"3\" style=\"margin-left:0px;margin-top:0px;\"></span></p><p style=\"line-height:1.2;margin-top:6pt;margin-bottom:0pt;\"><span style=\"font-size:10pt;font-family:Lato,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac interdum nisi. Sed in consequat mi. Sed pulvinar lacinia felis eu finibus.</span></p></td></tr></tbody></table>"'
        );

        for ($i = 0; $i < 2; $i++) {
            $recommendation = new ResumeRecommendation;
            $recommendation->slug = $slug[$i];
            $recommendation->title = $title[$i];
            $recommendation->ResumeData = $resumeData[$i];
            $recommendation->save();
        }
    }
}
