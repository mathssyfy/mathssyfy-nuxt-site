import MarkdownIt from 'markdown-it'

export default ({ app }, inject) => {
  const md = new MarkdownIt({"preset":"default","linkify":true,"breaks":true,"highlight":function (str, lang) {
  try {
    return hljs(str, lang);
  }
  catch (err) { }
},"use":["markdown-it-emoji","@mathssyfy\u002Fmarkdown-it-highlightlines","@mathssyfy\u002Fmarkdown-it-prewrapper","@mathssyfy\u002Fmarkdown-it-linenumbers"]})

  md.use(require('markdown-it-emoji'))

  md.use(require('@mathssyfy/markdown-it-highlightlines'))

  md.use(require('@mathssyfy/markdown-it-prewrapper'))

  md.use(require('@mathssyfy/markdown-it-linenumbers'))

  inject('md', md)
}
