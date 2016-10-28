# Source Code Handler

INTRODUCTION
------------

The Source Code script provides a handler for default source codes and for
source codes passed through other websites using cookies to store the values.


INSTALLATION
------------

 * Just download the javascript file and add it to your project


CONFIGURATION
-------------

 * To use it, simply call the main function trackSourceCode() on a Document ready
 event.
 * The function expects three parameters:
   ## targetWebsite
     - This parameter is the base for the script to scan through the 'a' tags on
     the website and locate which links will have interaction with the source
     code. All links that refer to this website will be added to the queue of
     links that must contain a source code.  
       Examples: 'google.com', 'youtube.com/channel'.

   ## defaultTrackingCode
     - This parameter is the default tracking code to add to the links if there is
     no custom tracking code on the cookies nor on the URL.
     * If there is no default tracking code for the website, the parameter
     accepts `null` as a value, meaning that no source code at all will be added
     to the links if there is nothing custom.  
       Examples: 'CODE123', null.

   ## paramPattern
     - This parameter is the name of the parameter that might be in the URL for
     the script to track if there is any custom source code and handle it with
     cookies.  
       Examples: 'src_code', 'src'.


FUTURE DEVELOPMENTS
-------------------

The plan is to implement a server side php to get the default tracking value
automatically from a choosable form field of the website.


CREDITS
---------------------------

Davi Cunha <davic@ciandt.com>
Jessica Cazotto <jessica@ciandt.com>
Felipe Campos <felipeoc@ciandt.com>
