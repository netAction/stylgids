$(function() {
	// TODO: Sections hideable
	// TODO: Table of contents

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

		function escapeHtml(string) {
			// Escape a html string and highlight tags
			var entityMap = {
				"&": "&amp;",
				"<": "<strong>&lt;",
				">": "&gt;</strong>",
				'"': '&quot;',
				"'": '&#39;',
				"/": '&#x2F;'
			};

			return String(string).replace(/[&<>"'\/]/g, function (s) {
				return entityMap[s];
			});
		}
		html = escapeHtml(html);

		$('<div class="stylgids-code"></div>').html(html).insertAfter($(this));
	});
});
