const marked = require('marked')
const sanitizeHtmlLibrary = require('sanitize-html')
const  TurndownService = require('turndown')

function sanitizedMarkdownContent(markdownContent){
    const  turndownService = new TurndownService()
    //1.convert markdown to html
    const convertedHtml = marked.parse(markdownContent);

    console.log("Converted Html",convertedHtml);

    //2.sanitize html
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml,{
        allowedTags : sanitizeHtmlLibrary.defaults.allowedTags
    });
    console.log("sanitized html",sanitizedHtml)
    
   
    //3.convert the sanitized html back markdown
    const sanitizedMarkdownHtml = turndownService.turndown(sanitizedHtml);

    console.log("Sanitized converted markdown",sanitizedMarkdownHtml);

    return sanitizedMarkdownHtml;
}



module.exports = sanitizedMarkdownContent;