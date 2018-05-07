# Markdown to HTML in JS
This is a md to html parser in javascript. To try it out: [Live!](http://moritzgoeckel.com/Markdown-to-HTML/)

# Example Markdown input
```markdown
# h1
# h11
## h2

* Item 1
* Item 2

*Kursiv* nichts **bold**
			
Normaler Text in Absatz
			
> Zitat
> Zweite Zeile
```

# Visual output
![Example formatted md visual output](https://raw.githubusercontent.com/MoritzGoeckel/Markdown-to-HTML/master/example.JPG)

# Example HTML output
```html
<h1>h1</h1>
<h1>h11</h1>
<h2>h2</h2>

<li>Item 1</li>
<li>Item 2</li>

<span class='paragraph'><i>Kursiv</i> nichts <b>bold</b></span>
<span class='paragraph'>Normaler Text in Absatz</span>

<span class='quote'>Zitat</span>
<span class='quote'>Zweite Zeile</span>	
```
