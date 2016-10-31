/**
 * @file
 * File to handle changes of source code on links.
 *
 * @author Davi Cunha <davic@ciandt.com>, Jessica Cazotto <jessica@ciandt.com>,
 * Felipe Campos <felipeoc@ciandt.com>
 */

function trackSourceCode(targetWebsite, defaultTrackingCode, paramPattern) {
  // Get all 'a' tags on the page.
  var linkTags = jQuery('body').find('a');
  // Get source code value.
  var sourceCode = getSourceCodeParameter(paramPattern);
  // If source code exists, set source code value to cookie.
  if (undefined != sourceCode) {
    jQuery.cookie("source_code", sourceCode);
  }
  // If new source code exists.
  var hasCookie = (null != jQuery.cookie("source_code"));
  linkIterator(linkTags, targetWebsite, paramPattern, defaultTrackingCode, hasCookie);
}

/**
 * Get query string from url.
 */
function getSourceCodeParameter(paramPattern) {
  var queryString = window.location.search;
  // Get query string parameters.
  var parameters = queryString.split("&");
  var paramCount;
  for (paramCount = 0; paramCount < parameters.length; paramCount++) {
    // Return source code value if it exists.
    if (parameters[paramCount].indexOf(paramPattern + '=') !== -1) {
      return parameters[paramCount].split('=')[1];
    }
  }
}

/**
 * Loop through all the 'a' tags and append the source code if needed.
 */
function linkIterator(linkTags, targetWebsite, paramPattern, defaultTrackingCode, cookieSet) {
  // Loop through the tags passed in the linkTags arg.
  jQuery.each(linkTags, function() {
    // Skip this loop if the actual link doesn't have a href attribute.
    if (undefined == jQuery(this).attr('href')) {
      return;
    }

    // Skip this loop if the actual link doesn't refer to the
    // specified target website.
    if (jQuery(this).attr('href').indexOf(targetWebsite) == -1) {
      return;
    }

    // Skip this loop if the actual link already contains
    // a source code.
    if (jQuery(this).attr('href').indexOf(paramPattern) !== -1) {
      return;
    }

    // Set the default value and override it if the cookie is set.
    var paramValue = defaultTrackingCode;
    if (cookieSet === true) {
      paramValue = jQuery.cookie("source_code")
    }

    // Check if there is a parameter set and alter the href.
    if (paramValue != null) {
      jQuery(this).attr('href', jQuery(this).attr('href') + '?' + paramPattern + '=' + paramValue);
    }
  });
}
