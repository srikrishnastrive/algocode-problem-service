const marked = require('marked')
const sanitizeHtmlLibrary = require('sanitize-html')
const  TurndownService = require('turndown')

function sanitizedMarkdownContent(markdownContent){
    const  turndownService = new TurndownService()
    //1.convert markdown to html
    const convertedHtml = marked.parse(markdownContent);

    //2.sanitize html
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml,{
        allowedTags : sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])
    });


    //3.convert the sanitized html back markdown
    const sanitizedMarkdownHtml = turndownService.turndown(sanitizedHtml);

    return sanitizedMarkdownHtml;
}



module.exports = sanitizedMarkdownContent;