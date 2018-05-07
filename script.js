function doPattern(text, regex, replaceFn){
	let output = text;
	let match = regex.exec(text);
	
	while (match != null) {
		output = output.replace(match[0], replaceFn(match[1]));
		match = regex.exec(text);
	}
		
	return output;
}

function transformToMarkdown(text){
	//#
	text = doPattern(text, /^ *# (.+)/gm, function(m){ return "<h1>" + m + "</h1>"});
	//##
	text = doPattern(text, /^ *## (.+)/gm, function(m){ return "<h2>" + m + "</h2>"});
	//*
	text = doPattern(text, /^ *\* (.+)/gm, function(m){ return "<li>" + m + "</li>"}); //Todo: ul
	//**text**
	text = doPattern(text, /\*\*(.+)?\*\*/gm, function(m){ return "<b>" + m + "</b>"});
	//*text*
	text = doPattern(text, /\*(.+)?\*/gm, function(m){ return "<i>" + m + "</i>"});
	//>
	text = doPattern(text, /^ *> (.+)/gm, function(m){ return "<span class='quote'>" + m + "</span>"});
	
	//Create paragraphs
	let blockTags = ["<h1>", "<h2>", "<span class='quote'>", "<li>"];
	let lines = text.split('\n');
	for(let line in lines){
		if(/\S+/.test(lines[line])){ //Check if empty
			let needToDoParagraph = true;
			for(let tag in blockTags)
				if(lines[line].startsWith(blockTags[tag]))
					needToDoParagraph = false;
			
			if(needToDoParagraph)
				lines[line] = "<span class='paragraph'>" + lines[line] + "</span>";
		}
	}
	
	return lines.join('');
}

$(document).ready(function () 
{
	let text = transformToMarkdown($("#md_content").text());
	
	console.log(text);
	$("#md_content").html(text);	
});