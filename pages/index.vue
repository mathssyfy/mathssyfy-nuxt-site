<template>
<div>
  <h1>{{test}}</h1>

 <h1>{{linewrapper}}</h1>

</div>
  <!-- <div v-html="$md.render(model)">{{ test}}</div> -->
</template>

<script>
const texttest = '# Hello World! ;)\nhop\ngerflor';
const lines = texttest.split('\n')
var textSortie = ''
var i;
for (i = 0; i < lines.length; i++) { 
  textSortie += `<span class="line-number">${i+1}</span><br>`;
} 
const lineNumbersCode = [...Array(lines.length - 1)]
      .map((line, index) => `<span class="line-number">${index + 1}</span><br>`).join('')
const lineNumbersWrapperCode =
      `<div class="line-numbers-wrapper">${textSortie}</div>`
export default {
  data() {
    return {
      test: texttest,
      model: texttest.split('\n'),
      linewrapper: lineNumbersWrapperCode,
      sortie : textSortie
      
      
          }
  }
  
 
}
</script>