<?php
ob_start();
 function get_client_ip() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = '';

    return $ipaddress;
}

// function get_user_agent() {
//     $userAgent = '';
//     if (isset($_SERVER['HTTP_USER_AGENT']))
//         $userAgent = $_SERVER['HTTP_USER_AGENT'];

//     return $userAgent;
// }

function get_referer() 
{
    $referer = '';
    if (isset($_SERVER['HTTP_HOST']))
        $referer = $_SERVER['HTTP_HOST'];
    
    return $referer;
}


function redirect($url, $statusCode = 303)
{
   header('Location: ' . $url, true, $statusCode);
   die();
}

function getRequestParams(){
    $params = array();
    
    // take get params from referer
    $params['referer'] = get_referer();
    $parts = parse_url($params['referer']);
    parse_str($parts['query'], $query); 
    
    // link ID (integer)
    if(isset($_POST['link_id']))
        $params['link_id'] = $_POST['link_id'];
    else $params['link_id'] = '';

    // First name
    if(isset($_POST['f_name']))
        $params['f_name'] = $_POST['f_name'];
    else $params['f_name'] = '';

    // Email
    if(isset($_POST['email']))
        $params['email'] = $_POST['email'];
    else $params['email'] = '';

    // Phone format with plus sign
    if(isset($_POST['full_phone']))
        $params['full_phone'] = $_POST['full_phone'];
    else $params['full_phone'] = '';
    
    // Source (creative label)
    if(isset($_POST['source']))
        $params['source'] = $_POST['source'];
    else $params['source'] = '';
    
    //Last name
    if(isset($_POST['l_name']))
        $params['l_name'] = $_POST['l_name'];
    else $params['l_name'] = '';
    
    // User password
    if(isset($_POST['pass']))
        $params['pass'] = $_POST['pass'];
    else $params['pass'] = '';
    
    // Country
    if(isset($_POST['country']))
        $params['country'] = $_POST['country'];
    else $params['country'] = '';
    
    // Lead language
    if(isset($_POST['language']))
        $params['language'] = $_POST['language'];
    else $params['language'] = '';
    
    // Description (quiz answers, etc.)
    if(isset($_POST['description']))
        $params['description'] = $_POST['description'];
    else $params['description'] = '';

    // FB or Google
    if(isset($_POST['utm_source']))
        $params['utm_source'] = $_POST['utm_source'];
    else $params['utm_source'] = '';
    
    // utm_campaign
    if(isset($_POST['utm_campaign']))
        $params['utm_campaign'] = $_POST['utm_campaign'];
    else $params['utm_campaign'] = '';

    // utm_medium
    if(isset($_POST['utm_medium']))
        $params['utm_medium'] = $_POST['utm_medium'];
    else $params['utm_medium'] = '';

    // utm_term
    if(isset($_POST['utm_term']))
        $params['utm_term'] = $_POST['utm_term'];
    else $params['utm_term'] = '';

    // utm_content
    if(isset($_POST['utm_content']))
        $params['utm_content'] = $_POST['utm_content'];
    else $params['utm_content'] = '';

    // click_id using in Pixels
    if(isset($_POST['click_id']))
        $params['click_id'] = $_POST['click_id'];
    else $params['click_id'] = '';

    if(isset($_POST['answer-0']))
        $params['answer-0'] = $_POST['answer-0'];
    else $params['answer-0'] = 'Skip';

    if(isset($_POST['answer-1']))
        $params['answer-1'] = $_POST['answer-1'];
    else $params['answer-1'] = 'Skip';
    
    if(isset($_POST['answer-2']))
        $params['answer-2'] = $_POST['answer-2'];
    else $params['answer-2'] = 'Skip';

    if(isset($_POST['answer-3']))
        $params['answer-3'] = $_POST['answer-3'];
    else $params['answer-3'] = 'Skip';

    if(isset($_POST['answer-4']))
        $params['answer-4'] = $_POST['answer-4'];
    else $params['answer-4'] = 'Skip';

     if(isset($_POST['answer-5']))
        $params['answer-5'] = $_POST['answer-5'];
    else $params['answer-5'] = 'Skip';

    return $params;
}

    function sendToCRM($p) {
     $api_key = '6t4lInHdcI2yO04OQMkN9n4cWPCFliTmzDSaDqQvWvMeFgduHrth9XIp0ANW';
     $url = 'https://marketing.adone.ai/api/v3/integration?api_token='.$api_key;
     $stepdescription = "#1 ".$p['answer-0']." "."#2 ".$p['answer-1']." "."#3 ".$p['answer-2']." "."#4 ".$p['answer-3']." "."#5 ".$p['answer-4']." "."#6 ".$p['answer-5'];;
      $data = array(
        
          'link_id' => '189',
          'fname' => $p["f_name"],
          'lname' => $p["l_name"],
          'fullphone' => $p['full_phone'],
          'email' => $p['email'],
          'source'=> 'Chat GPT ES',
          'ip' => $_SERVER['REMOTE_ADDR'],
          'domain' => get_referer(),
          'description' => $p['description'],
          'utm_source' => $p['utm_source'],
          'utm_campaign' => $p['utm_campaign'],
          'utm_medium' => $p['utm_medium'],
          'utm_term' => $p['utm_term'],
          'utm_content' => $p['utm_content'],
          'click_id' => $p['click_id']
         
      );
      // use key 'http' even if you send the request to https://...
       $options = array(
          'http' => array(
               'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
               'method'  => 'POST',
               'content' => http_build_query($data)
           )
       );
       $context  = stream_context_create($options);
       $result = file_get_contents($url, false, $context); 
      $resultSendingCRM = json_decode($result,true);

      return $resultSendingCRM;
       
 }



    //main logic --------------
    
     $request_params = getRequestParams();
     print_r($request_params);
        $resultsend = sendToCRM($request_params);
      
         if ($resultsend["success"] == 'true') {
            print_r($resultsend);
        
        // redirect($resultsend["autologin"]);
    // } else {
    //       redirect('thanks/index.html');
    
    //   }
 

 ?>   