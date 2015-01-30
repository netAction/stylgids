// stylgids Style Guide Generator Javascript
// By Thomas netAction Schmidt
// License: MIT

$(function() {
	// Pick up the HTML of all .stylgids-example
	// and create a .stylgids-code element right below
	// containing the same code.
	$('.stylgids-example').each(function() {
		var html = $(this).html();

		// Tabs to spaces
		html = html.replace(new RegExp('\t', 'g'), '  ');
		// Strip leading line break
		if (html.charAt(0) == "\n") html = html.substr(1);

		// Detect leading spaces from first line
		var leading = '';
		for (var i=0; 1; i++) {
			if (html.charAt(i) == " ") {
				leading += html.charAt(i);
			} else {
				break;
			}
		}

		// Strip the spaces from every line so global indentation will be removed
		html = html.replace( new RegExp('\n'+leading, 'g'), '\n');

		// Trim trailing white spaces
		html = $.trim(html);

		// Escape html string and highlight tags
		html = String(html).replace(/[&<>]/g, function (s) {
			return {
				"&": "&amp;",
				"<": "<strong>&lt;",
				">": "&gt;</strong>"
			}[s];
		});

		$('<div class="stylgids-code"></div>').html(html).insertAfter($(this));
	});
});
