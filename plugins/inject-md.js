import MarkdownIt from 'markdown-it'

export default ({
    app
  }, inject) => {
  
    const md = require('markdown-it')
  
    inject('md', md)
  }