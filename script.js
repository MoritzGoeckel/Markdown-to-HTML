function doPattern(text, regex, replaceFn){
	let output = text;
	let match = regex.exec(text);
	
	while (match != null) {
		output = output.replace(match[0], replaceFn(match[1]));
		match = regex.exec(text);
	}
		
	return output;
}

$(document).ready(function () 
{
	let text = $("#md_content").text();
	
	//#
	text = doPattern(text, /^ *# (.+)/gm, function(m){ return "<h1>" + m + "</h1>"});
	//##
	text = doPattern(text, /^ *## (.+)/gm, function(m){ return "<h2>" + m + "</h2>"});
	//*
	text = doPattern(text, /^ *\* (.+)/gm, function(m){ return "<li>" + m + "</li>"}); //ul
	//**text**
	text = doPattern(text, /\*\*(.+)?\*\*/gm, function(m){ return "<b>" + m + "</b>"});
	//*text*
	text = doPattern(text, /\*(.+)?\*/gm, function(m){ return "<i>" + m + "</i>"});
	//>
	text = doPattern(text, /^ *> (.+)/gm, function(m){ return "<span class='quote'>" + m + "</span>"});
	//Blank
	text = doPattern(text, /^\s*\n/gm, function(m){ return "</span><span class='paragraph'>"});
	text = text.substring("</span>".length, text.length);
	text += "</span>";
	
	console.log(text);
	$("#md_content").html(text);
	
	/*$.get(".", function(data) 
	{
		$("#fileNames").append(data);
	});*/
	
});