# Markdown to HTML in JS
This is a md to htmk parser in javascript. Work in progress.

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

# Example HTML output
```html
<h1>h1</h1>
<h1>h11</h1>
<h2>h2</h2>

<li>Item 1</li>
<li>Item 2</li>

<i>Kursiv</i> nichts <b>bold</b>
			
Normaler Text in Absatz
			
<span class='quote'>Zitat</span>
<span class='quote'>Zweite Zeile</span>
```
