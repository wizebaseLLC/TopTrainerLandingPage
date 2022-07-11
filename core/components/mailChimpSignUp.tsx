import { Box } from "@chakra-ui/react";

const MailChimpSignUp = () => {
  return (
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css">
          <style type="text/css">
            #mc_embed_signup{background:#191A32; color: #fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:400px;}
          </style>
          <div id="mc_embed_signup">
          <form action="https://scom.us9.list-manage.com/subscribe/post?u=dd33de389cbe623440f851c72&amp;id=d411ed306c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
            <h2>Subscribe for updates</h2>
          <div class="mc-field-group">
            <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
          </label>
            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" style="color: black;">
          </div>
            <div id="mce-responses" class="clear foot">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_dd33de389cbe623440f851c72_d411ed306c" tabindex="-1" value=""></div>
                  <div class="optionalParent">
                      <div class="clear foot">
                          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" style="background: linear-gradient(135deg, #FFFFFF 0%, #FBBC21 100%); color: black; font-weight: bold;">
                      </div>
                  </div>
              </div>
          </form>
          </div>
          <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
       
     `,
        }}
      />
    </Box>
  );
};

export default MailChimpSignUp;
